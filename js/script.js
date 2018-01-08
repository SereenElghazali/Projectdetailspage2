/**
 * Created by sa on 09/24/2017.
 */

$(document).ready(function () {
	
	$( ".phone a" ).on( "click", function(e) {
    e.preventDefault();
    var link = $(this).attr('href');

    swal({
        title: "+971 50 1553316",
        text: "Call me",
        type: "",
        showCancelButton: true,
		
    },
    function(){
        window.location.href = link;
		console.log('link',link);
    });
});
	$( ".whatsapp a" ).on( "click", function(e) {
    e.preventDefault();
    var link1 = $(this).attr('href');

    swal({
        title: "+971 50 1553316",
        text: "Whatsapp me",
        type: "",
        showCancelButton: true,
		
    },
    function(){
        window.location.href = link1;
		console.log('link',link1);
    });
});
	
	// $( ".phone a" ).on( "click", function() {
    // swal({
  		// text: "+971 50 1553316",
		// buttons: ["cancle", "call"],
		//});
	// });
	//$( ".whatsapp" ).on( "click", function() {
    // swal({
  	//	 text: "+971 50 1553316",
	//	 buttons: ["cancle", "call"],
	//	});
	// });
	//$( ".sms" ).on( "click", function() {
    // swal({
  	//	 text: "+971 50 1553316",
	//	 buttons: ["cancle", "call"],
	//	});
	// });
	
	
   $(function () {
    // 1. Initialize fotorama manually.
    var $fotoramaDiv = $('#fotorama').fotorama();

    // 2. Get the API object.
    var fotorama = $fotoramaDiv.data('fotorama');
       var total=fotorama.size;
       var cu=fotorama.activeIndex;

    // 3. Inspect it in console.
       
   
       
       
       
       $('.fotorama')
        // Listen to the events
        .on('fotorama:ready ' +           // Fotorama is fully ready
            'fotorama:show ' +            // Start of transition to the new frame
            'fotorama:showend ' +         // End of the show transition
            'fotorama:load ' +            // Stage image of some frame is loaded
            'fotorama:error ' +           // Stage image of some frame is broken
            'fotorama:startautoplay ' +   // Slideshow is started
            'fotorama:stopautoplay ' +    // Slideshow is stopped
            'fotorama:fullscreenenter ' + // Fotorama is fullscreened
            'fotorama:fullscreenexit ' +  // Fotorama is unfullscreened
            'fotorama:loadvideo ' +       // Video iframe is loaded
            'fotorama:unloadvideo',       // Video iframe is removed
            function (e, fotorama, extra) {
           
              
             
           
            var text = (fotorama.activeIndex+1) + " of " + total;

       
            $('#index2').text(text);
            }
        )
        // Initialize fotorama manually
        .fotorama();
 
  });
if($( window ).width()>400)
	{ $('#contact1').scrollToFixed( {
        bottom: 0,
        limit: $('#contact1').offset().top - $('#contact1').outerHeight(true) + 400,
        
    });
	}
	else{ $('#contact1').scrollToFixed( {
        bottom: 0,
        limit: $('#contact1').offset().top - $('#contact1').outerHeight(true) + 200,
        
    });}
   
	
	
	
    var scrollButton=$("#scroll-top");
	//on window scrolling
    var $mainSection=$('.test');
	
	var h=$mainSection.height();
	var x=$( window ).height()-300;
	
	console.log('.test',h);
	
  $(window).scroll(function () {
		
      if($(this).scrollTop()>= h-x ) {
			$('#conth').css('display', 'block');
		  $('.back1').css('display', 'block');
		  console.log(' sereen555  ',h-x);
		}
		else{
			$('#conth').css('display', 'none');
			$('.back1').css('display', 'none');
			console.log(' sereennone');
		}
		
   
 });
	});
	
	
   
/*$(function() {  
    $(".path-way").niceScroll({
		    cursorwidth: "6px", // cursor width in pixel (you can also write "5px")

	});
	
	
	    $('#contact1').scrollToFixed( {
        bottom: 0,
        limit: $('#contact1').offset().top - $('#contact1').outerHeight(true) + 200,

    });
	
	
});*/