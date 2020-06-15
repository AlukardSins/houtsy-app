import amqp from 'amqplib/callback_api';

const rabbitURL = 'http://http://localhost:15672';

let ch = null;

amqp.connect(rabbitURL, function (err, conn) {
    conn.createChannel(function (err, channel) {
       ch = channel;
    });
 });

 export const publishToQueue = async (queueName, data) => {
    ch.sendToQueue(queueName, new Buffer(data));
 }

 process.on('exit', (code) => {
    ch.close();
    console.log(`Closing rabbitmq channel`);
 });
