const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
  description: {type:String, default:"kaam kar"},
});

mongoose.model('todo', todoSchema);


module.export = todoSchema;
