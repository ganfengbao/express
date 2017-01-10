/**
 * Created by ganfengbao on 2017/1/10.
 */
var fs = require('fs');
exports.getAllAlbums = function(callback){
    fs.readdir("./uploads",function(err,files){
        var allAlbums = [];
        (function iterator(i){
            if(err){
                callback("找不到文件夹",null);
            }
            if(i == files.length){
                callback(null,allAlbums);
                return;
            }
            fs.stat("./uploads/" + files[i],function(err,stats){

                if(stats.isDirectory()){
                    console.log(i);
                    console.log(files[i]);
                    allAlbums.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    });
};
