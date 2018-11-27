/**
 * Created by A148941 on 2017/02/05.
 */
angular.module('myApp.directives',[]).directive('submitData',function(){
    return{
        restrict: 'E',
        controllerAs:'mainController',
        templateUrl: 'templates/view_comment.html'
    }
});