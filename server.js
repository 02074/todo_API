const { response } = require("express");
const express = require("express");
const app = express();
//importing mongoose
const mongoose = require ('mongoose');
//importing todocontroller
const todoController = require('./controllers/todoController');

app.get('/',(request, response)=>{
    response.send('hello this is a get method');
})

app.post('/',(request,response)=>{
    response.send('hello this is a post response')
    
})

app.put('/',(request,response)=>{
    response.send('hello this is a put ')
}
)

app.get('/todos',(request,response)=>{
    response.send([{
        'title': 'plan trip to kumasi',
        'description': ' i will be going to kumasi',
    }])
}
)


app.get('/users',(requst,respose)=>{
    response.send([{
        'username':'Benji',
        'password':'password',
    }])
}
)




app.listen(3000,()=> {
    console.log("my server is up and running on port 3000");
    //connecting to the database
    mongoose.connect('mongodb+srv://020:Kofi0207452479@cluster0.8zlky.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){
        console.log("database is connected");
    })
    .catch(function(error){
        //console.log ('database not connected',error)
        console.log("database not connected",error.meesage);
    });
});


