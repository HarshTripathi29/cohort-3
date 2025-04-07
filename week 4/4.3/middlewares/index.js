
const express = require("express");
const app = express();

function isOldEnoughMiddleware(req, res, next){
    const age=req.query.age;

    if(age>14){
        next();
    }else{
        res.json({
            msg:"sorry your age is below the required age"
        });
    }
}


app.get("/ride1", isOldEnoughMiddleware, function(req, res){
    res.json({
        msg : "ride1 accesses successfully",
    });
})

app.get("/ride2", isOldEnoughMiddleware, function(req,res){
    res.json({
        msg : "ride2 accessed successfully",
    });
})

app.listen(3000, ()=>{
    console.log("app is running at 3000");
});