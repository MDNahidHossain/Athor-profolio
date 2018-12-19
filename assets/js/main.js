(function($){
	"use strict";
	
	// owlCarousel
$('.test-popup-link').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  },
});

$('#mobile-menu').meanmenu(
  meanMenuContainer: '.main-menu',
  meanScreenWidth: "767"

);
});
	
})(jQuery);