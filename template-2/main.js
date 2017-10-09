function color() {
	$('.c1').hover(function() {
      $(this).toggleClass("red");  //Toggle the active class to the area is hovered
		$(this).toggleClass("default");
  	});
	$('.c2').hover(function() {
      $(this).toggleClass("blue");  //Toggle the active class to the area is hovered
		$(this).toggleClass("default");
  	});
	$('.c3').hover(function() {
      $(this).toggleClass("purple");  //Toggle the active class to the area is hovered
		$(this).toggleClass("default");
  	});
	$('.c4').hover(function() {
      $(this).toggleClass("yellow");  //Toggle the active class to the area is hovered
		$(this).toggleClass("default");
  	});
	$('.c5').hover(function() {
      $(this).toggleClass("orange");  //Toggle the active class to the area is hovered
		$(this).toggleClass("default");
  	});
}

function init() {
//	color();
}

window.addEventListener("DOMContentLoaded", init);