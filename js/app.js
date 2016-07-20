$(document).foundation(function(){
	$('.inline-list').each(function(){
	  $('ul').removeClass('inline-list');
	  $(this).addClass('menu');
	});
});