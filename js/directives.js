/*
**ng-repeat 执行完毕的回调函数命令
*/
function repeatFinished($timeout) {   
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function() {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
}

// function commonJs() {
//     return {
//         restrict:'AE',
//         tempateurl : 'common/commonjs.html'
//     };
// }

app
.directive('onFinishRenderFilters', repeatFinished)


