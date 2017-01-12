/**
 * Created by gfbaiwff on 2017/1/12.
 */
var MongoClient = require("mongodb").MongoClient;

function _connectDB(callback){
    var url = 'mongodb://localhost:27017/test';

    MongoClient.connect(url, function (err,db) {
        callback(err,db);
    });
}

exports.insertOne = function(collectionName,json,callback){
    _connectDB(function (err,db) {
        if(err){
            callback(err,null);
            return;
        }
        db.collection(collectionName).insertOne(json, function (err, result) {
            callback(err,result);
            db.close();
        })
    })
};

exports.find = function (collectionName,json,callback) {
    if(arguments.length != 3){
        callback("find函数必须传三个参数",null);
        return;
    }
  _connectDB(function(err,db){
      var result = [];
     var cursor = db.collection(collectionName).find(json);
      cursor.each(function(err,doc){
          if(err){
              callback(err,null);
              return;
          }
          if(doc != null){
              result.push(doc);
          }else{
              callback(null,result);
          }
      });
  });
};