import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // Note: this.$connect() is called automatically by Prisma
    // We can place initialization logic here if needed in the future
  }

  enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', () => {
      void (async () => {
        await app.close();
      })();
    });
  }
}
