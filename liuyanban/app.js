/**
 * Created by ganfengbao on 2017/1/13.
 */
var express = require("express");
var app = express();
var db = require("./model/db.js");
var formidable = require("formidable");

app.use(express.static('./public'));
app.set('view engine', 'ejs');

//显示留言列表
app.get('/',function(req,res,next){
    res.render("index");
});
app.get('/du',function(req,res,next){
    var page = parseInt(req.query.page);
    db.find("liuyanban",{},{"sort":{"time":-1},"pagemount":4,"page":page},function(err,result){
       res.json({"result":result});
    });
});
//提交留言
app.post('/tijiao',function(req,res,next){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields){
       db.insertOne("liuyanban",{
            "username":fields.username,
           "liuyan":fields.liuyan,
           "time":new Date()
       },function(err,result){
           if(err){
               res.json(-1);
               return;
           }
           res.json(1);
       })
    });
});

app.listen(3000);