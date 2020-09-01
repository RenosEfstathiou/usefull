var events = require('events');
var util = require('util');

var Car = function(name){
    this.name=name;
};

util.inherits(Car, events.EventEmitter);

var yaris= new Car('yaris');
var focus= new Car('focus');
var corsa= new Car('corsa');
var x6= new Car('x6');
var cars =[yaris,focus,corsa,x6];

cars.forEach(function(car){
    car.on('iAm',function(doors){
        console.log(`I am ${car.name} and i have ${doors} doors !!`);
    });
});


yaris.emit('iAm', 3);
focus.emit('iAm', 4);
corsa.emit('iAm', 5);
x6.emit('iAm', 7);
