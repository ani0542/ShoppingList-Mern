const mongoose=require('mongoose') 
const ItemSchema=new mongoose.Schema({
    
   wish:String

})

module.exports=mongoose.model('item',ItemSchema)
