/**
 * Created by Peter Maunatlala on 2017/02/05.
 */
angular.module('myApp.services',[]).factory('commentsLocalStorage',function(){

    return {
        /***retrieve object from local storage***/
        get: function ()
        {
            return JSON.parse(localStorage.getItem('comments') || '[]');
        },
        /***set object to local storage***/
        put: function (values)
        {
            localStorage.setItem("comments", JSON.stringify(values));
            alert("Comment saved successfully!");
            return true;
        }
    };
});
