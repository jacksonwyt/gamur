import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';

// Decorator to bypass guards (e.g., for public endpoints)
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

// Decorator to get the current user ID from the request
export const GetCurrentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();
    // Ensure your strategy attaches user object with id
    const user = request.user;
    if (!user || typeof user.userId !== 'number') {
      console.error(
        'GetCurrentUserId Decorator Error: User ID not found or not a number on request object.',
      );
      // Depending on strictness, you might throw an InternalServerErrorException here
      // throw new InternalServerErrorException('User ID not found on request');
      return -1; // Or handle appropriately
    }
    return user.userId;
  },
);

// Decorator to get a specific property from the current user object, or the whole object
export const GetCurrentUser = createParamDecorator(
  (data: string | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (!request.user) {
      console.error(
        'GetCurrentUser Decorator Error: User object not found on request.',
      );
      // Depending on strictness, you might throw an InternalServerErrorException here
      // throw new InternalServerErrorException('User object not found on request');
      return null; // Or handle appropriately
    }
    if (data) {
      // Ensure your strategy attaches the requested data field (e.g., refreshToken)
      return request.user[data];
    }
    return request.user;
  },
);
