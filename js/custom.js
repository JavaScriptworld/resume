// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
			 "images/timer0.jpg",
	 		 "images/tm-bg-slide-1.jpg", 
	 		 "images/tm-bg-slide-2.jpg",
			 "images/tm-bg-slide-3.jpg",
			 "images/timer1.jpg",
			 "images/timer2.jpg",
			 "images/timer3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})