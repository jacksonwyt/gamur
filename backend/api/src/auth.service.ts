import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ConfigService } from '@nestjs/config';
import { Prisma, User } from 'generated/prisma/client';
import { JwtPayload } from 'src/jwt.strategy';
import { Tokens } from 'src/common/types/tokens.type';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  // --- Helper Methods ---

  private async hashData(data: string): Promise<string> {
    return bcrypt.hash(data, 10);
  }

  private async getTokens(userId: number, email: string): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: userId.toString(),
      email: email,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
        expiresIn: this.configService.get<string>('JWT_ACCESS_EXPIRATION_TIME'),
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
        expiresIn: this.configService.get<string>(
          'JWT_REFRESH_EXPIRATION_TIME',
        ),
      }),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  private async updateRefreshTokenHash(
    userId: number,
    refreshToken: string,
  ): Promise<void> {
    try {
      const hashedRefreshToken = await this.hashData(refreshToken);
      await this.prisma.user.update({
        where: { id: userId },
        data: { hashedRefreshToken },
      });
    } catch (error) {
      console.error(
        `Failed to update refresh token hash for user ${userId}:`,
        error,
      );
      throw new InternalServerErrorException(
        'Could not update refresh token hash.',
      );
    }
  }

  // --- Core Authentication Logic ---

  async validateUser(
    email: string,
    pass: string,
  ): Promise<Omit<User, 'password' | 'hashedRefreshToken'> | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      return null;
    }

    const passwordMatches = await bcrypt.compare(pass, user.password);
    if (passwordMatches) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, hashedRefreshToken, ...result } = user;
      return result;
    }
    return null;
  }

  async register(registerDto: RegisterDto): Promise<Tokens> {
    const { email, password, name } = registerDto;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ForbiddenException('Credentials taken');
    }

    const hashedPassword = await this.hashData(password);

    const user = await this.prisma.$transaction(
      async (tx: Prisma.TransactionClient) => {
        const newUser = await tx.user.create({
          data: {
            email,
            password: hashedPassword,
            name,
          },
        });

        await tx.profile.create({
          data: {
            userId: newUser.id,
            username: email,
          },
        });
        return newUser;
      },
    );

    const tokens = await this.getTokens(user.id, user.email);

    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);

    return tokens;
  }

  async login(loginDto: LoginDto): Promise<Tokens> {
    const { email, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      throw new UnauthorizedException(
        'Invalid credentials or user not fully registered',
      );
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const tokens = await this.getTokens(user.id, user.email);

    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);

    return tokens;
  }

  async logout(userId: number): Promise<boolean> {
    try {
      await this.prisma.user.updateMany({
        where: {
          id: userId,
          hashedRefreshToken: {
            not: null,
          },
        },
        data: {
          hashedRefreshToken: null,
        },
      });
      return true;
    } catch (error) {
      console.error(`Failed to logout user ${userId}:`, error);
      return false;
    }
  }

  async refreshTokens(userId: number, refreshToken: string): Promise<Tokens> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user || !user.hashedRefreshToken) {
      throw new ForbiddenException('Access Denied: Invalid session or user.');
    }

    const rtMatches = await bcrypt.compare(
      refreshToken,
      user.hashedRefreshToken,
    );

    if (!rtMatches) {
      await this.logout(userId);
      throw new ForbiddenException('Access Denied: Refresh token mismatch.');
    }

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);

    return tokens;
  }

  async signup(createUserDto: RegisterDto): Promise<Tokens> {
    const hashedPassword = await this.hashData(createUserDto.password);

    try {
      const newUser = await this.prisma.$transaction(
        async (tx: Prisma.TransactionClient) => {
          const user = await tx.user.create({
            data: {
              email: createUserDto.email,
              password: hashedPassword,
              name: createUserDto.name,
              hashedRefreshToken: null,
            },
          });

          await tx.profile.create({
            data: {
              userId: user.id,
              username: createUserDto.name || `user_${user.id}`,
              currentLevel: 1,
              currentXP: 0,
            },
          });

          return user;
        },
      );

      const tokens = await this.getTokens(newUser.id, newUser.email);
      await this.updateRefreshTokenHash(newUser.id, tokens.refresh_token);
      return tokens;
    } catch (error: unknown) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      console.error('Signup Transaction Error:', error);
      throw new InternalServerErrorException(
        'Something went wrong during signup',
      );
    }
  }
}
