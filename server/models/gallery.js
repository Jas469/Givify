const mongoose=require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.ed9lgev.mongodb.net/");
const ourschema=new mongoose.Schema({

    username:{
        type:String
    },
    organizationname:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    title:{
        type:String
    },
    date:{
        type:String,        
        default:new Date().toDateString()
    },
    
   
});
const signup=new mongoose.model("gallery",ourschema)
module.exports=signup;
