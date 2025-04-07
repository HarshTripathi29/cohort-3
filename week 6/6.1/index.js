const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const JWT_SECRET = "harshrandomtoken";

app.use(express.json());

const users=[];

app.post("/signup", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password,
    })

    res.json({
        message : "you are signed in "
    })

})


app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i=0; i<users.length; i++){
        if(users[i].username==username && users[i].password==password){
            foundUser=users[i];
        }
    }

    if(foundUser){
        const token = jwt.sign({
            username : username
        },JWT_SECRET);
        foundUser.token=token;
        res.json({
            token:token
        })
    }else{
        res.status(403).send({
            message : "Invalid username or password",
        })
    }
})


app.get("/me", function (req, res){
    const token = req.headers.authorization;
    const userDetails = jwt.verify(token, JWT_SECRET);
    const username = userDetails.username;

    let foundUser=null;

    for(let i=0; i<users.length; i++){
        if(users[i].username==username){
            foundUser=users[i]
        }
    }

    if(foundUser){
        res.json({
                username : foundUser.username,
                password : foundUser.password
            })
        }else{
            res.json({
                message : "token invalid",
            })
    }

})

app.listen(5000, function(){
    console.log("the app is running on 5000");
})