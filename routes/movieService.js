var express = require('express');
var router = express.Router();
var movieDao = require('../models/Movie');

// middleware specific to this router
//貌似是到这个文件里，自动调用这个log方法
router.use(function log(req, res, next) {
    console.log('111111111111Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', function(req, res) {
    console.log('进入电影存储 ');
//    movieDao.save({name:"电影",fav:"是"},function(err,obj){
//        res.send(obj);
//    });

});
router.post('/toMain', function(req, res) {
    console.log('进入跳转主页面 ');
    res.cookie("islogin", "aijefpaojfeiop", { maxAge: 300000 });
    res.render('test/main2');

});
router.get('/test', function(req, res) {
    console.log('进入主页面测试方法…… ');
    var a = req.cookies["islogin"];
    console.log(a);
    console.log("session: "+req.session+", sessionID:"+req.sessionID);
    res.send('test/main2');

});
//必须导出，才可以用
module.exports = router;