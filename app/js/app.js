angular.module('app',[])

.controller('MainCtrl', ['$scope',function($scope){

    $scope.menu = function(){
        console.log('minimenus');
        $('body').toggleClass('mobile');
    }
}]);