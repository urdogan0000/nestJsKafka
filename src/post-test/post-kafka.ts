import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Producer } from 'kafkajs';
import { KafkaService } from 'queueService/kafkaService';
import { IQueueService } from 'queueService/queueInterface';

@Injectable()
export class PostKafka {
  constructor(private service: IQueueService) {}

  producer: Producer = this.service.producer();

  async producerTest(topicName: string, message: string) {
    await this.producer.send({
      topic: topicName,
      messages: [
        {
          value: message,
          key: '123',
        },
      ],
    });
    const x = this.producer.on('producer.network.request', (value) => {
      console.log(value);
    });
    return x.toString();
  }
}
