/**
 * Created by ganfengbao on 2017/1/10.
 */
var express = require('express');
var app = express();
var router = require('./controller');

app.use(express.static('./public'));
app.set('view engine','ejs');

app.get('/',router.showIndex);
app.get('/:albumName',router.showAlbum);

app.listen(3000);
