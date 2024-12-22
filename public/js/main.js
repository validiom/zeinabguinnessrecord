(function($) {
  
  var App = {
  
    /**
    * Init Function
    */
    init: function() {
    App.homeHeight();
    App.counter();
    App.HomeOpacity();
    App.ScrollToContact();
    App.ScrollBack();
    App.iosdetect();
    App.Preloader();
    App.HomeBackground();
    App.FormValidation();
    },

 

     /**
     * Home Screen Height
     */
     homeHeight: function() {
     var h = window.innerHeight;
     $('#home').height(h);
     
     $(window).resize(function(){
        var h = window.innerHeight;
        $('#home').height(h);
        });
     },
 
     /**
      * Home Screen Counter
      */
     counter: function() {
     $('.countdown').countdown({ date: "December 22, 2024 23:59:59" });
     },
 
 
     /**
      * Home Screen Opacity control
      */
     HomeOpacity: function() {
 
     var h = window.innerHeight;
     $(window).on('scroll', function() {
                  var st = $(this).scrollTop();
                  $('body').pseudoCss(':after', 'opacity', st/h );
                  $('#home').css('opacity', (1-st/h) );
                  });

     },
 
 
     /**
      * Scroll To Contact
      */
     ScrollToContact: function() {
     $('#arrow').click(function () {
       $.scrollTo('#contact',1200,{easing:'easeOutExpo',offset:0,'axis':'y'});
     });
     },
 
 
 
     /**
      * Scroll Back
      */
     ScrollBack: function() {
     $('#arrow_back').click(function () {
     $.scrollTo('#home',1500,{easing:'easeInOutExpo',offset:0,'axis':'y'});
                       });
     },
 
 
     /**
      * iosdetect
      */
     iosdetect: function() {
     var deviceAgent = navigator.userAgent.toLowerCase();
     $iOS = deviceAgent.match(/(iphone|ipod|ipad)/);
     
     if ($iOS) {
     var divs = $('#home_content');
     var h = window.innerHeight;
     var divh = $("#home_content").height();
     divs.css({ "position": "relative", "top": (h-divh)/2, "margin-top": "0" });
     $(window).resize(function() {
                  var divs = $('#home_content');
                  var h = window.innerHeight;
                  var divh = $("#home_content").height();
                  divs.css({ "position": "relative", "top": (h-divh)/2, "margin-top": "0" });
                  });
 
     // use fancy CSS3 for hardware acceleration
     } else {


     // use standard things like jQuery.animate
     }
     },
 
 
      /**
      * Preloader
      */
      Preloader: function() {
      $(window).load(function() {
               
                function logo_fade() {$('#logo').css({"opacity":"1"})};
                function logo_header_fade() {$('#logo_header').css({"opacity":"1"})};
                function counter_box_fade() {$('#counter_box').css({"opacity":"1"})};
                function slogan_fade() {$('#slogan').css({"opacity":"1"})};
                function newsletter_form_fade() {$('#newsletter_form').css({"opacity":"1"})};
                function arrow_fade() {$('#arrow').css({"opacity":"1"})};
                function preview_fade() {$('#preview').css({"opacity":"1"})};
                function contact_fade() {$('#contact').css({"opacity":"1"})};
                     
                $('#logo_header').css({"opacity":"0"});
                $('#counter_box').css({"opacity":"0"});
                $('#slogan').css({"opacity":"0"});
                $('#newsletter_form').css({"opacity":"0"});
                $('#arrow').css({"opacity":"0"});
                $('#preview').css({"opacity":"0"});
                $('#contact').css({"opacity":"0"});
                       
                $('#status').delay(100).fadeOut('slow');
                $('#preloader').delay(500).fadeOut('slow');
                $('body').delay(500).css({'overflow':'visible'});
                       setTimeout(logo_fade,700);
                       setTimeout(logo_header_fade,100);
                       setTimeout(counter_box_fade,300);
                       setTimeout(slogan_fade,600);
                       setTimeout(newsletter_form_fade,900);
                       setTimeout(arrow_fade,1200);
                       setTimeout(contact_fade,1200);
                })
        },
 
         /**
          * Vegas Slider
          */
         HomeBackground: function() {
 
         $.vegas('slideshow', {
         backgrounds:[
                      { src:'images/slide1.jpg', fade:1000 },
                      { src:'images/slide2.jpg', fade:1000 },
                      { src:'images/slide3.jpg', fade:1000 },
                      { src:'images/slide4.jpg', fade:1000 }
                      ]
         })('overlay', {
            src:'images/overlays/01.png'
            });
 
         },
 
        /**
        * Form Validation
        */
        FormValidation: function() {
        $('#subscribe-form').ketchup();
        },

 

 }

$(function() {
  App.init();
  });


})(jQuery);