// you have been given an express server having a gew end points 
// your task is top create a global middleware (app.use) which will
// maintain a count of the number of request made to the server in the global 
// requestcount variable

const express = require("express");

const app = express();

let requestCount=0;

app.use(function(req,res,next){
    requestCount=requestCount+1;
    next();
})

app.get("/requestcount", function(req, res){
    
    res.status(200).json({
        requestCount : {requestCount},
    })
})

app.get("/user", function(req, res){
    res.status(200).json({
        name:"harsh tripathi",
      //   requestCount : {requestCount},

    })
})

app.post("/user", function(req, res){
    res.status(200).json({
        msg:"created dummy user",
      //   requestCount : {requestCount},
    })
})


app.listen(4000, function(){
    console.log("app is running at 4000");
});