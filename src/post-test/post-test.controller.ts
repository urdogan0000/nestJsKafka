import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { KafkaService } from 'queueService/kafkaService';

import { PostKafka } from './post-kafka';

@Controller('post')
export class PostTestController implements OnModuleInit {
  constructor() {}
  kafka:KafkaService
  postKafka=new PostKafka(new KafkaService())
  
  producer =this.postKafka.producer();

  async onModuleInit() {
   // await this.producer.connect();
   await this.producer.connect()

    console.log('connected to producer');
  }

  @Get()
  async findAll() {
    const x = await this.producer.send({
      topic: 'test',
      messages: [
        {
          value: 'test',
          key: '123',
        },
      ],
    }).then(value=>console.log(value));
   
  }
}
