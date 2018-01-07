$(document).ready(function () {
    
     var p = $( "#g10:first" );
     var position = p.position();
     var x=position.top;
     console.log('total', x);
     var y=parseInt(x);
     console.log('total', y);
     photo = $('#g10')
     offset = photo.offset();
     photoViewportOffsetTop = offset.top ;
    
    
     console.log('total', photoViewportOffsetTop);
    console.log('total',  offset);
	console.log('total', $( window ).height());
	
	
	$(window).scroll(function () {
        event.stopPropagation();
        if($(this).scrollTop()>= y-100) {
            p.text("hello from jquery");
			$( "#g1" ).hide();
        }
        else {
           p.text("hello "); 
			$( "#g1" ).show();
        }
    });
    
});