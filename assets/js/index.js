/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

    //From the Ellie Theme, for featured image in header of each post. 
	$('pre').addClass('prettyprint');
	
	// var mainImage = $('img[alt="main-image"]');
	
	// if ( mainImage.length > 0){
	// 	var mainImageSource = mainImage.attr('src');
	// 	console.log(mainImageSource); 
	// 	$('.featured-image').css('background-image','url('+mainImageSource+')');
	// 	mainImage.remove();
	// }

	// function(img) {
	// 	//output image
	// }; 

	});

}(jQuery));