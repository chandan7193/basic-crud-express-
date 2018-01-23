const mongoose = require('mongoose');


const Todo  = mongoose.model('todo');


module.exports = app =>{

  //  get method All Method
    app.get('/api/list', (req,res) =>{
      Todo.find({}, (err, todo)=> {
     var todoMap = {};

     todo.forEach(function(user) {
       todoMap[todo._id] = todo;
     });

     res.send(todoMap);
   });
});

// Post new Todo
    app.post('/api/post', (req,res)=>{
      const {description} = req.body;
      const todo = new Todo({description})
      .save()
      .then(something => res.send(something));
    });

// Put method make changes
    app.put('/api/:id', (req,res)=>{
      console.log('dbs ds ')
      res.send('sdhbds');
    });
};
