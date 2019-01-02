$(document).ready(function(){
      $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
          var topPosition  = target.offset().top - 200;
          console.log(target.offset())
        $('html, body').animate({
          scrollTop: topPosition
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            // Set focus again
          };
        });
      }
    }
  });
     
     $(document).scroll(function () {
   //get document scroll position
     var position = $(document).scrollTop() + 200; 
         console.log($('.main-content-home').height());
         if (position > $('.main-content-home').height()){
             console.log()
             $('.layout-div').width($('.menu-div').width());
             $('.layout-div').css("display", "flex");
             $('.menu-div').addClass('sticky');
         } else {
             $('.menu-div').removeClass('sticky');
              $('.layout-div').css("display", "none");
         }
     //get header height
     if (position > $('#research').offset().top  && position < $('#branding').offset().top){
          $('.project-menu-item').removeClass('active');
         $('.two').addClass('navlink-active-hover');
         if(!$('.menu-one').hasClass()){
              $('.menu-one').addClass('active');
         }
        
     } else if (position >= $('#branding').offset().top && position <= $('#branding').offset().top) {
        $('.project-menu-item').removeClass('active');
         $('.menu-two').addClass('active');
     }
         else if (position >= $('#branding').offset().top && position <= $('#illustration').offset().top) {
         $('.project-menu-item').removeClass('active');
         $('.menu-three').addClass('active');
     } else if (position >= $('#illustration').offset().top && position <= $('#textile').offset().top) {
         $('.project-menu-item').removeClass('active');
         $('.menu-four').addClass('active');
     } else if (position >= $('#textile').offset().top  && position <= $('#social-work').offset().top) {
         $('.project-menu-item').removeClass('active');
         $('.menu-five').addClass('active');
     } else if (position >= $('#social-work').offset().top ){
         $('.project-menu-item').removeClass('active');
         $('.menu-six').addClass('active');
     } else {
          $('.two').removeClass('navlink-active-hover');
     }
    
     //check active section
   
   }); 
    $(".project-card-item").hover(function () {
        //$(this).find('hr').toggleClass("card-hr-hover");
        $(this).find('hr').toggleClass("grow");
 });
} );
  