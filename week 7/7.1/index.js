const express = require("express");
const jwt = require("jsonwebtoken");
const{UserModel, TodoModel} = require("./db");
const{auth, JWT_SECRET}=require('./auth');
const mongoose = require("mongoose");

// mongodb+srv://harshtripathi042:mongo1234@cluster0.etqbz6r.mongodb.net/

mongoose.connect("mongodb+srv://harshtripathi042:mongo1234@cluster0.etqbz6r.mongodb.net/Users");

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email : email,
        password : password,
        name : name
    });

    res.json({
        message : "Ypu are signed up"
    })
});


app.post("/signin", async function (req, res){
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email : email,
        password : password,
    });

    if(response){
        const token = jwt.sign({
            id : response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    }else {
        res.status(403).json({
            message : "Incorrect creds"
        })
    }

});

app.post("/todos", auth, async function (req, res){
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message : "Todo created"
    })
});

app.get("/todos", async function(req,res){
    const userId = res.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000, function(){
    console.log("running at port 3000");
})

