$(document).ready(function(){
 
	$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
		nav:true,
		rewind:true,
		center:false,
		mouseDrag: true,
		navText: ["<img src='./img/arrow-left.png'>","<img src='./img/arrow.png'>"],
    responsive:{
        0:{
						items:1,
						stagePadding: 90,
						margin:30,
						center:true
        },
        600:{
            items:2
        },
        800:{
            items:2
        },
        1000:{
            items:2
        },
        1140:{
						items:4,
        }
    }
})


});

