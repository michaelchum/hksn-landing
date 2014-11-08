/*----------------------------------------
Tabs - Sponsors:Discounts
------------------------------------------*/
$('#js-tabs > div').hide();
$('#js-tabs div:first').show();
$('#js-tabs ul li:first').addClass('current');
 
$('#js-tabs ul li a').click(function(){
	$('#js-tabs ul li').removeClass('current');
	$(this).parent().addClass('current');
	var currentTab = $(this).attr('href');
	$('#js-tabs > div').hide();
	$(currentTab).show();
	return false;
});

//Fade Ins
$(".js-tab-services").click(function () {
	$("#tab-services img").addClass("kf-roll-in")
	$("#tab-services").addClass("kf-fade-in")
});
$(".js-tab-peeps").click(function () {
	$("#tab-peeps img").addClass("kf-fade-in")
	$("#tab-peeps").addClass("kf-fade-in")
});

/*----------------------------------------
Sticky Nav - on scroll
------------------------------------------*/
$(window).scroll(function() {
  if ($("header.mast").offset().top > 0) {
        $("header.mast").addClass("sticky")
      } else {
        $("header.mast").removeClass("sticky")
      }
});

/*----------------------------------------
Navigation and Scrolling
------------------------------------------*/
if( $(window).width() < 568 ){
	top_offset = -385;
} else {
	top_offset = -59;			
}

$('header, #copyright, .mobileNav, #mobileNav, .slider').localScroll({
	offset: {left: 0, top: top_offset}	
});

$(".scroll_to_top").click(function() {$.scrollTo($("body").position().top, 800)});
$(".scroll_to_home").click(function() {$.scrollTo($("body").position().top, 300)});
$(".scroll_to_bottom").click(function() {$.scrollTo($("body").position().top, 800)});
$(".js-contact-us").click(function() {$.scrollTo($("body").position().top, 1100)});


/*----------------------------------------
Scroll To Top
------------------------------------------*/
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.scroll_to_top').fadeIn(800);
	} else {
		$('.scroll_to_top').fadeOut();
	}
});

/*----------------------------------------
Scroll to anchor on new page load
------------------------------------------*/
 $(document).ready(function() {
        if (window.location.hash) {
            setTimeout(function() {
                $('html, body').scrollTop(0).show();
                $('html, body').animate({
                    scrollTop: $(window.location.hash).offset().top-50
                    }, 2000, 'easeInOutQuad')
            }, 2);
        }
    });


/*----------------------------------------
Instagram
------------------------------------------*/
$(function() {
    $.ajax({
    	type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/300619084/media/recent/?access_token=300619084.bd681d9.ac977969943b4e7e9a8077c0fd936bef",
        success: function(data) {
            for (var i = 0; i < 12; i++) {
        $(".instagram").append("<li class='instagram-placeholder'><a target='_blank' href='" + data.data[i].link +"'><img class='instagram-image' src='" + data.data[i].images.low_resolution.url +"' /></a></li>");   
      		}                        
        }
    });
});

/*----------------------------------------
Portfolio Image Hovers	
------------------------------------------*/
$(function() {
$('li.folio-item a').hover(over, out);
});

function over(event) {
$('.folio-item-hover', this).fadeIn(300);
$('.folio-item-hover', this).css("display", "normal");
}

function out(event) {
$('.folio-item-hover', this).fadeOut(300);
}

/*----------------------------------------
Slider
------------------------------------------*/
$(function() {
				
if ($.fn.cssOriginal!=undefined)
$.fn.css = $.fn.cssOriginal;

$('.slider').sosweet(				{	
	delay:8000,												
	startwidth:960,
	startheight:690,
	onHoverStop:"on",						
	navigationType:"none",					
	touchenabled:"on",						
	fullWidth:"on",
	navOffsetHorizontal:0,
	navOffsetVertical:-25,
	shadow:0,												
	});	
});

/*----------------------------------------
Contact Panel Slide
------------------------------------------*/
$(".js-contact-us").click(function () {
$("#js-slide-contact").addClass("absolute");
}); 

$(".js-back").click(function () {
$("#js-slide-contact").removeClass("absolute");
}); 

var $w, 
	winHeight, 
	winWidth,
	pos,
	scroll = {
		paneOffset : 0,
		learn : {
			call : false,
			current : '',
			init : function(el){
				if (this.current != el) {
					this.reset();
				}
				this.current = el;		
			},
		},

		contact : {
			call : false,
			init : function(){
				el = $('#js-slide-contact');
				l = (!this.call ? 0 : 100);
				this.call = (l == 0 ? true : false);
				el.animate({left:l+'%'}, 550, 'easeInOutCubic', function(){

					$('#js-slide-contact .col div').hide();				

				});
			}
		},
}
$(function() { 
// Contact Panel Slide Back
	$('.js-contact-us, .js-back').click(function(){
		scroll.contact.init();
		return false;
	});
});

/*----------------------------------------
Drop Down - Blog Cats
------------------------------------------*/
function DropDown(el) {
	this.dd = el;
	this.initEvents();
}
DropDown.prototype = {
	initEvents : function() {
		var obj = this;
		obj.dd.on('click', function(event){
			$(this).toggleClass('active');
			event.stopPropagation();
		});	
	}
}

$(function() {
	var dd = new DropDown( $('.js-dropdown-cats') );
	$(document).click(function() {
		// all dropdowns
		$('.wrapper-dropdown').removeClass('active');
	});
});

/*----------------------------------------
Blog - Comments Toggle
------------------------------------------*/
$('.js-show').hide();  
$(".js-expand-comments").click(function () {
	$(".js-show").slideToggle('200', "easeInSine");
}); 