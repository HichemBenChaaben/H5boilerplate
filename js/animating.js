(function(window, document, $, undefined) {
	'use strict';
    /* Custom animate easing func*/
    $.extend( $.easing,
    {
       easeInOutExpo: function (x, t, b, c, d) {
            if (t === 0) return b;
            if (t === d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    });
    var globale={
    	$objects : $(".block"),
    	$docHeight : $(window).height(), 
    	$containerPage : $("html, body"), 
    	animatedGroup:{
    		group1:{
    			image : 'image1',
    			Tclass : 'class1'
    		},
    		group2:{
    			image : 'image2',
    			Tclass : 'class2'
    		},
    	}
    } 
   

    /* dEFINE THE LAYOUT 
    ------------------------------------*/
    var lAYOUT = {
    	init : function(){
    		varnish();
    	function varnish(){
    			// make all objects have a height 
    	        globale.$objects.css('height',globale.$docHeight); 
    	   }
    	}
    }  

    /* define breakpoints */

     /* dEFINE THE LAYOUT 
    ------------------------------------*/
    var TRIGGERS = {
    	init : function(){
    		changeAnimation();
    	function changeAnimation(){
    			// configuration and detect breakpoints 
    			var intervals  = []; 
    			var breakpoints  = $(document).height()/$('.block').length;
    			//console.log('number of animations is '+breakpoints);   

    			// make all objects have a height

				$(window).scroll(function(){
					if(breakpoints/$(this).scrollTop() >= 1 ){
						// call the animation function over here 
						animated1() ;
						//console.log('breakpoint reached '); 
					} 
					console.log('the height of the window is : '+$(document).height()); 
					console.log('the offset is : '+$(this).scrollTop()); 
				});
    	         
    	   }
    	  function animated1(){
    	  	// the code for the animation
    	  	// animate the first image over here 
    	  	var objectTarget = globale.animatedGroup.group1.image ;
    	  	var tween = Tween.get(objectTarget).to({x:300},400);

    	  } 
    	  function animated2(){
    	  	// the code for the animation 
    	  } 
    	  function animated3(){
    	  	// the code for the animation 
    	  } 
    	  function animated4(){
    	  	// the code for the animation 
    	  } 
    	  function animated5(){
    	  	// the code for the animation 
    	  } 
    	  function animated6(){
    	  	// the code for the animation 
    	  } 
    	}
    }   

    /* Base
    ------------------------------------*/
    var Base = {
		init: function(){
			lAYOUT.init(); // intiatlise the layout 
		}
	};
    $(function(){
		require([
				"repos /TweenJS/lib/tweenjs-0.3.0.min.js"
				"repos/"
				], function(util) {
			//This function is called when scripts/helper/util.js is loaded.
			//If util.js calls define(), then this function is not fired until
			//util's dependencies have loaded, and the util argument will hold
			//the module value for "helper/util".
        Base.init();
        TRIGGERS.init();
		});
    });
 
})(window, document, jQuery);
