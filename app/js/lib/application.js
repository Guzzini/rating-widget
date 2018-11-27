/**
 * Created by Peter Maunatlala on 2017/01/05.
 */

/***show and hide divs for comment elements ***/
function showDiv(){
        $("#view-comments-link").show("slow");
        $("#div-content" ).show("slow");
        $("#span-content_a").hide("slow");
        $("#span-content").hide("slow");
        $("#buttonClick").hide("slow");

}

/***social media url's redirects***/
function urlRedirect(value){
    if(value == 'facebook'){
        window.location = "www.facebook.com";
    }

    if(value == "instagram"){
        window.location = "www.instagram.com";
    }

    if(value == "linkedin"){
        window.location = "www.linkedin.com";
    }

    if(value == "twitter"){
        window.location = "www.twitter.com";
    }
}