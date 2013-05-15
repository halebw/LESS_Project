/**
 * @author halelaptop
 */

$(document).ready(function() {
	
	$.get("content/home.txt", function(data) {
			
		$('#content').html(data);
});
	var headerTag = $('header h1').get();
	TweenLite.to(headerTag, 2, {
		ease : Elastic,
		left : 400
	});
	TweenLite.to(headerTag, 5, {
		left : 30,
		delay : 6,
		onComplete : addText
	});

	function addText() {
		$('header h1:after').css('content', "made it")
		
	}


	$('nav a').click(function(e) {
		//alert($(this).html().toLowerCase())
		var txtName = $(this).html().toLowerCase();
		$.get("content/"+txtName +".txt", function(data) {
			$("#id").text(data);
		$('#content').html(data);
		});

	});
});
