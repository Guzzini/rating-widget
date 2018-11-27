/**
 * Created by Peter Maunatlala on 2017/02/05.
 */
angular.module('myApp.controllers',[]).controller('mainController',function($scope,commentsLocalStorage){

    /***create an empty array object to hold comments***/
    $scope.commentList = {};

    /***create a boolean for new comments flag***/
    $scope.isNewComment = false;
    $scope.commentList =  commentsLocalStorage.get();
    
});