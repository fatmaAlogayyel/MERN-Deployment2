const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/authorDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then( ()=> console.log('conectted successfly ^_^ ') )
.catch( err => console.log('somthing wrong can not connect to the DB',err) );