var express = require("express");
var app = express();
var db = require("./model/db.js");

app.get('/', function (req,res) {
    db.insertOne('teacher',{"name":"张老师","age":Math.random*100 + 10},function(err,result){
       if(err){
           console.log("插入失败");
           return;
       }
        res.send("插入成功");
    });
});

app.get('/du',function(req,res){
    var page = parseInt(req.query.page);
    console.log(page);
    var a = [];
    db.find('teacher',{},function(err,result){
        for(var i = 10 * page;i<10*(page+1);i++){
            a.push(result[i]);
        }
        res.send(a);
    });

});

app.listen(3000);