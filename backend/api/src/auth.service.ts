import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<{ message: string }> {
    const { email, password, name } = registerDto;

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
      // Create the user in the database
      await this.prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name, // Include name if provided
        },
      });
      return { message: 'User registered successfully.' };
    } catch (error) {
      // Handle potential errors (e.g., unique constraint violation)
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002' // Unique constraint violation code
      ) {
        throw new ConflictException('Email already exists.');
      }
      // Log the error for debugging
      console.error('Registration Error:', error);
      throw new InternalServerErrorException('Could not register user.');
    }
  }

  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const { email, password } = loginDto;
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new UnauthorizedException('Invalid credentials.');
      }

      const isPasswordMatching = await bcrypt.compare(password, user.password);

      if (!isPasswordMatching) {
        throw new UnauthorizedException('Invalid credentials.');
      }

      // Generate JWT payload
      const payload = { sub: user.id, email: user.email }; // 'sub' is standard for user ID

      // Sign the token
      const accessToken = await this.jwtService.signAsync(payload);

      return {
        accessToken,
      };
    } catch (error) {
      // Log the error for debugging purposes
      console.error('Login Error:', error);
      // Rethrow specific known exceptions or a generic internal server error
      if (error instanceof UnauthorizedException) {
        throw error; // Re-throw unauthorized if already handled
      }
      // Consider adding more specific error handling (e.g., for Prisma errors) if needed
      throw new InternalServerErrorException('An error occurred during login.');
    }
  }
}
