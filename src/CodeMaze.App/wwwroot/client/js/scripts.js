(function($) {
	"use strict";

/* -------------------------------------------------------------------------*
 * 						GET BASE URL		
 * -------------------------------------------------------------------------*/
			
function getBaseURL() {
    var url = location.href;  // entire url including querystring - also: window.location.href;
    var baseURL = url.substring(0, url.indexOf('/', 14));


    if (baseURL.indexOf('http://localhost') != -1) {
        // Base Url for localhost
        var url = location.href;  // window.location.href;
        var pathname = location.pathname;  // window.location.pathname;
        var index1 = url.indexOf(pathname);
        var index2 = url.indexOf("/", index1 + 1);
        var baseLocalUrl = url.substr(0, index2);

        return baseLocalUrl + "/";
    }
    else {
        // Root Url for domain name
        return baseURL;
    }

}				

/* -------------------------------------------------------------------------*
 * 						CONTACT FORM EMAIL VALIDATION	
 * -------------------------------------------------------------------------*/
			
	function validate(form) {
		
		var errors = "";
		var reason_name = "";
		var reason_mail = "";
		var reason_message = "";

		reason_name += validateName('ot-contact-name-input',form);
		reason_mail += validateEmail('ot-contact-mail-input',form);
		reason_message += validateMessage('ot-contact-message-input',form);


		if (reason_name != "") {
			jQuery(".ot-contact-name-error .ot-error-text",form).text(reason_name);
			jQuery(".ot-contact-form-user input",form).addClass("error");
			jQuery(".ot-contact-name-error",form).fadeIn(1000);
			errors = "Error";
		} else {
			jQuery(".ot-comment-form-user input",form).removeClass("error");
			jQuery(".ot-contact-name-error",form).css({ 'display': 'none'});
		}


		if (reason_mail != "") {
			jQuery(".ot-contact-mail-error .ot-error-text",form).text(reason_mail);
			jQuery(".ot-contact-form-email input",form).addClass("error");
			jQuery(".ot-contact-mail-error",form).fadeIn(1000);
			errors = "Error";
		} else {
			jQuery(".ot-contact-form-email input",form).removeClass("error");
			jQuery(".ot-contact-mail-error",form).css({ 'display': 'none'});
		}
		
		if (reason_message != "") {
			jQuery(".ot-contact-message-error .ot-error-text",form).text(reason_message);
			jQuery(".ot-contact-form-message textarea",form).addClass("error");
			jQuery(".ot-contact-message-error",form).fadeIn(1000);
			errors = "Error";
		} else {
			jQuery(".ot-contact-form-message textarea",form).removeClass("error");
			jQuery(".ot-contact-message-error",form).css({ 'display': 'none'});
		}
		
		if (errors != ""){
			return false;
		} else {
			return true;
		}
		
		//document.getElementById("writecomment").submit(); return false;
	}


	

	function implode( glue, pieces ) {  
		return ( ( pieces instanceof Array ) ? pieces.join ( glue ) : pieces );  
	} 	
	

/* -------------------------------------------------------------------------*
 * 						SUBMIT CONTACT FORM	
 * -------------------------------------------------------------------------*/
 	jQuery(document).ready(function(jQuery){
		var adminUrl = ot.adminUrl;

		jQuery('.ot-submit-button').on("click", function(){

			var form = jQuery(this).parent().parent().parent();
			if ( validate(form) === true ) {
				var str = form.serialize();
				jQuery.ajax({
					url:adminUrl,
					type:"POST",
					data:"action=orange_themes_contact_form&"+str,
					success:function(results) {	
						console.log(results);
						jQuery(".contact-success-block", form.parent()).css({ 'display': 'block'});
						jQuery(form).css({ 'display': 'none'});

					}
				});
				
			}

			return false;
		});
	});



/* -------------------------------------------------------------------------*
 * 						ADD CLASS TO COMMENT BUTTON					
 * -------------------------------------------------------------------------*/
jQuery(document).ready(function(){
	jQuery('#writecomment form.comment-form').addClass('contact-form-content');
	jQuery('.comment-reply-link').addClass('zanevn-button read-more-button');
	
});



	
function removeHash () { 
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
        history.pushState("", document.title, loc.pathname + loc.search);
    else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}

 
	/* -------------------------------------------------------------------------*
	 * 								GALLERY	LIGHTBOX
	 * -------------------------------------------------------------------------*/
	 
	jQuery(".light-show").on("click", function(){
		var newWindowWidth = jQuery(window).width();
		var galID = jQuery(this).attr('data-id');
		var next = parseInt(jQuery(this).find("img").attr('data-id'));

		if(newWindowWidth >= 767) { 
			if(!next) {
				next=1;
			}
			
			zanevn_orange_themes_lightbox_gallery(galID,next);		

			
			return false;
		}
		return false;

	});
	 
	function zanevn_orange_themes_lightbox_gallery(galID,next) {
		jQuery("h2.light-title").html("Loading..");
		jQuery(".lightbox").css('display', 'block');
		jQuery(".lightcontent-loading").fadeIn('slow');
		jQuery(".lightcontent").css('display', 'none');

		jQuery('.lightcontent').load(ot.themeUrl+'/includes/_lightbox-gallery.php', function() {
			window.location.hash = galID;
			

			var prev = next-1;
			
			var ID = galID.replace(/[^0-9]/g, '');

			jQuery(".ot-slide-item").attr('id',ID);
			jQuery.ajax({
				url:ot.adminUrl,
				type:"POST",
				data:"action=zanevn_orange_themes_lightbox_gallery&gallery_id="+ID+"&next_image="+next,
				dataType: 'json',
				success:function(results) {
				
					jQuery(".ot-gallery-image").attr("src", results['next']);
					jQuery(".ot-gallery-image").css("max-height", jQuery(window).height()+"px");


					jQuery(".ot-gallery-image").load(function(){
						jQuery(".lightcontent-loading").css('display', 'none');
						jQuery("body").css('overflow', 'hidden');
						jQuery(".lightbox .lightcontent").delay(200).fadeIn('slow');
						jQuery(".light-title").html("");
						jQuery(".ot-light-title").html(results['title']);
						jQuery("#ot-lightbox-content").html(results['content']);
						jQuery(".ot-gallery-image").attr('alt', results['title']);
								


						   setTimeout(function(){

							// Photo Gallery thumbs navigation
							  jQuery("button", ".photo-gallery-thumbs").on("click", function(){
							   var thisel = jQuery(this),
							    marginHandler = thisel.siblings(".photo-gallery-thumbs-inner").children(".item").eq(0),
							    current = thisel.siblings(".photo-gallery-thumbs-inner").data("thumbs-start-from");

							   if(thisel.hasClass("photo-gallery-nav-left")){
							    if(current+216 >= 0){
							     current = 0;
							     thisel.siblings(".photo-gallery-thumbs-inner").removeClass("not-first").removeClass("is-last");
							    }else{
							     current = current+216;
							     thisel.siblings(".photo-gallery-thumbs-inner").removeClass("is-last");
							    }
							   }else
							   if(thisel.hasClass("photo-gallery-nav-right")){
							    var maxsize = (thisel.siblings(".photo-gallery-thumbs-inner").children(".item").size()*(98+8))-parseInt(jQuery(".photo-gallery-thumbs-inner", ".photo-gallery-thumbs").width(), 10);
							    
							    if(current-216 <= (-1)*maxsize){
							     if(maxsize > 0){
							      current = (-1)*maxsize;
							      thisel.siblings(".photo-gallery-thumbs-inner").addClass("is-last");
							     }
							    }else {
							     current = current-216;
							     thisel.siblings(".photo-gallery-thumbs-inner").addClass("not-first").removeClass("is-last");
							    }
							   }
							   
							   marginHandler.css("margin-left", current+"px");
							   thisel.siblings(".photo-gallery-thumbs-inner").data("thumbs-start-from", current);
							   return false;
							  });
						   }, 800);
	
 				
 							

					});


					jQuery.each(results.thumbs, function(k,v) {
						//var li = '<li rel="'+(k+1)+'"  data-nr="'+(k+1)+'"><a href="javascript:;" rel="'+(k+1)+'" class="gal-thumbs g-thumb" data-nr="'+(k+1)+'"><img src="'+v+'" alt=""/></a></li>';	
						var li = '<a href="javascript:;" rel="'+(k+1)+'" class="item gal-thumbs g-thumb" data-nr="'+(k+1)+'"><img src="'+v+'" alt="" width="90px" height="90px"/></a>';	
						jQuery('#ot-lightbox-thumbs').append(li);

					});


					jQuery(".ot-last-image").attr('data-last', results['total']);
					jQuery(".numbers span.total").html(results['total']);
					jQuery("#ot-gal-cat").html(results['cat']);
					jQuery("#ot-gal-cat").attr("style", "color:"+results['color']+";");
					jQuery("#ot-gal-cat").attr("href", results['cat_url']);

					jQuery(".ot-gallery-image").attr('data-id', next);
					if(results['total']>=2) {
						jQuery(".next-image").attr('data-next', next+1);
						jQuery(".gallery-full-photo .next").attr('rel', next+1);
					} else {
						jQuery(".next-image").attr('data-next', next);
						jQuery(".gallery-full-photo .next").attr('rel', next);
					}
					jQuery(".gallery-full-photo .prev").attr('rel', prev);
					
					OT_gallery.a_click(ot.adminUrl, ID);



				}
			});
			


		});

	
	}  


		var type = window.location.hash.replace(/[^a-z]/g, '');
		if(type=="gallery") {
			zanevn_orange_themes_lightbox_gallery(window.location.hash,1);

		}


	
/* -------------------------------------------------------------------------*
 * 								addLoadEvent
 * -------------------------------------------------------------------------*/
	function addLoadEvent(func) {
		var oldonload = window.onload;
		if (typeof window.onload != 'function') {
			window.onload = func;
		} else {
			window.onload = function() {
				if (oldonload) {
					oldonload();
				}
			func();
			}
		}
	}
	        
    /*---------------------------------
	  HIDE WOO EMPTY CART
	---------------------------------*/


	if ( $.cookie( "woocommerce_items_in_cart" ) > 0 ) {
		$('.hide_cart_widget_if_empty').closest('.widget, .panel').show();
	} else {
		$('.hide_cart_widget_if_empty').closest('.widget, .panel').hide();
	}

	jQuery('body').bind('adding_to_cart', function(){
	    jQuery(this).find('.hide_cart_widget_if_empty').closest('.widget, .panel').fadeIn();
	});



	
})(jQuery);