
import { Consumer, Kafka, Producer } from 'kafkajs';
import { IQueueService } from './queueInterface';

export class KafkaService implements IQueueService {

  kafka = new Kafka({
    clientId: 'kafka_ornek_1',
    brokers: ['localhost:39092'],
  });

  producer(): Producer {
    const producer = this.kafka.producer();

    return producer;
  }

  consumer(): Consumer {
    const consumer = this.kafka.consumer();

    return consumer;
  }
}
