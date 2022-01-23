import { Module } from '@nestjs/common';
import { KafkaService } from 'queueService/kafkaService';
import { PostTestController } from './post-test.controller';

@Module({
  imports:[],
  controllers: [PostTestController],
  providers:[ {
    provide:KafkaService,
    useClass:KafkaService
  }]

})
export class PostTestModule {}
