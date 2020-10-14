const express=require('express')
const app=express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
const keys=require('./config/key')
const mongoose = require('mongoose');

//serving static files

app.use(express.static('public'))


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



//set view engines   

app.set('view engine','ejs')




// require('./routes')


//set up routes
app.use('/',require('./routes'))






  //connect to db

mongoose.connect(keys.mongodb.mongourl,{ useNewUrlParser: true },()=>{
    console.log('connected to mongodb')
})



app.listen(port,()=>{
    console.log("server is running on port" + port)
})


