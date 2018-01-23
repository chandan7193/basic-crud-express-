const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
const app = express();


require('./models/Todo');

mongoose.connect(keys.mongoURI)

app.use(bodyParser.json());
console.log(keys.mongoURI);
app.get('/',(req,res) =>{
  res.send('Done');
})

require('./routes/todo')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
