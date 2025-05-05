import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
// By extending AuthGuard('jwt'), this guard automatically uses the JwtStrategy we registered.
// No further implementation is needed here unless you have custom activation logic.
