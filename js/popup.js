$(document).ready(function(){
	$('.open-fast').click(function(){
		$('.popup-fast').css({'top':$(document).scrollTop()+100}).fadeIn();
		$('.bg-popup').fadeIn();

		$('.bg-popup').click(function(){
			$('.popup-fast').fadeOut();
			$('.bg-popup').fadeOut();
		});

		$('.submit-button').click(function(){
			$('.popup-fast').fadeOut();
			$('.bg-popup').fadeOut();
		});
	});

	$(document).scroll(function(){
		$('.popup-fast').css({'top': $(document).scrollTop()+100})
	}).scroll();
});