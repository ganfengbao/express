/**
 * Created by ganfengbao on 2017/1/10.
 */
var file = require('../models/file.js');

exports.showIndex = function(req,res){
    //res.render('index',{
    //    "albums":file.getAllAlbums()
    //});
    file.getAllAlbums(function(err,allAlbums){
        if(err){
            res.send(err);
            return;
        }
        res.render('index',{
            'albums':allAlbums
        });
    });
};

exports.showAlbum = function(req,res){
    res.send('相册'+req.params.albumName);
};
