const express = require('express')
const app = express();
const cors=require('cors');
const transcation = require('./models/transcation');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');

app.use(cors());
app.use(express.json);

app.get('/api/test',(req,res)=>{
    res.json('test ok');
})

app.post('/api/transcation',async(req,res)=>{
    await mongoose.connect(process.env.MONGO_URL);
    const {name,desc,datetime} = req.body;
    const t= await transcation.create({name,desc,datetime});
    res.json(t);
})

app.listen(4040,()=>{
    console.log("Listening");
})