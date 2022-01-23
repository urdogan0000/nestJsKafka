import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostTestModule } from './post-test/post-test.module';

@Module({
  imports: [PostTestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
