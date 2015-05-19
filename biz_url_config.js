//访问地址的配置文件
var express = require('express');
var app = express();

//每增加一个请求地址，就多写两行如下的配置
var movieService = require('./routes/movieService');
app.use('/', movieService);



module.exports = app;