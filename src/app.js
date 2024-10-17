const express = require('express');
const path=require('path');
const app=express();
const hbs=require('hbs');
const port= 8000;

const static_path=path.join(__dirname,"../public");
const partial_path=path.join(__dirname,"../views/partials");
app.use(express.static(static_path));


app.set('view engine','hbs');
hbs.registerPartials(partial_path);

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("/about",(req,res)=>{
    res.render("about");
});


app.get("*",(req,res)=>{
    res.send("404 error page oops !!")
});





app.listen(port,()=>{
console.log(`http://localhost:${port}/`);
});