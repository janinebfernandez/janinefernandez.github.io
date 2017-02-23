/*INLCUDE HEAD & FOOT*/

$(document).ready(function(){
    
$(function(){
        $("#headerContent").load("includes/lmgc-head.html");
        $("#footerContent").load("includes/lmgc-foot.html");
        
        /*Content loads for PAGES html files*/
        $("#headerContent").load("../includes/lmgc-head.html");
        $("#footerContent").load("../includes/lmgc-foot.html");
        });


$(".teetimes_link").hover(
    function(){
        $(this).addClass('active');
},
    function() {
        $(this).removeClass('active');
    });
/*
$(".teetimes_link").on(mouseover(function(){
    $(".teetimes_link").css("background-color", "rgb(179, 218, 255)");
    $(".teetimes_link").css("style.color", "#000000")
}));


$(".teetimes_link").mouseleave(function(){
    $(".teetimes_link").css("background-color", "rgb(0, 132, 255)");
});
*/





});
