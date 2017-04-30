/*JANINE FERNANDEZ portfolio-2.js - WEB/PHOTOGRAPHY/GRAPHIC DESIGN/TYPOGRAPHY*/

    $(document).ready(function(){
        $(function(){
            
        /*Portfolio.html header/footer link*/
        $("#mainHeader").load("includes/mainHeader.html");
        $("#mainFooter").load("includes/mainFooter.html");
        
        
        /*Portfolio_page.html header/footer link*/
        $("#pageHeader").load("../includes/mainHeader.html");
        $("#pageFooter").load("../includes/mainFooter.html");
            
            
            
        });
        
         
        /*NAV LINK TITLE EFFECT*/
        $(".photo_link").hover(function(){
            $("#div1",this).css("width", "100px");
            $("#div1",this).css("transition", ".5s", "ease");
            $(".h3_title",this).fadeIn(".5s","swing");
            $(".h3_title",this).css("opacity","1");
            $(".p_title",this).fadeIn(".5s","swing");
            $(".p_title",this).css("opacity","1");
            }, function(){
            $("#div1",this).css("width", "20px");
            $(".h3_title",this).fadeOut(".2s","swing");
            $(".p_title",this).fadeOut(".2s","swing");
            
        });
        
        
        
        /*PAGES PHOTO LINK & CONTENT VISIBILITY*/
        $(".photo_link").click(function(){
            $(".w3-content").css("display", "block");
            $(".w3-display").animate({
            opacity: '0'},1100);
            $(".w3-center").css("background", "none");
            $(".inactive_project").css("display", "none");
            $(".active_project").css("display", "block");
            $(".tri_button_subject").css("border-right-color", "#CD5C5C");
            
            
            $(".content_popup").animate({
                top: '200'},1100);
            
            
            $(".content_popup").css("display","block");
            $(".sidebar_content").css("display","block");
            $(".content_body").css("display","block");
            $("#copyright").css("display", "none");
        });
        
        /*Back Button for page content*/
        $(".active_project").click(function(){
            /*$(".w3-content").css("display", "none");*/
            $(".w3-display").css("opacity", "1");
            $(".w3-center").css("background", "beige");
            $(".inactive_project").css("display", "block");
            $(".active_project").css("display", "none");
            $(".tri_button_subject").css("border-right-color", "grey");
            
            
            /*CONTENT_BODY large file content return*/
            $("#content_subject_container").animate({
            height: '433px'},'slow');
            $("#subject_description").animate({
                opacity: '1'});
            
            
            $(".content_popup").animate({
                top: '1000'},'slow');
            
            $(".content_popup").css("display","none");
            $(".sidebar_content").css("display","none");
            $(".content_body").css("display","none");
            $("#copyright").css("display", "block");
        });
        
        
        
        /*LARGE SAMPLE IMAGE POPUP*/    
        /*ADD HEIGHT*/
        $(".remove_div").click(function(){
            $("#content_subject_container").animate({
                height: '0px'
            },1000);
            $("#subject_description").animate({
                opacity: '0'
            },1000);
            $("#page_nav_container").css("position", "absolute");
            $(".sidebar_content").addClass("sidebar_sample");
            $(".active_project").css("background-color", "rgba(255,255,255,.8)");
            $(".content_body").addClass("sample_show");
            $(".content_body").css("display","table-header-group;")

            /*SPECIFICLY FOR THIS PAGE ONLY*/
            $("#back_button_subject").css("display", "block");
        });
   
        
        
 });/*DOCUMENT READY ENDS*/
        
        
      
