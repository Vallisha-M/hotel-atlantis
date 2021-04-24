const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const usersRouter = require('./routes/users');
const formalRouter = require('./routes/formal');
const informalRouter = require('./routes/informal');

app.use('/users', usersRouter);
app.use('/formal', formalRouter);
app.use('/informal', informalRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});