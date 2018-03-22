var rpio = require('rpio');

var queueUrl = "https://sqs.eu-central-1.amazonaws.com/064138081926/Ampel";

const Consumer = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: queueUrl,
  handleMessage: (message, done) => {
    // do some work with `message`
    console.log('received:' + message.Body);
    var command = message.Body.toLowerCase();
    if (command == 'red') {
      rpio.open(11, rpio.OUTPUT, rpio.HIGH);
    }
    else {
      rpio.open(11, rpio.OUTPUT, rpio.LOW);
    }
    done();
  }
});

app.on('error', (err) => {
  console.log(err.message);
});

app.start();