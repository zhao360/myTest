
var myApp = angular.module('myApp',[]);
myApp.controller("UserController",function($scope){
    var user={name:"赵子棉",email:"zhao360_zy@163.com"};
    $scope.user = user;
});
$("#btn_test").click(function(){
    $.get("/role","",function(v){
        var b = 1;
    })
});