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

      await expect(service.register(registerDto)).rejects.toThrow(InternalServerErrorException);
      expect(mockPrismaService.user.update).not.toHaveBeenCalled(); // update should not be called if hashing fails before it
    });

  });

  // TODO: Add tests for login, logout, refreshTokens, validateUser, signup
}); 