/*
** 应用初始化
 */
var app = angular.module('qlttApp',[]);

/**
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @return {[type]}
 */
 app.run(function($rootScope) {
    
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

    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {

            $('#scroller').css('width',$scope.headerArr.length*90+20);
            var headIscroll = new IScroll('#header', { 
                eventPassthrough: true, 
                scrollX: true, 
                scrollY: false, 
                preventDefault: false 
            });
    });

});  

//页脚控制器
app.controller('footer',function($scope){
    $scope.fSearch = '指标查询';
    $scope.fCare = '我的关注';
    $scope.fPool = '选股池';
    $scope.fRmd = '荐股池';
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        
    });
});

//指标查询控制器
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

//标签控制器
app.controller('tag',function($scope){
    $scope.tagArr = [
        {
            'text' : '红三兵' ,
            'class' : '' 
        },
        {
            'text' : '早晨之星' ,
            'class' : '' 
        },
        {
            'text' : '红三兵' ,
            'class' : '' 
        },
        {
            'text' : '红三兵' ,
            'class' : '' 
        },
        {
            'text' : '红三兵' ,
            'class' : '' 
        },
        {
            'text' : '红三兵' ,
            'class' : '' 
        },
        {
            'text' : '红三兵' ,
            'class' : '' 
        },
        {
            'text' : '红三兵' ,
            'class' : '' 
        },
        {
            'text' : '红三兵' ,
            'class' : '' 
        },
        {
            'text' : '红三兵' ,
            'class' : '' 
        },
        {
            'text' : '红三兵' ,
            'class' : '' 
        }
    ];

    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        });
           
    });

    $scope.checkTxt = '我的选择';
    $scope.btnCare = '关注组合指标';
    $scope.btnClc = '收藏组合指标';
    $scope.checkArr = ['红三兵','红三兵','红三兵','红三兵','红三兵'];

});

//筛选控制器
app.controller('screen',function($scope){
    $scope.screenArr = [
        {
            'name' : '上海电影',
            'nums' : 328370,
            'date' : '03-01 12:35',
            'type' : '潜力股'
        },
        {
            'name' : '上海电影',
            'nums' : 328370,
            'date' : '03-01 12:35',
            'type' : '潜力股'
        },
        {
            'name' : '上海电影',
            'nums' : 328370,
            'date' : '03-01 12:35',
            'type' : '潜力股'
        },
        {
            'name' : '上海电影',
            'nums' : 328370,
            'date' : '03-01 12:35',
            'type' : '潜力股'
        },
        {
            'name' : '上海电影',
            'nums' : 328370,
            'date' : '03-01 12:35',
            'type' : '潜力股'
        },
        {
            'name' : '上海电影',
            'nums' : 328370,
            'date' : '03-01 12:35',
            'type' : '潜力股'
        },
        {
            'name' : '上海电影',
            'nums' : 328370,
            'date' : '03-01 12:35',
            'type' : '潜力股'
        },
        {
            'name' : '上海电影',
            'nums' : 328370,
            'date' : '03-01 12:35',
            'type' : '潜力股'
        }
    ];

    $scope.srceenTxtL = '根据您的指标组合共计筛选出';
    $scope.srceenTxtNum = 120;
    $scope.srceenTxtR = '支股票';
    $scope.loadMore = '加载更多';
});

//组合指标模板
// function createTemplateCbt($parent,url){
//     alert()
//     var cbtArr = [
//         {
//             'searchHead' : '快速拉升',
//             'searchBody' : '红三兵，股指评价的专用语。指连续阴线后连续拉出三根阳线（红色）。短期有上扬空间...',
//             'searchFoot' : {
//                 'care' : '关注',
//                 'class' : ''
//             }
//         },
//         {
//             'searchHead' : '快速拉升',
//             'searchBody' : '红三兵，股指评价的专用语。指连续阴线后连续拉出三根阳线（红色）。短期有上扬空间...',
//             'searchFoot' : {
//                 'care' : '关注',
//                 'class' : ''
//             }
//         },
//         {
//             'searchHead' : '快速拉升',
//             'searchBody' : '红三兵，股指评价的专用语。指连续阴线后连续拉出三根阳线（红色）。短期有上扬空间...',
//             'searchFoot' : {
//                 'care' : '关注',
//                 'class' : ''
//             }
//         },
//         {
//             'searchHead' : '快速拉升',
//             'searchBody' : '红三兵，股指评价的专用语。指连续阴线后连续拉出三根阳线（红色）。短期有上扬空间...',
//             'searchFoot' : {
//                 'care' : '关注',
//                 'class' : ''
//             }
//         },
//         {
//             'searchHead' : '快速拉升',
//             'searchBody' : '红三兵，股指评价的专用语。指连续阴线后连续拉出三根阳线（红色）。短期有上扬空间...',
//             'searchFoot' : {
//                 'care' : '关注',
//                 'class' : ''
//             }
//         },
//         {
//             'searchHead' : '快速拉升',
//             'searchBody' : '红三兵，股指评价的专用语。指连续阴线后连续拉出三根阳线（红色）。短期有上扬空间...',
//             'searchFoot' : {
//                 'care' : '关注',
//                 'class' : ''
//             }
//         }  
//     ];

//     var html = '<div class="search container" id="search-cbt" >';
//     for(var i in cbtArr){
//        html  += '<div class="search-item">'
//              +   '<div class="search-head">' + cbtArr[i].searchHead + '</div>'
//              +      '<div class="search-body">' + cbtArr[i].searchBody + '</div>'
//              +   '<div class="search-foot">'
//              +      '<span>' + cbtArr[i].searchFoot.care + '</span>'
//              +   '</div>'
//              +  '</div> '
//     }
//     html += '</div>'
//     $parent.append(html);

// }