/**
 * Created by Peter Maunatlala on 2017/02/05.
 */
angular.module('myApp.controllers.comments',[]).controller('commentController',function($scope,$document,commentsLocalStorage){

    /***create variables that will populate values from a document***/
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var comments = document.getElementById('comments');
    var rating = document.getElementsByName('rating');

    /***create object to display error messages for empty form input***/
    $scope.commentErroMessage = {}
    $scope.isFieldValid = false;
    $scope.showHideDivs = false;
    /***iterate through array to return a checked input value***/
    var ratingValue = function(){
        for(var i = 0;i < rating.length;i++){
            if(rating[i].checked){
                return rating[i].value;
            }
        }
    }


    var validateNameFields = function(){/***Start - declaring a methods for input field validation***/

        $scope.isFieldValid = false;

        if(name.value == "" || name.value.length == 0){
            $scope.commentErroMessage = {messagefield_error:"Please fill in your name."}
            return $scope.isFieldValid = true;
        }
    }

    var validateEmailFields = function(){

        $scope.isFieldValid = false;

        if(email.value == "" || email.value == null){
            $scope.commentErroMessage = {messagefield_error:"Please fill in your email."}
            return $scope.isFieldValid = true;
        }
    }

    var validateCommentsFields = function(){

        $scope.isFieldValid = false;

        if(comments.value == "" || comments.value == null){
            $scope.commentErroMessage = {messagefield_error:"Please fill in your comments."}
            return  $scope.isFieldValid = true;
        }
    }

    var validateRatingFields = function(){

        $scope.isFieldValid = false;

        if(ratingValue() == undefined){
            $scope.commentErroMessage = {messagefield_error:"Please click a star to rate."}
            return $scope.isFieldValid = true;
        }
    }/***End - declaring a methods for input field validation***/


    /***get the info from the storage to be used later on***/
    $scope.comments = commentsLocalStorage.get();

    /***create a property to set a flag for new comment***/
    $scope.newComment = false;
    $scope.newUserId = 0;

    /***create a variable to hold current length of local storage for the next comparison***/
    var storageLegnth = $scope.comments.length;

    /***declare a triggering method to send data to local storage***/
    $scope.submitWidgetComment = function(){

        /***let us validate first before making a call***/
        if(validateNameFields() != true) {
            if (validateRatingFields() != true) {
                if (validateEmailFields() != true) {
                    if (validateCommentsFields() != true) {

                        /***add new comments values***/
                        $scope.comments.push({
                            "commentIdValue": $scope.comments.length + 1,
                            "nameValue": name.value,
                            "emailValue": email.value,
                            "commentsValue": comments.value,
                            "ratingValue": ratingValue()
                        });

                        /***set a new userId before saving to local storage***/
                        $scope.newUserId = $scope.comments[$scope.comments.length - 1].commentIdValue;

                        /***save comments to local storage***/
                        commentsLocalStorage.put($scope.comments);

                        $scope.showHideDivs = true;

                        if (storageLegnth < $scope.comments.length && $scope.newUserId != 0) {
                            return $scope.newComment = true;
                        } else {
                            return $scope.newComment = false;
                        }


                    }
                }
            }
        }
    }

});