import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { KafkaService } from 'queueService/kafkaService';

import { PostKafka } from './post-kafka';

@Controller('post')
export class PostTestController implements OnModuleInit {
  constructor() {}
  postKafka = new PostKafka(new KafkaService());

  async onModuleInit() {
    await this.postKafka.producer.connect();
    console.log('connected to producer');
  }

  @Get()
  async findAll() {
    return await this.postKafka.producerTest('test', 'testMessage');
  }
}
