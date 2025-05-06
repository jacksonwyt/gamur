import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service'; // Corrected path
import { JwtPayload } from './jwt.strategy'; // Corrected path

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh', // Unique key for this strategy
) {
  constructor(
    config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const secret = config.get<string>('JWT_REFRESH_SECRET');
    if (!secret) {
      // It's crucial to handle the case where the secret is missing.
      // Throwing an error during startup is appropriate here.
      throw new Error('JWT_REFRESH_SECRET environment variable must be set');
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Start with Bearer, adjust if needed
      secretOrKey: secret, // Use the validated secret
      passReqToCallback: true, // Pass the request object to the validate method
    });
  }

  validate(req: Request, payload: JwtPayload): any {
    const refreshToken = req
      ?.get('authorization')
      ?.replace('Bearer', '')
      .trim();

    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token malformed or missing');
    }

    // Here you would typically retrieve the user and compare the incoming
    // refreshToken with the stored hashed version.
    // For now, we just return the payload along with the token.
    // The actual comparison logic will live in the AuthService.refreshTokens method.
    return { ...payload, refreshToken };
  }
}
