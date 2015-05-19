/**
 * Created by zhaozm on 2015/5/19.
 */
var express = require('express');
var router = express.Router();
var app = express();

// define the home page route
router.get('/role', function(req, res) {
    console.log('角色进入');
//    movieDao.save({name:"电影",fav:"是"},function(err,obj){
//        res.send(obj);
//    });

});
app.use('/', router);
module.exports = app;