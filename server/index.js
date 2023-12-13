const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose=require('mongoose');
const contact = require('./models/contact');
const signup = require('./models/signup');
const gallery = require('./models/gallery');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.ed9lgev.mongodb.net/");
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post('/signup', async(req, res) => {
    let formdata=req.body;
    let data=new signup(formdata);
    await data.save();
    res.json({ message: 'User registered successfully'}).status(200);



});
app.post('/contact', async(req, res) => {
    let formdata=req.body;
    let data=new contact(formdata);
    await data.save();
    res.json({ message: 'details sent successfully'}).status(200);



});
app.post('/profile', async(req, res) => {
<<<<<<< HEAD
    let formdata=req.body;
    console.log(req)
    // let username=req.cookies.username;
    // let data=await signup.findOneAndUpdate({username:username},{formdata});
    // await data.save();
    res.json({ message: 'details sent successfully'}).status(200);
=======
    // let formdata=req.body;
    // let username=formdata.username;
    // // console.log(req.cookies)
    // let data=await signup.findOneAndUpdate({username:username},{email:formdata.email});
    // await data.save();
    // res.json({ message: 'details sent successfully'}).status(200);
>>>>>>> bd677b4d0d86f7ced22f28e110063406cd47a649



});
app.post('/login', async(req, res) => {
    // let formdata=req.body;
    let data=await signup.findOne({$and:[{username:req.body.username},{password:req.body.password}]});
    // await data.save();
    // console.log(data)
    res.json(data).status(200);



});
app.get('/signup', async(req, res) => {

    let data=await signup.find({});
    res.json(data).status(200);


});
app.post('/singlepage', async(req, res) => {
let id=req.body.id;
console.log(id)
    let data=await signup.findById({_id:id});
    // console.log(req)
    res.json(data).status(200);


});    

app.get('/gallery', async(req, res) => {

    let data=await gallery.find({});
    res.json(data).status(200);


});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
