$(document).ready(function(){

	$('li.side-link').click(function(){
		setTimeout(function(){
		     $('.main-content-sidebar').toggleClass('toggle-visibility');
		     }, 3000);
	});
   
    $('li.blue-link').mouseenter(function(){
         $(this).siblings().css('color', 'blue');
    });

    $('li.blue-link').mouseleave(function(){
         $(this).siblings().css('color', 'white');
    });
});