/**
 * Created by ganfengbao on 2017/1/10.
 */
var file = require('../models/file.js');

exports.showIndex = function(req,res,next){
    //res.render('index',{
    //    "albums":file.getAllAlbums()
    //});
    file.getAllAlbums(function(err,allAlbums){
        if(err){
            next();
            return;
        }
        res.render('index',{
            'albums':allAlbums
        });
    });
};

exports.showAlbum = function(req,res,next){
    //遍历相册中所以的图片
    var albumName = req.params.albumName;
    file.getAllImagesByAlbumName(albumName,function(err,imagesArray){
        if(err){
            next();
            return;
        }
        res.render("album",{
            "albumname":albumName,
            "images":imagesArray
        });
    });
};
