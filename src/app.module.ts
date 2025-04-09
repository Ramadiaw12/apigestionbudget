import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GbudgetModule } from './gbudget/gbudget.module';

@Module({
  imports: [GbudgetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
