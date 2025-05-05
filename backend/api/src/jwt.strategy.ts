import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service'; // Assuming prisma service path

// Define the structure of the JWT payload after validation
export interface JwtPayload {
  sub: string; // Standard JWT subject field, used for userId here
  email: string;
  // Add any other fields you included in the payload during generation
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService, // Inject Prisma if needed to validate user existence
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Ensure expired tokens are rejected
      secretOrKey: configService.get<string>('JWT_ACCESS_SECRET')!, // Add ! assertion
    });
  }

  // This method is called after the token is successfully verified
  async validate(payload: JwtPayload): Promise<any> {
    // The payload is the decoded JWT content { sub: userId, email: userEmail }
    const userId = parseInt(payload.sub, 10); // Parse string userId to number

    // Optional: Check if the user still exists in the database
    // This prevents tokens from being valid for deleted users
    const user = await this.prisma.user.findUnique({ where: { id: userId } }); // Use parsed userId
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }

    // Passport attaches this return value to the Request object as req.user
    // We only need the userId for most authorization checks downstream
    return { userId: payload.sub, email: payload.email };
  }
}
