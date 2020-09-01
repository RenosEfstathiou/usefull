

function callFunc(fun){
        fun();
    } 

// function expression  
var sayBye = function() {
    console.log('Bye');
};


callFunc(sayBye);


//  modules and require
var counter = require('./count');

console.log(counter(['jihn','lemon','orange']));


// module patterns
 var stuff = require('./stuff');
 console.log(stuff.pi);
 console.log(stuff.adder(stuff.pi,6));

// event module

var events =require('events');
var util = require('util');

var Person = function(name){
    this.name=name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var joe = new Person('joe');

var people = [james,mary,joe];

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(`${person.name} ${msg}`);
    });
});

james.emit('speak','hey dudes');






