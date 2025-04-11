const express = require("express");
const jwt = require("jsonwebtoken");
const{UserModel, TodoModel} = require("./db");
const mongoose = require("mongoose");
const JWT_SECRET = "harsh"

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

app.listen(3000, function(){
    console.log("running at port 3000");
})

