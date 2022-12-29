var express = require ('express');
var app=express();

app.get('/',(req,res)=>{
    res.send("hello home page")
})
app.get('/about',(req,res)=>{
    res.send("hello home about page")
})
app.listen(3001);
console.log("server at 3001");