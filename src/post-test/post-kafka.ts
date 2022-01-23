import { Injectable } from '@nestjs/common';
import { Producer } from 'kafkajs';
import { IQueueService } from 'queueService/queueInterface';

@Injectable()
export class PostKafka {
  constructor(private service: IQueueService) {}

  producer():Producer {
    return this.service.producer();
  }
}
