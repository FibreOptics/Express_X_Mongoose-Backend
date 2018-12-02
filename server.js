//const express = require('expresss');
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
//real routes
import user from './routes/user.route';
import message from './routes/message.route';
//xsample route
import product from './routes/example.route';
//Mongo
const dev_db_url = 'mongodb://FibreOptics:abxy1234@ds032887.mlab.com:32887/mern';
mongoose.set('useCreateIndex', true)
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// initialize our express app
const app = express();
// Cors
app.use(cors());
// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);
app.use('/users', user);
app.use('/messages', message);

const API_PORT = process.env.API_PORT || 8080;
app.listen(API_PORT, () => {
    console.log('Server is up and running on port : ' + API_PORT);
});