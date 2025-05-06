import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import {
  ForbiddenException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Tokens } from 'src/common/types/tokens.type';
import { User } from 'generated/prisma/client';

jest.mock('bcrypt');

type ConfigKeys =
  | 'JWT_ACCESS_SECRET'
  | 'JWT_REFRESH_SECRET'
  | 'JWT_ACCESS_EXPIRATION_TIME'
  | 'JWT_REFRESH_EXPIRATION_TIME';

describe('AuthService', () => {
  let service: AuthService;
  const mockPrismaService = {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      updateMany: jest.fn(),
    },
    profile: { create: jest.fn() },
    $transaction: jest
      .fn()
      .mockImplementation((callback) => callback(mockPrismaService)),
  };
  const mockJwtService = { signAsync: jest.fn() };
  const mockConfigService = {
    get: jest.fn(
      (key: ConfigKeys) =>
        ({
          JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
          JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
          JWT_ACCESS_EXPIRATION_TIME: process.env.JWT_ACCESS_EXPIRATION_TIME,
          JWT_REFRESH_EXPIRATION_TIME: process.env.JWT_REFRESH_EXPIRATION_TIME,
        })[key],
    ),
  };

  // Test fixtures
  const createMockUser = (overrides: Partial<User> = {}): User => ({
    id: 1,
    email: 'test@example.com',
    password: 'hashed-password',
    name: 'Test User',
    createdAt: new Date(),
    updatedAt: new Date(),
    hashedRefreshToken: null,
    ...overrides,
  });

  const createMockTokens = (): Tokens => ({
    access_token: 'access-token',
    refresh_token: 'refresh-token',
  });

  // Helper functions
  function setupSuccessfulTokenGeneration(tokens: Tokens = createMockTokens()) {
    mockJwtService.signAsync
      .mockResolvedValueOnce(tokens.access_token)
      .mockResolvedValueOnce(tokens.refresh_token);
    (bcrypt.hash as jest.Mock).mockResolvedValueOnce('hashed-refresh-token');
    mockPrismaService.user.update.mockResolvedValueOnce({});
  }

  function setupTransactionForSignup(user: User, profileData: object = {}) {
    mockPrismaService.user.create.mockResolvedValueOnce(user);
    mockPrismaService.profile.create.mockResolvedValueOnce(profileData);
  }

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
    jest.clearAllMocks();
    (bcrypt.hash as jest.Mock).mockResolvedValue('hashed-password');
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
    mockJwtService.signAsync.mockResolvedValue('test-token');
  });

  describe('register', () => {
    const registerDto: RegisterDto = {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
    };
    const mockUser = createMockUser();

    it('throws ForbiddenException if user exists', async () =>
      expect(service.register(registerDto))
        .rejects.toThrow(ForbiddenException)
        .then(() =>
          mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUser),
        ));

    it('registers user and returns tokens', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(null);
      setupTransactionForSignup({ ...mockUser, password: 'hashed-password' });
      setupSuccessfulTokenGeneration();
      const result = await service.register(registerDto);
      expect(result).toEqual(createMockTokens());
    });

    it('throws InternalServerErrorException if refresh token hashing fails', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(null);
      setupTransactionForSignup(mockUser);
      mockJwtService.signAsync.mockResolvedValue('some-token');
      (bcrypt.hash as jest.Mock).mockRejectedValueOnce(
        new Error('Hashing failed'),
      );
      await expect(service.register(registerDto)).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });

  describe('login', () => {
    const loginDto: LoginDto = {
      email: 'test@example.com',
      password: 'password123',
    };
    const mockUser = createMockUser();

    it('logs in user and returns tokens', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUser);
      setupSuccessfulTokenGeneration();
      const result = await service.login(loginDto);
      expect(result).toEqual(createMockTokens());
    });

    it('throws UnauthorizedException if user not found', async () =>
      expect(service.login(loginDto))
        .rejects.toThrow(UnauthorizedException)
        .then(() =>
          mockPrismaService.user.findUnique.mockResolvedValueOnce(null),
        ));

    it('throws UnauthorizedException if password mismatch', async () =>
      expect(service.login(loginDto))
        .rejects.toThrow(UnauthorizedException)
        .then(() => {
          mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUser);
          (bcrypt.compare as jest.Mock).mockResolvedValueOnce(false);
        }));
  });

  describe('logout', () => {
    it('clears refresh token and returns true', async () => {
      mockPrismaService.user.updateMany.mockResolvedValueOnce({ count: 1 });
      const result = await service.logout(1);
      expect(result).toBe(true);
    });

    it('returns false if update fails', async () => {
      mockPrismaService.user.updateMany.mockRejectedValueOnce(
        new Error('DB error'),
      );
      const result = await service.logout(1);
      expect(result).toBe(false);
    });
  });

  describe('refreshTokens', () => {
    const userId = 1;
    const refreshToken = 'old-refresh-token';
    const mockUser = createMockUser({
      hashedRefreshToken: 'hashed-old-refresh-token',
    });

    it('refreshes tokens successfully', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUser);
      setupSuccessfulTokenGeneration();
      const result = await service.refreshTokens(userId, refreshToken);
      expect(result).toEqual(createMockTokens());
    });

    it('throws ForbiddenException if token mismatch', async () =>
      expect(service.refreshTokens(userId, refreshToken))
        .rejects.toThrow(ForbiddenException)
        .then(() => {
          mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUser);
          (bcrypt.compare as jest.Mock).mockResolvedValueOnce(false);
        }));
  });

  describe('validateUser', () => {
    it('returns user without sensitive fields if valid', async () => {
      const mockUser = createMockUser();
      mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUser);
      const result = await service.validateUser(mockUser.email, 'password123');
      expect(result).not.toHaveProperty('password');
    });

    it('returns null if user not found', async () =>
      expect(service.validateUser('test@example.com', 'password123'))
        .resolves.toBeNull()
        .then(() =>
          mockPrismaService.user.findUnique.mockResolvedValueOnce(null),
        ));
  });

  describe('signup', () => {
    const signupDto: RegisterDto = {
      email: 'new@example.com',
      password: 'password123',
      name: 'New User',
    };
    const mockUser = createMockUser({
      email: signupDto.email,
      name: signupDto.name,
    });

    it('signs up user with profile and returns tokens', async () => {
      setupTransactionForSignup({ ...mockUser, password: 'hashed-password' });
      setupSuccessfulTokenGeneration();
      const result = await service.signup(signupDto);
      expect(result).toEqual(createMockTokens());
    });

    it('throws ForbiddenException if credentials taken', async () => {
      const prismaError = Object.assign(new Error('P2002'), {
        code: 'P2002',
        meta: { target: ['email'] },
      });
      mockPrismaService.user.create.mockRejectedValueOnce(prismaError);
      await expect(service.signup(signupDto)).rejects.toThrow(
        ForbiddenException,
      );
    });
  });
});
