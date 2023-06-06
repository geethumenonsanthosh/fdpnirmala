const express =require("express");
const cors= require('cors');
const empModel = require('./model/model')
const app =new express();
//middlewares
app.use(express.urlencoded({extended :true}))
app.use(express.json());
app.use(cors());

// app.get(url,callback)
app.get('/',(req,res)=>{
    res.send("hai");
})
app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send("data added")
})
app.post('/new',(req,res)=>{
    console.log(req.body)
    new empModel(req.body).save();
    res.send("data added to db")
})
app.get('/view',async(req,res)=>{
    var data = await empModel.find()
    res.send(data)
})
app.delete('/remove/:id',async(req,res)=>{
    let id=req.params.id
   await empModel.findByIdAndDelete(id)
    res.send("data deleted")
})
//update
app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id
    await empModel.findByIdAndUpdate(id,req.body)
    res.send("data updated")
})
//port
app.listen(3005,(req,res)=>{
    
})