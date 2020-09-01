const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } =  require('graphql')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app = express();
const Event = require('./models/events');
const User =  require('./models/user');
const user = require('./models/user');


app.use(bodyParser.json());

app.get('/',(req,res,next)=> {
    res.send('Working');
});
// setting up graphql api end 
app.use('/graphql',graphqlHttp({
    // 
    schema: buildSchema(`
        type Event {
            _id: ID!
            title: String!
            description: String!
            price: Float!
            date: String!
            creator: User!
        }

        type User{
            _id: ID!
            email: String!
            password: String
            createdEvents: [Event!]
        }

        input EventInput {
            title: String!
            description: String!
            price: Float!
            date: String!
        }

        input UserInput {
            email: String!
            password: String!
        }

        type RootQuery {
            events: [Event!]!
        }

        type  RootMutation {
            createEvent(eventInput: EventInput): Event
            createUser(userInput: UserInput): User
        }

        schema{
            query:  RootQuery
            mutation: RootMutation
        }
    `) ,
    rootValue: {
        events: () => {
            return  Event.find().then(events => {
                return events.map(event=> {
                    return {...event._doc};
                });
            }).catch(err => {
                throw err;
            });
        },
        createEvent: (args)=> {
            
            const event= new Event({
                title: args.eventInput.title,
                description: args.eventInput.description,
                price: +args.eventInput.price,
                date: new Date(args.eventInput.date),
                creator: '5ef8744bf8c6ce12d378f73c'
            });
            let createdEvent;
            return event.
            save()
            .then(result => {
                createdEvent = {...result._doc,_id: result._doc._id.toString()};
                return User.findById('5ef8744bf8c6ce12d378f73c');  
                console.log(result);
               
            }).then(user=>{
                if(!user){
                    throw new Error('User was not found');
                }
                user.createdEvents.push(event);
                return user.save();
            }).then(result=>{
               return createdEvent;
            }).catch(err => {
                console.log(err);
                throw err;
            });
            return event;
        },
        // creating a user
        createUser: (args)=> {
          return User.findOne({email: args.userInput.email}).then(user=>{
              if(user){
                  throw new Error('User already exists.');
              }
              // we use bcrypt to hash outr password
              return  bcrypt.hash(args.userInput.password,12);
          })            
           .then(hashedPassword =>{
                const user = new User({
                    email: args.userInput.email,
                    password: hashedPassword
                });
                return user.save();
            })
            .then(result =>{
                return {...result._doc,password: null};
            }).catch(err=> {
                throw err;
            });
     
        }
    },
    graphiql: true
}));

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-n88gy.gcp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(3000);
    console.log('listening on port 3000');
})
.catch(err => {
    console.log(err);
});

