var rpio = require('rpio');
var sleep = require('sleep');

rpio.open(11, rpio.OUTPUT, rpio.HIGH);
sleep.sleep(1);
rpio.open(11, rpio.OUTPUT, rpio.LOW);
sleep.sleep(1);
rpio.open(11, rpio.OUTPUT, rpio.HIGH);
sleep.sleep(1);
rpio.open(11, rpio.OUTPUT, rpio.LOW);
sleep.sleep(1);

