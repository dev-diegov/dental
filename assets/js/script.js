$(document).ready(function() {

	/* Adding Sticky Navigation */
	$(".js--about-section").waypoint(function(direction) {
		if(direction=="down") {
			$("nav").addClass('sticky-nav');
		}
		else {
			$("nav").removeClass('sticky-nav');
		}
	}); 

  /* Animation on Scroll */
  $(".js--about-section").waypoint(function(direction) {
		$(".js--about-box").addClass('animate__animated animate__fadeIn');
	}, {
		offset:'50%'
	}); 

   $(".js--services-section").waypoint(function(direction) {
		$(".js--service-box").addClass('animate__animated animate__zoomIn');
	}, {
		offset:'50%'
	}); 

   $(".js--packages-section").waypoint(function(direction) {
		$(".js--enterprise").addClass('animate__animated animate__pulse');
	}); 
});