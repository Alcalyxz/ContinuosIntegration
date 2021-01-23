const express = require("express");


const app = express();
const cal = require('./calculadora');

app.get("/add", (req,res)=>{
    var a  = parseInt(req.query.a);
    var b  = parseInt(req.query.b);
    res.json({
        result: cal.add(a,b)
    });
});

module.exports = app;




