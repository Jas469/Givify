const mongoose=require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.ed9lgev.mongodb.net/");
const ourschema=new mongoose.Schema({
    organizationname:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String,
        default:""
    },
    phone:{
        type:String,
        default:""
    },
    location:{
        type:String,
        default:""
    },
    description:{
        type:String,
        default:""
    },
    logo:{
        type:String,
        default:""
    },
    requirements:{
        type:String,
        default:""
    },
    members:{
        type:Number,
        default:0
    },
    totalrequirements:{
        type:Number,
        default:0
    },
    received:{
        type:Number,
        default:0
    },
    colleges:{
        type:Number,
        default:0
    },
    childrens:{
        type:Number,
        default:0
    },
    date:{
        type:String,        
        default:new Date().toDateString()
    },
    
    type:{
        type:String
    },
   
});
const signup=new mongoose.model("signup",ourschema)
module.exports=signup;
