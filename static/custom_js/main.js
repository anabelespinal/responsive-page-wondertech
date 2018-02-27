$(document).ready(function(){
    go_to_section();
});


function go_to_section(){

    var $window = $(window);

    $('.event-scroll').on('click', function(event) {
		event.preventDefault();

		var $element = $(this).attr('href');
		var scrollTo = $($element).offset().top;

        if($(window).width() <= 970){
            var $heightMenu = $('.navbar-fixed-top').height();
            scrollTo = scrollTo - $heightMenu;
        }

		$('html, body').animate({scrollTop: scrollTo}, Math.abs($window.scrollTop() - scrollTo) / 2);
	});

}