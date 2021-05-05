const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri , { useNewUrlParser: true , useCreateIndex: true , useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => { console.log("MongoDB database connection established"); });

const roomsRouter = require('./routes/rooms');
const usersRouter = require('./routes/users');
const bake_preRouter = require('./routes/bake_pre');
const bakeRouter = require('./routes/bake');
const eventRouter = require('./routes/event');
const formalRouter = require('./routes/formal');
const ginger_preRouter = require('./routes/ginger_pre');
const gingerRouter = require('./routes/ginger');
const indian_preRouter = require('./routes/indian_pre');
const indianRouter = require('./routes/indian');
const informalRouter = require('./routes/informal');

app.use('/rooms' , roomsRouter);
app.use('/users' , usersRouter.router);
app.use('/bake_pre' , bake_preRouter);
app.use('/bake' , bakeRouter);
app.use('/event' , eventRouter);
app.use('/formal' , formalRouter);
app.use('/ginger_pre' , ginger_preRouter);
app.use('/ginger' , gingerRouter);
app.use('/indian_pre' , indian_preRouter);
app.use('/indian' , indianRouter);
app.use('/informal' , informalRouter);


app.use('/css' , express.static(path.join(__dirname,'..\\..\\css')));
app.use('/Images' , express.static(path.join(__dirname,'..\\..\\Images')));
app.use('/img' , express.static(path.join(__dirname,'..\\..\\img')));
app.use('/java' , express.static(path.join(__dirname,'..\\..\\java')));
app.use('/js' , express.static(path.join(__dirname,'..\\..\\js')));

app.get('/welcome' , function(req,res){
    res.sendFile('welcome.html' , { root : "../../" });;
});

app.get('/rooms' , function(req,res) {
    res.sendFile('rooms.html' , { root : "../../" });
});

app.get('/confirm' , function(req,res) {
    res.sendFile('confirm.html' , { root : "../../" });
});

app.get('/contact' , function(req,res) {
    res.sendFile('contact.html' , { root : "../../" });
});

app.get('/dining_page' , function(req,res) {
    res.sendFile('dining_page.html' , { root : "../../" });
});

app.get('/dining_confirm' , function(req,res) {
    res.sendFile('dining_confirm.html' , { root : "../../" });
});

app.get('/events' , function(req,res) {
    res.sendFile('events.html' , { root : "../../" });
});

app.get('/gallery' , function(req,res) {
    res.sendFile('gallery.html' , { root : "../../" });
});

app.get('/index' , function(req,res) {
    res.sendFile('index.html' , { root : "../../" });
});

app.get('/informal' , function(req,res) {
    res.sendFile('informal.html' , { root : "../../" });
});

app.get('/login' , function(req,res) {
    res.sendFile('login.html' , { root : "../../" });
});

app.get('/meetings' , function(req,res) {
    res.sendFile('meetings.html' , { root : "../../" });
});

app.get('/pre_order' , function(req,res) {
    res.sendFile('pre_order.html' , { root : "../../" });
});

app.get('/pre_order2' , function(req,res) {
    res.sendFile('pre_order2.html' , { root : "../../" });
});

app.get('/pre_order3' , function(req,res) {
    res.sendFile('pre_prder3.html' , { root : "../../" });
});

app.get('/signup' , function(req,res) {
    res.sendFile('signup.html' , { root : "../../" });
});

app.listen(port , (req,res) => {
    console.log(`Server is running on port: ${port}`);
});