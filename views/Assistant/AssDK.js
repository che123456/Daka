/**
 * Created by hxsd on 2016/8/18.
 */
// 注册控制器
angular.module('myapp').controller('DaKaCtrl', function($scope) {

    $scope.show = false;
    $scope.Ply2Show=false;
    $scope.AssModal2Show=false;
    $scope.AssModal1=function(){
        $scope.show = true;
    };
    $scope.HideModal1=function(){
        $scope.show = false;
    };

    $scope.AssModal2=function(){
        $scope.Ply2Show=true;
        $scope.AssModal2Show=true;
    };

    $scope.HideModal2=function(){
        $scope.AssModal2Show=false;
        $scope.Ply2Show=true;
    };




});































