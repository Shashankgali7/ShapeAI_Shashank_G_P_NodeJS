
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req, res){
    res.sendFile(__dirname+"/Calculator.html");
});


app.post("/",function(req,res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1/(n2*n2);
    res.send("The ans is "+result);
});
app.get("/about",function(req,res){
    res.send("<h1>Shashank G P</h1>");
})

app.listen(3000,function(){
    console.log("Server has started on Port 3000");
});