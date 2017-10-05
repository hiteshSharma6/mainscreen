function b1change() {
	var section = document.getElementById("b1").children[0];
	window.onresize = window.onload = function() {
		section.style.height = (window.innerHeight - document.getElementById("nav").offsetHeight - document.getElementById("menu").offsetHeight)+"px";
		console.log(section.clientHeight);
		console.log(document.getElementById("nav").offsetHeight);
	}
}

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

//function carousel() {
//	$('#carousel')
//}

function serviceFlap() {
	var $list = $('#b5 > div > div > div');
	console.log($list);
	for(var i=0; i<$list.length; i++) {
	$list[i].style.marginTop = (5*i)+"px";		
	}
}

function init() {
	
//	b1change();
	
	setInterval(serviceFlap,100);

	color();
	$('.carousel').carousel({
  		interval: 3000
	});
//	setInterval(carousel,1000);
}

window.addEventListener("DOMContentLoaded", init);