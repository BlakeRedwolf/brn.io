$( document ).ready(function() {

    // For on scroll effect
    $(window).scroll(function() {
		$('#fa-float').each(function(){ 
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1000) {
				$(this).addClass("fadeIn");
			}
		});
	});

    $(window).scroll(function() {
		$('#fa-float2').each(function(){ 
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+900) {
				$(this).addClass("fadeIn");
			}
		});
	});

    $(window).scroll(function() {
		$('#fa-float3').each(function(){ 
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("fadeIn");
			}
		});
	});

    $(window).scroll(function() {
		$('#fa-float4').each(function(){ 
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("fadeIn");
			}
		});
	});

    $(window).scroll(function() {
		$('#fa-float5').each(function(){ 
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$(this).addClass("fadeIn");
			}
		});
	});

    $(window).scroll(function() {
		$('#fa-float6').each(function(){ 
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$(this).addClass("fadeIn");
			}
		});
	});

    $(window).scroll(function() {
		$('#fa-foot').each(function(){ 
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1000) {
				$(this).addClass("fadeIn");
			}
		});
	});

    $(window).scroll(function() {
		$('#fa-foot2').each(function(){ 
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("fadeIn");
			}
		});
	});

    $(window).scroll(function() {
		$('#fa-foot3').each(function(){ 
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("fadeIn");
			}
		});
	});

    // For on click effect
    $('#aboutbtn').click(function() {
		$(this).addClass("expandOpen");
	});

    $('#').click(function() {
        $(this).addClass("");
    });

});