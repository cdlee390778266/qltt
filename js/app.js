/*
** 应用初始化
 */
var app = angular.module('qlttApp',[]);

var qlttCtr = app.controller('qlttCtr',function($scope){

});

//登录页控制器
app.controller('login',function($scope){
    $scope.phoneTip = '请输入您的手机号码';
    $scope.codeTip = '手机验证码';
    $scope.codeText = '获取验证码';
})
