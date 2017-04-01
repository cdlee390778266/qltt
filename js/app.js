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
    $scope.pText1 = '选择【手机验证】';
    $scope.pText2 = '代表你已阅读并同意钱龙推推协议>>';
    $scope.pText3 = '验证成功你将获得钱龙推推应用全部功能';
    $scope.submitText = '确定';
})

//页脚控制器
app.controller('footer',function($scope){
    $scope.fSearch = '指标查询';
    $scope.fCare = '我的关注';
    $scope.fPool = '选股池';
    $scope.fRmd = '荐股池';
})

