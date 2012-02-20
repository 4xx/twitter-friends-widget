$(document).ready(function () {
	var footer = $('#footer');
	$('a.facebook-frame',footer).each(function(){
		var a = $(this);
		a.wrap(
			'<'+'iframe scrolling="no" frameborder="0" allowTransparency="true"'+
			' src="http://www.facebook.com/plugins/like.php?layout=button_count&amp;show_faces=false&amp;width=90&amp;action=like&amp;colorscheme=light&amp;height=21'+
			'&amp;href='+ encodeURIComponent(a.attr('rel')) +'"'+
			' style="border:none; overflow:hidden; width:90px; height:21px;"></'+'iframe>');
	});
	$('a.googleplus-frame',footer).each(function(){
		var a = $(this);
		a.wrap(
			'<'+'iframe width="32" frameborder="0" scrolling="no" style="width: 32px; height:20px; border-style: none;"'+
 			' src="https://plusone.google.com/u/0/_/+1/fastbutton?url='+ encodeURIComponent(a.attr('rel')) +'&size=medium&count=true&annotation=none&hl=en-US&_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe"'+
 			' marginwidth="0" marginheight="0" allowtransparency="true"></'+'iframe>'
		);
	});
	$('a.popup', footer).click(function() {
        var a = $(this);
        var w=640, h=420, left = (screen.width / 2) - (w / 2), top = (screen.height / 2) - (h / 2);
        window.open(a.attr('href'), 'popup', 'toolbar=no,width=' + w + ',height=' + h + ',top=' + top + ',left=' + left);
        return false;
    });
});