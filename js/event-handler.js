/*EVENT HANDLER FOR MOBILE ONLY*/

     var main = function(){
        $('.article').click(function(){
            $('.article').removeClass('current');
            /*hides the description of the current event*/
            $('.description').slideUp();
            
            /*.children allows you to search through elements nested directly under the current element*/
            $(this).addClass('current');
            $(this).children('.description').slideDown();
            });
        
        /*using 0(111) & n(011) to navigate through*/
        $(document).keypress(function(event){
            /*if you press 0 then toggle through the description*/
            if (event.which===111) {
                $('.current').children('.description').toggle();
            }
            /*if you press n - move to next article*/
            else if (event.which===110) {
                $('.description').hide('.current');
                var currentArticle = $('.current');
                var nextArticle = currentArticle.next();
                currentArticle.removeClass('current');
                nextArticle.addClass('current');
            }
            
        });
    }
     
     $(document).ready(main);
