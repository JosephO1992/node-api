require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 3000;
const mongoose = require('mongoose')

const jsonParser = bodyParser.json();

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser : true})
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connection opened to db'));

app.use(jsonParser)

const staffRouter = require('./routes/staff');
app.use('/staff', staffRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });