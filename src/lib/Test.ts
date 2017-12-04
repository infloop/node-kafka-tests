import * as Kafka from 'kafka-node';
const avro = require('avsc');
import TestSchema from '../schemas/TestSchema';


const client = new Kafka.Client('localhost:2181');
const producer = new Kafka.Producer(client);

let payloads = [
  {
    topic: 'test', messages: 'hi', partition: 0
  }
];

producer.on('ready', () => {
  console.log('kafka producer connected');

  producer.createTopics(['test'], (err, data) => {
    console.log(err, data);

    producer.send(payloads, function (err, data) {
      console.log(err, data);
    });
  });
});

// client
const kClient = new Kafka.KafkaClient({
  kafkaHost: '127.0.0.1:9092',
  connectTimeout : 3000,
  requestTimeout: 3000,
  clientId: 'kafka-node',
  autoConnect: false,
  // sslOptions: {
  //   rejectUnauthorized: false
  // }
});

kClient.on('ready', () => {
  console.log('kafka client connected');
});

kClient.on('error', (error) => {
  console.error(error);
});

kClient.connect();

// let type = avro.parse(TestSchema);
// console.log(type);
