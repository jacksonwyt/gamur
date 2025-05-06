import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ForbiddenException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Tokens } from 'src/common/types/tokens.type';
import { User } from 'generated/prisma/client';
import { Prisma } from 'generated/prisma/client';

// Mock bcrypt functions
jest.mock('bcrypt');

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;
  let jwt: JwtService;
  let config: ConfigService;

  const mockPrismaService = {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      updateMany: jest.fn(),
    },
    profile: {
      create: jest.fn(),
    },
    $transaction: jest.fn().mockImplementation(async (callback) => {
      // Simulate the transaction callback by providing mock transaction client (tx)
      // that mirrors the methods used within the transaction block.
      const mockTx = {
        user: {
          create: mockPrismaService.user.create,
        },
        profile: {
          create: mockPrismaService.profile.create,
        },
      };
      return callback(mockTx);
    }),
  };

  const mockJwtService = {
    signAsync: jest.fn(),
  };

  const mockConfigService = {
    get: jest.fn((key: string) => {
      if (key === 'JWT_ACCESS_SECRET') return 'access-secret';
      if (key === 'JWT_REFRESH_SECRET') return 'refresh-secret';
      if (key === 'JWT_ACCESS_EXPIRATION_TIME') return '15m';
      if (key === 'JWT_REFRESH_EXPIRATION_TIME') return '7d';
      return null;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: JwtService, useValue: mockJwtService },
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
    jwt = module.get<JwtService>(JwtService);
    config = module.get<ConfigService>(ConfigService);

    // Reset mocks before each test
    jest.clearAllMocks();
    (bcrypt.hash as jest.Mock).mockClear();
    (bcrypt.compare as jest.Mock).mockClear();

    // Default mock implementations
    (bcrypt.hash as jest.Mock).mockResolvedValue('hashed-password');
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
    mockJwtService.signAsync.mockResolvedValue('test-token');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    const registerDto: RegisterDto = {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
    };
    const mockUser = { id: 1, email: registerDto.email, name: registerDto.name, password: 'hashed-password', createdAt: new Date(), updatedAt: new Date(), hashedRefreshToken: null };
    const mockTokens: Tokens = { access_token: 'access-token', refresh_token: 'refresh-token' };

    it('should throw ForbiddenException if user already exists', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUser as any);
      await expect(service.register(registerDto)).rejects.toThrow(ForbiddenException);
      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({ where: { email: registerDto.email } });
    });

    it('should register a new user, create a profile, and return tokens', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(null);
      (bcrypt.hash as jest.Mock).mockResolvedValueOnce('hashed-password-for-register');
      mockPrismaService.user.create.mockResolvedValueOnce({ ...mockUser, password: 'hashed-password-for-register' } as any);
      mockPrismaService.profile.create.mockResolvedValueOnce({} as any); // Profile creation result doesn't matter much for this test
      mockJwtService.signAsync
        .mockResolvedValueOnce('generated-access-token')
        .mockResolvedValueOnce('generated-refresh-token');
      (bcrypt.hash as jest.Mock).mockResolvedValueOnce('hashed-refresh-token'); // For updateRefreshTokenHash
      mockPrismaService.user.update.mockResolvedValueOnce({} as any);

      const result = await service.register(registerDto);

      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({ where: { email: registerDto.email } });
      expect(bcrypt.hash).toHaveBeenCalledWith(registerDto.password, 10); // For password
      expect(mockPrismaService.$transaction).toHaveBeenCalled();
      expect(mockPrismaService.user.create).toHaveBeenCalledWith({
        data: {
          email: registerDto.email,
          password: 'hashed-password-for-register',
          name: registerDto.name,
        },
      });
      expect(mockPrismaService.profile.create).toHaveBeenCalledWith({
        data: {
          userId: mockUser.id, // Assuming ID 1 from mockUser
          username: registerDto.email,
        },
      });
      expect(mockJwtService.signAsync).toHaveBeenCalledTimes(2);
      expect(bcrypt.hash).toHaveBeenCalledWith('generated-refresh-token', 10); // For refresh token
      expect(mockPrismaService.user.update).toHaveBeenCalledWith({
        where: { id: mockUser.id },
        data: { hashedRefreshToken: 'hashed-refresh-token' },
      });
      expect(result).toEqual({ access_token: 'generated-access-token', refresh_token: 'generated-refresh-token' });
    });

    it('should throw InternalServerErrorException if updateRefreshTokenHash fails during registration', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(null);
      mockPrismaService.user.create.mockResolvedValueOnce(mockUser as any);
      mockPrismaService.profile.create.mockResolvedValueOnce({} as any);
      mockJwtService.signAsync.mockResolvedValue('some-token');
      (bcrypt.hash as jest.Mock).mockImplementationOnce(async () => 'hashedPassword'); // For user password
      (bcrypt.hash as jest.Mock).mockImplementationOnce(async () => { 
        throw new Error('Hashing refresh token failed'); 
      }); // Simulate failure in updateRefreshTokenHash during its bcrypt.hash call

      // Spy on console.error to suppress output for this specific test
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      await expect(service.register(registerDto)).rejects.toThrow(InternalServerErrorException);
      
      consoleErrorSpy.mockRestore(); // Restore console.error

      expect(mockPrismaService.user.update).not.toHaveBeenCalled(); // update should not be called if hashing fails before it
    });

  });

  describe('login', () => {
    const loginDto: LoginDto = { email: 'test@example.com', password: 'password123' };
    const mockUser: User = { 
      id: 1, 
      email: 'test@example.com', 
      password: 'hashed-password', 
      name: 'Test User', 
      createdAt: new Date(), 
      updatedAt: new Date(), 
      hashedRefreshToken: null 
    };
    const mockTokens: Tokens = { access_token: 'access-token', refresh_token: 'refresh-token' };

    it('should login an existing user and return tokens', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValueOnce(true);
      mockJwtService.signAsync
        .mockResolvedValueOnce('generated-access-token')
        .mockResolvedValueOnce('generated-refresh-token');
      (bcrypt.hash as jest.Mock).mockResolvedValueOnce('hashed-refresh-token'); // For updateRefreshTokenHash
      mockPrismaService.user.update.mockResolvedValueOnce({} as any);

      const result = await service.login(loginDto);

      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({ where: { email: loginDto.email } });
      expect(bcrypt.compare).toHaveBeenCalledWith(loginDto.password, mockUser.password);
      expect(mockJwtService.signAsync).toHaveBeenCalledTimes(2);
      expect(bcrypt.hash).toHaveBeenCalledWith('generated-refresh-token', 10);
      expect(mockPrismaService.user.update).toHaveBeenCalledWith({
        where: { id: mockUser.id },
        data: { hashedRefreshToken: 'hashed-refresh-token' },
      });
      expect(result).toEqual({ access_token: 'generated-access-token', refresh_token: 'generated-refresh-token' });
    });

    it('should throw UnauthorizedException if user is not found', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(null);
      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({ where: { email: loginDto.email } });
    });

    it('should throw UnauthorizedException if user has no password (not fully registered)', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce({ ...mockUser, password: null });
      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({ where: { email: loginDto.email } });
    });
    
    it('should throw UnauthorizedException if password does not match', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValueOnce(false);
      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
      expect(bcrypt.compare).toHaveBeenCalledWith(loginDto.password, mockUser.password);
    });

    it('should throw InternalServerErrorException if updateRefreshTokenHash fails during login', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValueOnce(true);
      mockJwtService.signAsync.mockResolvedValue('some-token');
      (bcrypt.hash as jest.Mock).mockImplementationOnce(async () => { 
        // This mock is for the updateRefreshTokenHash's call to hashData
        throw new Error('Hashing refresh token failed'); 
      }); 

      // Spy on console.error to suppress output for this specific test
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      await expect(service.login(loginDto)).rejects.toThrow(InternalServerErrorException);
      
      consoleErrorSpy.mockRestore(); // Restore console.error

      expect(mockPrismaService.user.update).not.toHaveBeenCalled(); 
    });
  });

  describe('logout', () => {
    const userId = 1;

    it('should logout a user by clearing their refresh token hash', async () => {
      mockPrismaService.user.updateMany.mockResolvedValueOnce({ count: 1 } as any);

      const result = await service.logout(userId);

      expect(mockPrismaService.user.updateMany).toHaveBeenCalledWith({
        where: {
          id: userId,
          hashedRefreshToken: { not: null },
        },
        data: {
          hashedRefreshToken: null,
        },
      });
      expect(result).toBe(true);
    });

    it('should return true even if no user was updated (e.g., token already null)', async () => {
      mockPrismaService.user.updateMany.mockResolvedValueOnce({ count: 0 } as any);
      const result = await service.logout(userId);
      expect(result).toBe(true); // The method returns true as long as the db call itself doesn't throw an error before the try-catch
    });

    it('should return false if prisma updateMany fails', async () => {
      mockPrismaService.user.updateMany.mockRejectedValueOnce(new Error('DB error'));
      
      // Spy on console.error to suppress output for this specific test
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      const result = await service.logout(userId);
      
      consoleErrorSpy.mockRestore(); // Restore console.error
      expect(result).toBe(false);
    });
  });

  describe('refreshTokens', () => {
    const userId = 1;
    const refreshToken = 'old-refresh-token';
    const mockUserWithToken: User = { 
      id: userId, 
      email: 'test@example.com', 
      password: 'hashed-password', 
      name: 'Test User', 
      createdAt: new Date(), 
      updatedAt: new Date(), 
      hashedRefreshToken: 'hashed-old-refresh-token' 
    };
    const newTokens: Tokens = { access_token: 'new-access-token', refresh_token: 'new-refresh-token' };

    it('should refresh tokens successfully', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUserWithToken);
      (bcrypt.compare as jest.Mock).mockResolvedValueOnce(true); // RT matches
      mockJwtService.signAsync
        .mockResolvedValueOnce(newTokens.access_token)
        .mockResolvedValueOnce(newTokens.refresh_token);
      (bcrypt.hash as jest.Mock).mockResolvedValueOnce('hashed-new-refresh-token'); // For updateRefreshTokenHash
      mockPrismaService.user.update.mockResolvedValueOnce({} as any);

      const result = await service.refreshTokens(userId, refreshToken);

      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({ where: { id: userId } });
      expect(bcrypt.compare).toHaveBeenCalledWith(refreshToken, mockUserWithToken.hashedRefreshToken);
      expect(mockJwtService.signAsync).toHaveBeenCalledTimes(2);
      expect(bcrypt.hash).toHaveBeenCalledWith(newTokens.refresh_token, 10);
      expect(mockPrismaService.user.update).toHaveBeenCalledWith({
        where: { id: userId },
        data: { hashedRefreshToken: 'hashed-new-refresh-token' },
      });
      expect(result).toEqual(newTokens);
    });

    it('should throw ForbiddenException if user not found', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(null);
      await expect(service.refreshTokens(userId, refreshToken)).rejects.toThrow(ForbiddenException);
    });

    it('should throw ForbiddenException if user has no refresh token stored', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce({ ...mockUserWithToken, hashedRefreshToken: null });
      await expect(service.refreshTokens(userId, refreshToken)).rejects.toThrow(ForbiddenException);
    });

    it('should throw ForbiddenException and call logout if refresh token does not match', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUserWithToken);
      (bcrypt.compare as jest.Mock).mockResolvedValueOnce(false); // RT does not match
      // Mock the logout call within refreshTokens if RT doesn't match
      mockPrismaService.user.updateMany.mockResolvedValueOnce({ count: 1 } as any); // Simulate logout succeeding

      await expect(service.refreshTokens(userId, refreshToken)).rejects.toThrow(ForbiddenException);
      expect(bcrypt.compare).toHaveBeenCalledWith(refreshToken, mockUserWithToken.hashedRefreshToken);
      // Check if logout (which calls updateMany) was called
      expect(mockPrismaService.user.updateMany).toHaveBeenCalledWith({
        where: { id: userId, hashedRefreshToken: { not: null } },
        data: { hashedRefreshToken: null },
      });
    });

    it('should throw InternalServerErrorException if updateRefreshTokenHash fails', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUserWithToken);
      (bcrypt.compare as jest.Mock).mockResolvedValueOnce(true); // RT matches
      mockJwtService.signAsync
        .mockResolvedValueOnce(newTokens.access_token)
        .mockResolvedValueOnce(newTokens.refresh_token);
      // Simulate bcrypt.hash failing within updateRefreshTokenHash
      (bcrypt.hash as jest.Mock).mockImplementationOnce(async () => { 
        throw new Error('Hashing new refresh token failed'); 
      }); 

      // Spy on console.error to suppress output for this specific test
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      await expect(service.refreshTokens(userId, refreshToken)).rejects.toThrow(InternalServerErrorException);

      consoleErrorSpy.mockRestore();
      expect(mockPrismaService.user.update).not.toHaveBeenCalled(); // update should not be called if hashing fails before it
    });
  });

  describe('validateUser', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const mockUser: User = { 
      id: 1, 
      email: email, 
      password: 'hashed-password', 
      name: 'Test User', 
      createdAt: new Date(), 
      updatedAt: new Date(), 
      hashedRefreshToken: 'some-refresh-token' 
    };

    it('should return user object without password/hashedRefreshToken if credentials are valid', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValueOnce(true);

      const result = await service.validateUser(email, password);

      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({ where: { email } });
      expect(bcrypt.compare).toHaveBeenCalledWith(password, mockUser.password);
      expect(result).toBeDefined();
      expect(result?.id).toEqual(mockUser.id);
      expect(result?.email).toEqual(mockUser.email);
      expect(result).not.toHaveProperty('password');
      expect(result).not.toHaveProperty('hashedRefreshToken');
    });

    it('should return null if user is not found', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(null);
      const result = await service.validateUser(email, password);
      expect(result).toBeNull();
    });

    it('should return null if password does not match', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValueOnce(false);
      const result = await service.validateUser(email, password);
      expect(result).toBeNull();
    });
  });

  describe('signup', () => {
    const signupDto: RegisterDto = {
      email: 'newuser@example.com',
      password: 'password123',
      name: 'New User',
    };
    const mockNewUser = { id: 2, email: signupDto.email, name: signupDto.name, password: 'hashed-password', createdAt: new Date(), updatedAt: new Date(), hashedRefreshToken: null };
    const mockTokens: Tokens = { access_token: 'access-token-signup', refresh_token: 'refresh-token-signup' };

    beforeEach(() => {
      // Reset transaction mock for signup tests specifically if needed, or ensure it's flexible enough.
      // The global mockPrismaService.$transaction should work if user.create and profile.create are correctly mocked.
      mockPrismaService.user.create.mockReset();
      mockPrismaService.profile.create.mockReset();
      mockPrismaService.user.update.mockReset();
      (bcrypt.hash as jest.Mock).mockClear(); // Clear hash mock specifically for calls within signup
      mockJwtService.signAsync.mockClear();

      // Default bcrypt.hash for password within signup
      (bcrypt.hash as jest.Mock).mockImplementation(async (data: string, saltOrRounds: number | string) => {
        if (data === signupDto.password) return 'hashed-signup-password';
        if (data === mockTokens.refresh_token) return 'hashed-signup-refresh-token';
        return `hashed-${data}`;
      });
      mockJwtService.signAsync
        .mockImplementation(async (payload, options) => {
            if(options?.secret === 'access-secret') return mockTokens.access_token;
            if(options?.secret === 'refresh-secret') return mockTokens.refresh_token;
            return 'generic-token';
        });
    });

    it('should signup a new user, create a profile with name, and return tokens', async () => {
      mockPrismaService.user.create.mockResolvedValueOnce({ ...mockNewUser, password: 'hashed-signup-password' } as any);
      mockPrismaService.profile.create.mockResolvedValueOnce({} as any); 
      mockPrismaService.user.update.mockResolvedValueOnce({} as any); // For updateRefreshTokenHash

      const result = await service.signup(signupDto);

      expect(bcrypt.hash).toHaveBeenCalledWith(signupDto.password, 10); // For password
      expect(mockPrismaService.$transaction).toHaveBeenCalled();
      expect(mockPrismaService.user.create).toHaveBeenCalledWith({
        data: {
          email: signupDto.email,
          password: 'hashed-signup-password',
          name: signupDto.name,
          hashedRefreshToken: null, // Initially null
        },
      });
      expect(mockPrismaService.profile.create).toHaveBeenCalledWith({
        data: {
          userId: mockNewUser.id, 
          username: signupDto.name, // Uses provided name
          currentLevel: 1,
          currentXP: 0,
        },
      });
      expect(mockJwtService.signAsync).toHaveBeenCalledTimes(2);
      expect(bcrypt.hash).toHaveBeenCalledWith(mockTokens.refresh_token, 10); // For refresh token hashing
      expect(mockPrismaService.user.update).toHaveBeenCalledWith({
        where: { id: mockNewUser.id },
        data: { hashedRefreshToken: 'hashed-signup-refresh-token' },
      });
      expect(result).toEqual(mockTokens);
    });

    it('should signup a new user and create a profile with default username if name is not provided', async () => {
      const signupDtoNoName: RegisterDto = { email: 'newuser2@example.com', password: 'password123' };
      const mockNewUserNoName = { ...mockNewUser, id: 3, email: signupDtoNoName.email, name: null }; // name is null from DB
      
      // Specific mock for this test case's bcrypt.hash calls
      (bcrypt.hash as jest.Mock).mockImplementation(async (data: string, saltOrRounds: number | string) => {
        if (data === signupDtoNoName.password) return 'hashed-signup-password-no-name';
        if (data === mockTokens.refresh_token) return 'hashed-signup-refresh-token-no-name';
        return `hashed-${data}`;
      });

      mockPrismaService.user.create.mockResolvedValueOnce({ ...mockNewUserNoName, password: 'hashed-signup-password-no-name' } as any);
      mockPrismaService.profile.create.mockResolvedValueOnce({} as any);
      mockPrismaService.user.update.mockResolvedValueOnce({} as any);

      await service.signup(signupDtoNoName);

      expect(mockPrismaService.profile.create).toHaveBeenCalledWith({
        data: {
          userId: mockNewUserNoName.id,
          username: `user_${mockNewUserNoName.id}`, // Default username format
          currentLevel: 1,
          currentXP: 0,
        },
      });
    });

    it('should throw ForbiddenException if PrismaClientKnownRequestError P2002 occurs (credentials taken)', async () => {
      const prismaErrorBase = new Error('Simulated Prisma Error for P2002');
      (prismaErrorBase as any).code = 'P2002';
      (prismaErrorBase as any).meta = { target: ['email'] };
      (prismaErrorBase as any).clientVersion = 'mockClientVersion'; // Common property
      const prismaError = Object.setPrototypeOf(prismaErrorBase, Prisma.PrismaClientKnownRequestError.prototype);

      mockPrismaService.$transaction.mockImplementationOnce(async (callback) => {
        mockPrismaService.user.create.mockRejectedValueOnce(prismaError);
        // The callback would typically be invoked with a mock transaction client (tx)
        // For this error case, the exact return of callback might not matter as an error is thrown before it completes.
        return callback(mockPrismaService); 
      });

      // Ensure the console.error from the service's catch block is spied on if it's still hit before rethrow
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      await expect(service.signup(signupDto)).rejects.toThrow(new ForbiddenException('Credentials taken'));
      
      consoleErrorSpy.mockRestore();
      // Verify that the specific console.error inside the P2002 check is NOT called, 
      // but the one *after* the Prisma.PrismaClientKnownRequestError check might be if the test was wrong.
      // For a passing test (ForbiddenException is thrown), the 'Signup Transaction Error:' log should not appear for P2002.
      expect(consoleErrorSpy).not.toHaveBeenCalledWith('Signup Transaction Error:', expect.anything());
    });

    it('should throw InternalServerErrorException for other Prisma errors during transaction', async () => {
      const prismaError = { code: 'P2000', message: 'Some other prisma error' }; // Different error code
      mockPrismaService.$transaction.mockImplementationOnce(async (callback) => {
        mockPrismaService.user.create.mockRejectedValueOnce(prismaError);
        return callback(mockPrismaService);
      });

      // Spy on console.error to suppress output for this specific test
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      await expect(service.signup(signupDto)).rejects.toThrow(InternalServerErrorException);
      await expect(service.signup(signupDto)).rejects.toThrow('Something went wrong during signup');
      
      consoleErrorSpy.mockRestore();
    });

    it('should throw InternalServerErrorException if updateRefreshTokenHash fails during signup', async () => {
      mockPrismaService.user.create.mockResolvedValueOnce({ ...mockNewUser, password: 'hashed-signup-password' } as any);
      mockPrismaService.profile.create.mockResolvedValueOnce({} as any);
      // getTokens works, but hashing the new refresh token in updateRefreshTokenHash fails
      (bcrypt.hash as jest.Mock).mockImplementation(async (data: string, saltOrRounds: number | string) => {
        if (data === signupDto.password) return 'hashed-signup-password';
        if (data === mockTokens.refresh_token) throw new Error('Hashing refresh token failed'); // This causes the failure
        return `hashed-${data}`;
      });

      // Spy on console.error to suppress output for this specific test
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      await expect(service.signup(signupDto)).rejects.toThrow(InternalServerErrorException);
      
      consoleErrorSpy.mockRestore();
      expect(mockPrismaService.user.update).not.toHaveBeenCalled(); // update for RT hash should not be called
    });
  });

}); 