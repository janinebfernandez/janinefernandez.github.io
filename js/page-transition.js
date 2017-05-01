/*PAGE TRANSITION*/

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js">
    

$(function(){
         /*
    Add this code to every page.

    We start by hiding the body, and then fading it in.
    */
    $('body').hide().fadeIn(500);

    /*
    Now we deal with all 'a' tags...
    */
    $('.animation-link').click(function(){
        /*
        Get the url from this anchors href
        */
        var link = $(this).attr('href');
        /*
        Fade out the whole page
        */
        $('body').fadeOut(50, function(){
            /*
            When that's done (on the 'callback') send the browser to the link.
            */
            window.location.href = link;
        });
        return false;
    });

});


     </script>   

