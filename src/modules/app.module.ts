import { Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_PIPE, APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalModule } from './global/global.module';
import { DatabaseModule } from './database/database.module';
import { ContributorModule } from './contributor/contributor.module';
import { ContributionModule } from './contribution/contribution.module';
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { TimeoutInterceptor } from '../interceptors/timeout.interceptor';

@Module({
  imports: [
    GlobalModule,
    DatabaseModule.forRoot(),
    ContributorModule,
    ContributionModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useFactory: () => new ValidationPipe({ transform: true }),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor,
    },
  ],
})
export class AppModule {}
