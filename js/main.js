///////////////////////////////////////////////////
// ShowHide plugin                               
// Author: Ashley Ford - http://papermashup.com
// Demo: Tutorial - http://papermashup.com/jquery-show-hide-plugin
// Built: 19th August 2011                                     
///////////////////////////////////////////////////
(function ($) {
"use strict";
  $.fn.showHide = function (options) {
    //default vars for the plugin
    var defaults = {
         easing: '',
     changeText: 0,
     showText: 'Show',
     hideText: 'Hide'
    };
    var options = $.extend(defaults, options);
    $(this).click(function () {
      $('.toggleDiv').fadeOut(500, options.easing);
      // this var stores which button you've clicked
      var toggleClick = $(this);
      // this reads the rel attribute of the button to determine which div id to toggle
      var toggleDiv = $(this).attr('rel');
      // here we toggle show/hide the correct div at the right speed and using which easing effect
      $(toggleDiv).fadeIn(500, options.easing, function() {
        // this only fires once the animation is completed
        if(options.changeText===1){
          $(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
        }
      }
                          );
      return false;
    }
                  );
  };
	
		   
}
)(jQuery);