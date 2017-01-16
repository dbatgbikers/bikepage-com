jQuery(function($) {'use strict',
	
	//Countdown js
	 $("#countdown").countdown({
			date: "10 july 2017 12:00:00",
			format: "on"
		},
		
		function() {
			// callback function
		});
	

	
	//Scroll Menu

	function menuToggle()
	{
		var windowWidth = $(window).width();

		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>405 ){
					$('.main-nav').addClass('fixed-menu animated slideInDown');
				} else {
					$('.main-nav').removeClass('fixed-menu animated slideInDown');
				}
			});
		}else{
			
			$('.main-nav').addClass('fixed-menu animated slideInDown');
				
		}
	}

	menuToggle();
	
	
	// Carousel Auto Slide Off
	$('#event-carousel, #twitter-feed, #sponsor-carousel ').carousel({
		interval: false
	});


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	$( window ).resize(function() {
		menuToggle();
	});

	$('.main-nav ul').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 900,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});


	<!-- carousel -->
	$(document).ready(function() {
	  $("#owl-brand").owlCarousel({
	    autoPlay: 3000,
	    items : 1,
		itemsDesktop : [1199,1],
	    itemsDesktopSmall : [979,2],
		navigation: false,
	  });
	});

	<!-- Google Map -->
	$('#mapwrap').click(function () {
		$('#mapwrap iframe').css("pointer-events", "auto");
	});

	$( '#mapwrap').mouseleave(function() {
	  $('#mapwrap iframe').css("pointer-events", "none"); 
	});

	$("#footer_content").load("../footer.html");

	$.ajax({
		url: '/json/event_data.json',
		type: 'GET',
		success: function(data){
			htmldata = create_event_html(data.data);
			var ni = document.getElementById('body_content');
			ni.innerHTML += htmldata;
		}
	});

	function create_event_html( raw_data ){
		var tempHtml = '';
		for(var i=0 ; i<raw_data.length; i++){
			tempHtml += '<div class="events">';
			tempHtml += '<a href="'+raw_data[i].event_url+'?event_id='+raw_data[i].event_id+'">';
			tempHtml += '<img src="'+raw_data[i].event_image+'">';
			tempHtml += '<div class="ride_name">'+raw_data[i].event_name+'</div></div>';
		}
		var htmldata = tempHtml;

		return htmldata;
	}

	$(".events").click(function() {
	  window.location = $(this).find("a").attr("href"); 
	  return false;
	});

	$(".know_us").click(function() {
	  window.location = $(this).find("a").attr("href"); 
	  return false;
	});

});


// Google Map Customization
(function(){

	var map;

	map = new GMaps({
		el: '#gmap',
		lat: 43.04446,
		lng: -76.130791,
		scrollwheel:false,
		zoom: 16,
		zoomControl : false,
		panControl : false,
		streetViewControl : false,
		mapTypeControl: false,
		overviewMapControl: false,
		clickable: false
	});

	var image = 'images/map-icon.png';
	map.addMarker({
		lat: 43.04446,
		lng: -76.130791,
		icon: image,
		animation: google.maps.Animation.DROP,
		verticalAlign: 'bottom',
		horizontalAlign: 'center',
		backgroundColor: '#3e8bff',
	});


	var styles = [ 

	{
		"featureType": "road",
		"stylers": [
		{ "color": "#b4b4b4" }
		]
	},{
		"featureType": "water",
		"stylers": [
		{ "color": "#d8d8d8" }
		]
	},{
		"featureType": "landscape",
		"stylers": [
		{ "color": "#f1f1f1" }
		]
	},{
		"elementType": "labels.text.fill",
		"stylers": [
		{ "color": "#000000" }
		]
	},{
		"featureType": "poi",
		"stylers": [
		{ "color": "#d9d9d9" }
		]
	},{
		"elementType": "labels.text",
		"stylers": [
		{ "saturation": 1 },
		{ "weight": 0.1 },
		{ "color": "#000000" }
		]
	}

	];

	map.addStyle({
		styledMapName:"Styled Map",
		styles: styles,
		mapTypeId: "map_style"  
	});

	map.setStyle("map_style");
}());