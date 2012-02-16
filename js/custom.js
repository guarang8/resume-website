// CUFON REPLACEMENT
		
	
		
		//when the document is ready...
		$(document).ready(function() {
				
			Cufon.replace('h1, h2, h3, span.date, #footer p.footer_menu, .contact_head');						
			
		//   MODAL WINDOW SCRIPT
	    
		// when user clicks on conatct link, show modal window
		$('.contact_link').click(function(){				
				$('body').append('<div class="overlay hide"></div>');							
	    		$('.overlay').fadeTo('fast', .8);
	    		$('#contact').fadeIn('normal');
	    			
				return false;
		});
		
		// when user clicks on 'close' button or on overlay, hide modal window
		$('.close, .overlay').live('click', function(){
			$('#contact').fadeOut('normal');
			$('.overlay').fadeTo('fast', 0);	
			$('.overlay').remove();
			
			return false		
		});
		
	
		// when user clicks on 'esc' key on keyboard, hide modal window
		$(document).keyup(function(e) {  
  		if(e.keyCode == 27) {  
   		$('#contact').fadeOut('slow');
			$('.overlay').fadeTo('fast', 0);	
			$('.overlay').remove(); 
 		 }  
		});  
			
					
		//SCROLL TO TOP SCRIPT (LINK IN THE FOOTER)
		
			$('.top').click(function(){
				$('html, body').animate({scrollTop:0}, 'slow');
			});
			
	
			//IMAGE ROLLOVER SCRIPT
			
			//add span that will be shown on hover to our gallery items
			$("#portfolio li a.image").append('<span class="image_hover"></span>'); //add span to images
			$("#portfolio li a.video").append('<span class="video_hover"></span>'); //add span to videos
			$("#portfolio li a.link").append('<span class="link_hover"></span>'); //add span to links
			
			$('portfolio li a span').css('opacity', '0').css('display', 'block') //span opacity = 0 
			
			// show / hide span on hover
			$("#portfolio li a").hover(
 			 function () {
   				 $(this).find('.image_hover, .video_hover, .link_hover').stop().fadeTo('slow', .75);
  			}, 
			function () {
			    $('.image_hover, .video_hover, .link_hover').stop().fadeOut('slow', 0);
			});

		
						
			// CONTACT FORM SCRIPTS
			
			//set variables
			var nameVal = $("#form_name").val();
			var emailVal = $("#form_email").val();
			var messageVal = $("#form_message").val();
					

			//if name field is empty, show label in it
			if(nameVal == '') {
			$("#form_name").parent().find('label').css('display', 'block');	
			}
			
			//if email field is empty, show label in it
			if(emailVal == '') {
			$("#form_email").parent().find('label').css('display', 'block');	
			}
			
			
			//if message field is empty, show label in it
			if(messageVal == '') {
			$("#form_message").parent().find('label').css('display', 'block');	
			}

					
			//hide labels on focus		
			$('#contact_form input, #contact_form textarea').focus(function(){
				$(this).animate({ backgroundColor: "#232323", borderBottomColor: "#616161", borderTopColor: "#616161", borderLeftColor: "#616161", borderRightColor: "#616161"}, 500);
				$(this).parent().find('label').fadeOut('fast');		
			});
			
			//show labels when field is not focused - only if there are no text
			$('#contact_form input, #contact_form textarea').blur(function(){
				$(this).animate({ backgroundColor: "#1b1b1b", borderBottomColor: "#333333", borderTopColor: "#333333", borderLeftColor: "#333333", borderRightColor: "#333333"}, 500);
			
				var currentInput = 	$(this);	
				if (currentInput.val() == ""){
	   			 $(this).parent().find('label').fadeIn('fast');
	 			 }

			});		
			
			
				
			// FORM HANDLING SCRIPT - WHEN USER CLICKS "SUBMIT"
			$("#contact_form").submit(function(){		
						   				 		
				// hide all error messages
				$(".error").hide();
				
				// remove "error" class from text fields
				$("#contact_form input, #contact_form textarea").focus(function() {
		 			$(this).removeClass('error_input');
					});
				
				// remove error messages when user starts typing		
				$("#contact_form input, #contact_form textarea").keypress(function() {
		 			$(this).parent().find('span').fadeOut();	
					});
				
				
				// set variables
				var hasError = false;
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				
				
				// validate "name" field
				var nameVal = $("#form_name").val();
				if(nameVal == '') {
					$("#form_name")
					.after('<span class="error">Please enter your name</span>')
					.addClass('error_input')
					.animate({ borderBottomColor: "red", borderTopColor: "red", borderLeftColor: "red", borderRightColor: "red"}, 500);
				  
					hasError = true;
				}
				
			
			
				// validate "e-mail" field - andd error message and animate border to red color on error
				var emailVal = $("#form_email").val();
				if(emailVal == '') {
					$("#form_email")
					.after('<span class="error">Please enter your e-mail</span>')
					.addClass('error_input')
					.animate({  borderBottomColor: "red", borderTopColor: "red", borderLeftColor: "red", borderRightColor: "red"}, 500);
					
					hasError = true; 
						
				} else if(!emailReg.test(emailVal)) {	
					$("#form_email")
					.after('<span class="error">Please provide a valid e-mail</span>')
					.addClass('error_input')
					.animate({ backgroundColor: "#232323", borderBottomColor: "red", borderTopColor: "red", borderLeftColor: "red", borderRightColor: "red"}, 500);;
					
					hasError = true;
				}
				
			
				// validate "message" field
				var messageVal = $("#form_message").val();
				if(messageVal == '') {
					$("#form_message")
					.after('<span class="error comment_error">Please enter your message</span>')
					.addClass('error_input')
					.animate({borderBottomColor: "red", borderTopColor: "red", borderLeftColor: "red", borderRightColor: "red"}, 500);
					hasError = true;
				}
				
		                // if the are errors - return false
		                if(hasError == true) { return false; }
		            
				// if no errors are found - submit the form with AJAX
				if(hasError == false) {
					
				var dataString = $('#contact_form').serialize();
		
					//hide the submit button and show the loader image	
					$("#form_submit").fadeOut('fast', function () {
					$('#contact_form').append('<img src="images/ajax-loader.gif" class="loaderIcon" alt="Loading..." />'); 
					});
					       
					
				// make an Ajax request
		        $.ajax({
		            type: "POST",
		            url: "http://denoizzed.com/templates/CV/typography/black//php/contact-send.php",
		            data: dataString,
		            success: function(){ 
		           
		          // on success fade out the form and show the success message
		          $('#contact_form').fadeOut('fast');
		           $('.success').fadeIn();    	
		            }
		        }); // end ajax
		
				 return false; 
		
				}		
			});		
			
		// TOOLTOP PLUGIN
    	$(".social_list a").tipTip(
    			{edgeOffset: 5, 
    			defaultPosition: "right"
    				
    			});
		
		// QUICK OPERA CSS FIX
				    			
			if ($.browser.opera) {
    			$('.container').css('padding-bottom', '44px');}				

				
		// QUICK SAFARI CSS FIX
																	
    		var ua = navigator.userAgent.toLowerCase();
			if (ua.indexOf('safari/') != -1){
			$('.container').css('padding-bottom', '38px');		
			}	
    			
	});