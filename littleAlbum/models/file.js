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
                    allAlbums.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    });
};
exports.getAllImagesByAlbumName = function(albumName,callback){
    fs.readdir("./uploads/" + albumName,function(err,files){
        var allImages = [];
        (function iterator(i){
            if(err){
                callback("找不到图片",null);
                return;
            }
            if(i == files.length){
                callback(null,allImages);
                return;
            }
            fs.stat("./uploads/"+ albumName +'/'+ files[i],function(err,stats){
                //if(err){
                //    callback(err,null);
                //    return;
                //}
                if(stats.isFile()){
                    allImages.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    });
};
