$(document).ready(function(){
	$('li.r-0').eq(0).addClass('active'); 

	$(document).keyup(function (event) { 
    	if(event.keyCode == 38 || event.keyCode == 40) { /
    		f_keyPress(event.keyCode) 
    	}
	});
})

function f_keyPress (keyCode) {
	var current = $('li.active');
	if(keyCode == 40) {
		if(current.parents('div.t2').nextAll('.t2').eq(0).length) {
			current.toggleClass('active');
			current.parents('div.t2').nextAll('.t2').eq(0).find('li.r-0').toggleClass('active');
		}
	}
	if(keyCode == 38) {
		if(current.parents('div.t2').prevAll('.t2').eq(0).length) {
			current.toggleClass('active');
			current.parents('div.t2').prevAll('.t2').eq(0).find('li.r-0').toggleClass('active');
		}
	}
}