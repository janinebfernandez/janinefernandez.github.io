/*JANINE FERNANDEZ portfolio-1.js - VIDEO*/

    
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
            
            
        });
        
        /*Back Button for page content*/
        $(".active_project").click(function(){
            $(".w3-content").css("display", "none");
            $(".w3-display").css("opacity", "1");
            $(".w3-center").css("background", "beige");
            $(".inactive_project").css("display", "block");
            $(".active_project").css("display", "none");
            $(".tri_button_subject").css("border-right-color", "grey");
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
            
            
        });
        
        /*Back Button for page content*/
        $(".active_project").click(function(){
            $(".w3-content").css("display", "none");
            $(".w3-display").css("opacity", "1");
            $(".w3-center").css("background", "beige");
            $(".inactive_project").css("display", "block");
            $(".active_project").css("display", "none");
            $(".tri_button_subject").css("border-right-color", "grey");
        });
        
        
 });/*DOCUMENT READY ENDS*/
        
        
      
