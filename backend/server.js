const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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
const informalRouter = require('/routes/informal');

app.use('/rooms' , roomsRouter);
app.use('/users' , usersRouter);
app.use('/bake_pre' , bake_preRouter);
app.use('/bake' , bakeRouter);
app.use('/event' , eventRouter);
app.use('/formal' , formalRouter);
app.use('/ginger_pre' , ginger_preRouter);
app.use('/ginger' , gingerRouter);
app.use('/indian_pre' , indian_preRouter);
app.use('/indian' , indianRouter);
app.use('/informal' , informalRouter);

// Update path accordingly

app.use('/css' , express.static('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\css'));
app.use('/Images' , express.static('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\Images'));
app.use('/img' , express.static('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\img'));
app.use('/java' , express.static('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\java'));
app.use('/js' , express.static('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\js'));

app.get('/welcome' , function(req,res){
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\welcome.html');
});

app.get('/rooms' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\rooms.html');
});

app.get('/confirm' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\confirm.html');
});

app.get('/contact' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\contact.html');
});

app.get('/dining_page' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\dining_page.html');
});

app.get('/dining_confirm' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\dining_confirm.html');
});

app.get('/events' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\events.html');
});

app.get('/gallery' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\gallery.html');
});

app.get('/index' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\index.html');
});

app.get('/informal' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\informal.html');
});

app.get('/login' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\login.html');
});

app.get('/meetings' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\meetings.html');
});

app.get('/pre_order' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\pre_order.html');
});

app.get('/pre_order2' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\pre_order2.html');
});

app.get('/pre_order3' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\pre_order3.html');
});

app.get('/signup' , function(req,res) {
    res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\signup.html');
});

app.listen(port , (req,res) => {
    console.log(`Server is running on port: ${port}`);
});