var devon_text = "Born in Annapolis, MD and raised in Easton, PA, Devon grew up living and breathing martial arts. He achieved his Second Degree Black Belt before moving to Lewisburg to study Computer Science and Engineering at Bucknell University. It was there he met and fell in love with Lacey during her First-Year Orientation. He later conducted Human-Computer Interaction research at Bucknell and interned at Amazon Robotics. After graduation, he moved to Boston to work full time for Amazon Robotics and later Google as a software engineer. He continues to practice and instruct martial arts and runs an online advertisement company in his free time.";
var lacey_text = "Born and raised in Monongahela, PA, Lacey was an active dancer and volleyball player. She moved to Lewisburg to study Biomedical Engineering at Bucknell University where she first met Devon. She conducted research at Clemson University and interned for the Children’s Hospital of Philadelphia before graduating and moving to Boston. She now works as a Data Scientist for Aetion and spends her free time attending Barre classes, baking treats for Devon and her coworkers, and exploring small New England towns. She’s excited to have all of the important people in her life in one room to help celebrate her and Devon’s love.";

var lacey_m_text = "Lacey’s best friend since birth! They met when they were babies in strollers and shared dance lessons, birthday parties, and volleyball practices together.";
var mike_text = "Devon and Mike met during their Giant Grocery Store employee orientation. Their teenage cashier hijinks led to a lifelong, unwavering friendship.";
var mae_text = "Lacey met Mae because they were often mistaken for one another around Bucknell’s campus. Turns out, they had a lot more in common than a name and a research lab.";
var robert_text = "Cousin by birth but brother in life, Robert has been there for Devon every step of the way as a better friend than anyone could ever ask for.";
var danielle_text = "Lacey met Danielle in her Biomedical Engineering classes and they bonded over much more than lab reports.";
var andy_text = "Devon and Andy instantly became friends in college, spending as many hours doing calculus homework as playing Diablo III, the latter which continues to this day.";
var lizzi_text = "Lacey met Lizzi at Bucknell’s Admitted Students Day and became fast friends while sharing a freshman hall and Biomedical Engineering classes.";
var sam_text = "Sam completes the trio of Bucknell friends, having met Devon during their semester-long soiree into collegiate rowing and remained best friends ever since.";
var nicole_text = "Lacey is so excited to gain Nicole as a sister and join the family on the wedding day!";
var elliot_text = "The brother Devon never had, Elliot has shown what it means to be not only an amazing Brother-In-Law but also a friend.";
var kodie_text = "Lacey and Kodie immediately became inseparable during the transition from elementary schools to middle school.";

document.getElementById('lacey-text').innerHTML = lacey_text;
document.getElementById('devon-text').innerHTML = devon_text;

AOS.init({
	duration: 800,
	easing: 'slide'
});

(function($) {
	"use strict";

	$(window).stellar({
	    responsive: true,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
  	});

	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
    $.Scrollax();

    // Burger Menu
	var burgerMenu = function() {
		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}			
		});
	};
	burgerMenu();

	var onePageClick = function() {
		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    });
		});
	};
	onePageClick();	

	var set_invisible = function(){
		var flavor_town = document.getElementsByClassName("flavor-town");
		for (var i=0; i<flavor_town.length; i++) {
			flavor_town[i].hidden = true;
		}
	}

	$('.carousel-friends').on('changed.owl.carousel', function (e) {
    if (("current: ",e.item.index == 0)){
    	set_invisible();
    	document.getElementById('flavor-town-1').hidden = false;
    	document.getElementById('flavor-town-1').innerHTML = lacey_m_text;
    }
    if (("current: ",e.item.index == 1)){
		set_invisible();
    	document.getElementById('flavor-town-2').hidden = false;
    	document.getElementById('flavor-town-2').innerHTML = mike_text;
    }
    if (("current: ",e.item.index == 2)){
		set_invisible();
    	document.getElementById('flavor-town-3').hidden = false;
        document.getElementById('flavor-town-3').innerHTML = mae_text;
    }
    if (("current: ",e.item.index == 3)){
		set_invisible();
    	document.getElementById('flavor-town-4').hidden = false;
        document.getElementById('flavor-town-4').innerHTML = robert_text;
    }
    if (("current: ",e.item.index == 4)){
		set_invisible();
    	document.getElementById('flavor-town-5').hidden = false;
        document.getElementById('flavor-town-5').innerHTML = danielle_text;
    }
    if (("current: ",e.item.index == 5)){
		set_invisible();
    	document.getElementById('flavor-town-6').hidden = false;
        document.getElementById('flavor-town-6').innerHTML = andy_text;
    }
    if (("current: ",e.item.index == 6)){
		set_invisible();
    	document.getElementById('flavor-town-7').hidden = false;
        document.getElementById('flavor-town-7').innerHTML = lizzi_text;
    }
    if (("current: ",e.item.index == 7)){
		set_invisible();
    	document.getElementById('flavor-town-8').hidden = false;
        document.getElementById('flavor-town-8').innerHTML = sam_text;
    }
    if (("current: ",e.item.index == 8)){
		set_invisible();
    	document.getElementById('flavor-town-9').hidden = false;
        document.getElementById('flavor-town-9').innerHTML = nicole_text;
    }
    if (("current: ",e.item.index == 9)){
		set_invisible();
    	document.getElementById('flavor-town-10').hidden = false;
        document.getElementById('flavor-town-10').innerHTML = elliot_text;
    }
    if (("current: ",e.item.index == 10)){
		set_invisible();
    	document.getElementById('flavor-town-11').hidden = false;
        document.getElementById('flavor-town-11').innerHTML = kodie_text;
    }
})

	var carousel = function() {
		$('.carousel-friends').owlCarousel({
			autoplay: false,
			autoHeight: true,
			center: true,
			loop: false,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 6
				}
			}
		});

		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		$this.find('.dropdown-menu').removeClass('show');
	});

	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');
			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var counter = function() {
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
			}
		} , { offset: '95%' } );
	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
  	});

	function makeTimer() {

		var endTime = new Date("08 August 2020 16:30:00 GMT-05:00");			
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }

		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");		

	}
	setInterval(function() { makeTimer(); }, 1000);

})(jQuery);
