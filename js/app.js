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
});

//头部控制器
app.controller('header',function($scope){
    $scope.headerArr = [
    {
        'text' : '组合指标',
        'class' : 'active'
    },
    {
        'text' : '实时指标',
        'class' : ''
    },
    {
        'text' : 'K线指标',
        'class' : ''
    },
    {
        'text' : '数据指标',
        'class' : ''
    }];

    $scope.change = function(index){
        for(var i=0; i<$scope.headerArr.length;i++){
            $scope.headerArr[i].class = '';
        }
        $scope.headerArr[index].class = 'active'; 
    }
});  

//页脚控制器
app.controller('footer',function($scope){
    $scope.fSearch = '指标查询';
    $scope.fCare = '我的关注';
    $scope.fPool = '选股池';
    $scope.fRmd = '荐股池';
});

//页脚控制器
app.controller('search',function($scope){
    $scope.searchArr = [
        {
            'searchHead' : '快速拉升',
            'searchBody' : '红三兵，股指评价的专用语。指连续阴线后连续拉出三根阳线（红色）。短期有上扬空间...',
            'searchFoot' : {
                'care' : '关注',
                'class' : ''
            }
        },
        {
            'searchHead' : '快速拉升',
            'searchBody' : '红三兵，股指评价的专用语。指连续阴线后连续拉出三根阳线（红色）。短期有上扬空间...',
            'searchFoot' : {
                'care' : '关注',
                'class' : ''
            }
        },
        {
            'searchHead' : '快速拉升',
            'searchBody' : '红三兵，股指评价的专用语。指连续阴线后连续拉出三根阳线（红色）。短期有上扬空间...',
            'searchFoot' : {
                'care' : '关注',
                'class' : ''
            }
        },
        {
            'searchHead' : '快速拉升',
            'searchBody' : '红三兵，股指评价的专用语。指连续阴线后连续拉出三根阳线（红色）。短期有上扬空间...',
            'searchFoot' : {
                'care' : '关注',
                'class' : ''
            }
        },
        {
            'searchHead' : '快速拉升',
            'searchBody' : '红三兵，股指评价的专用语。指连续阴线后连续拉出三根阳线（红色）。短期有上扬空间...',
            'searchFoot' : {
                'care' : '关注',
                'class' : ''
            }
        },
        {
            'searchHead' : '快速拉升',
            'searchBody' : '红三兵，股指评价的专用语。指连续阴线后连续拉出三根阳线（红色）。短期有上扬空间...',
            'searchFoot' : {
                'care' : '关注',
                'class' : ''
            }
        }  
    ];

    $scope.change = function(index){
        
        $scope.searchArr[index].searchFoot.isActive = !$scope.searchArr[index].searchFoot.isActive;
        if($scope.searchArr[index].searchFoot.isActive){
            $scope.searchArr[index].searchFoot.care = '已关注';
            $scope.searchArr[index].searchFoot.class = 'active';
        }else{
            $scope.searchArr[index].searchFoot.care = '关注'
            $scope.searchArr[index].searchFoot.class = '';
        }
    }
});