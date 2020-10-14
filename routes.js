const express=require('express')
const router = express.Router()
// const router=express()
const mongoose = require('mongoose');
const Item=require('./models/Item')




// module.exports=(app)=>{


  router.get('/data', (req, res) => {

        Item.find({}).then((data)=>{
            console.log(data)
        //     res.render('home',{
        //         data:data
        //    });
             res.send(data)
        })
       
    });
    

    router.get('/about', (req, res) => {
        res.render('about');
    });
    
    
    router.get('/contact', (req, res) => {
        res.render('contact');
    });
    
    


    router.get('/profile/:id', (req, res) => {
        res.send(`this is my profile ${req.params.id}`)
    });


    router.post('/sent', (req, res) => {
        console.log(req.body)
        // console.log(req.body.item)
        // data.push(req.body.item)
        // res.send(data)

        const item= new Item({
            wish:req.body.item
        })
        item.save().then(data=>{
            console.log("saved")
            res.send(data)
        }).catch(err=>{
            throw err;
        })

       
       
    });


    
    


    router.delete('/remove/:id', (req, res) => {
      
        Item.findOneAndRemove({_id:req.params.id}).then(data=>{
            console.log("deleted")
            res.send(data)
        })

    })

    
// }





module.exports = router;