var express=require ("express");

var app=express();

app.get("/",(req,res)=>{
	res.send("in home page")
})

app.get("/about",(req,res)=>{
	res.send("in about")
})

app.listen(4000);




