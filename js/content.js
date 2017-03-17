/*CONTENT JS*/


/*SEARCH BAR FUNCTION*/
$(document).ready(function(){
$(function() {
	$("#input_id").click(function() {
		if ($("#input_id").val() == "Search our website"){
			$("#input_id").val(" "); 
		}
	});
});
});/*Document ENDS*/



/*PAGES/TEETIMES*/
/**TEETIMES HOVER EFFECT**/
$(document).ready(function(){
    $(".tee_times").mouseenter(function(){
        $('#booking_time',this).css("background-color","#E8C384");
        $('#price',this).css("color","#E8C384");
    });
    $(".tee_times").mouseleave(function(){
        $('#booking_time',this).css("background-color","rgb(115,115,115)");
        $('#price',this).css("color","rgb(225,225,225)")
    });
    
});


/**TEETIME POPUP**/
$(document).ready(function(){
    $(".tee_times").click(function(){
        $("#popup",this).toggle(".show");
    });
});


/**EVENTS POPUP INFORMATION**/
function myFunction() {
   var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    
    
}     
/*************************************************/
/*$(document).ready(function(){	
	randomtip();
});*/
