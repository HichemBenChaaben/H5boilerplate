/* GLOBALS */
var CHAIN_ANIM_DURATION = 2;
var HOME_ANIM_DELAY = 1;
var ANISCROLL_START_SCROLL_Y_PRECENT = 250;
var HOME_SCROLL_SPEED = 40;
var SNAP_HOME_AT_Y = 400;

var isAniscroll = false;
var aniscroll;

// home animations
var tLogo1;
var tLogo2;
var tMenu1;
var tMenu2;

var scrollcount = 0;

function init() {
	aniscroll = new Aniscroll(config);
	$(window).scroll(function() {
		if($(window).scrollTop() >= ($(document).height()-$(window).height())) {
			$("#overlay-logo1:not(:animated):visible").fadeOut();
		} else {
			$("#overlay-logo1:not(:animated):not(:visible)").fadeIn();
		}
	})
}

function animateChainsOut() {
	var winW = 1024, winH = 768;
	var winScroll = 0;
	if (document.body && document.body.offsetWidth) {
	 winW = document.body.offsetWidth;
	 winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth ) {
	 winW = document.documentElement.offsetWidth;
	 winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
	 winW = window.innerWidth;
	 winH = window.innerHeight;
	}
	var dist = (winW > winH ? winW : winH) * 0.5;
	
	if(tChainLeftX) {
		tChainLeftX.stop();
		tChainLeftY.stop();
		tChainRightX.stop();
		tChainRightY.stop();
	}
	
	// CHAIN LEFT
	var tChainLeftX = new Tween(document.getElementById('home-chain-left').style, 'marginLeft', Tween.regularEaseOut, -548, -382 - dist * 1.5, CHAIN_ANIM_DURATION, 'px').start();
	var tChainLeftY = new Tween(document.getElementById('home-chain-left').style, 'marginTop', Tween.regularEaseOut, -263, -200 + dist, CHAIN_ANIM_DURATION, 'px').start();
	
	// CHAIN RIGHT
	var tChainRightX = new Tween(document.getElementById('home-chain-right').style, 'marginRight', Tween.regularEaseOut, 0, -dist * 1.5, CHAIN_ANIM_DURATION, 'px').start();
	var tChainRightY = new Tween(document.getElementById('home-chain-right').style, 'marginTop', Tween.regularEaseOut, 0, -dist, CHAIN_ANIM_DURATION, 'px').start();
}

function animateChainsIn() {
	var winW = 1024, winH = 768;
	var winScroll = 0;
	if (document.body && document.body.offsetWidth) {
	 winW = document.body.offsetWidth;
	 winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth ) {
	 winW = document.documentElement.offsetWidth;
	 winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
	 winW = window.innerWidth;
	 winH = window.innerHeight;
	}
	
	if(tChainLeftX) {
		tChainLeftX.stop();
		tChainLeftY.stop();
		tChainRightX.stop();
		tChainRightY.stop();
	}
	
	// CHAIN LEFT
	var dist = (winW > winH ? winW : winH) * 0.5;
	var tChainLeftX = new Tween(document.getElementById('home-chain-left').style, 'marginLeft', Tween.regularEaseOut, -382 - dist * 1.5, -548, CHAIN_ANIM_DURATION, 'px').start();
	var tChainLeftY = new Tween(document.getElementById('home-chain-left').style, 'marginTop', Tween.regularEaseOut, -200 + dist, -263, CHAIN_ANIM_DURATION, 'px').start();
	
	// CHAIN RIGHT
	var tChainRightX = new Tween(document.getElementById('home-chain-right').style, 'marginRight', Tween.regularEaseOut, -dist * 1.5, 0, CHAIN_ANIM_DURATION, 'px').start();
	var tChainRightY = new Tween(document.getElementById('home-chain-right').style, 'marginTop', Tween.regularEaseOut, -dist, 0, CHAIN_ANIM_DURATION, 'px').start();
}

function bindImageLoad() {
	var self = $(this);
	self.one("load",function(){
		self.ifixpng();
	});
	if(self.complete) {
		self.trigger("load");
	}
}

function setAniscroll() {
	if(isAniscroll) return;
	hideOverlay();
	isAniscroll = true;
	animateChainsOut();
	window.scrollTo(0, 0);
	setTimeout('aniscroll.run(); $("img").each(bindImageLoad); animateScrollToStart();', HOME_ANIM_DELAY * 1000);
	
}

function setHome() {
	if(!isAniscroll) return;
	showOverlay();
	isAniscroll = false;
	aniscroll.dispose();
	animateChainsIn();
}

function showOverlay() {
	document.getElementById('overlay-logo2').style.visibility = 'visible';
	document.getElementById('overlay-footer').style.visibility = 'visible';
	document.getElementById('login-button').style.visibility = 'visible';
}

function hideOverlay() {
	document.getElementById('overlay-logo2').style.visibility = 'hidden';
	document.getElementById('overlay-footer').style.visibility = 'hidden';
	document.getElementById('login-button').style.visibility = 'hidden';
}

function animateScrollToStart() {
	var winW = 1024, winH = 768;
	var winScroll = 0;
	
	if (document.body && document.body.offsetWidth) {
	 winW = document.body.offsetWidth;
	 winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth ) {
	 winW = document.documentElement.offsetWidth;
	 winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
	 winW = window.innerWidth;
	 winH = window.innerHeight;
	}
	
	if(window.scrollY) {
		winScroll = window.scrollY;
	} else if(document.documentElement.scrollTop) {
		winScroll = document.documentElement.scrollTop;
	}
	scrollcount = winScroll;
	if(winScroll < winH * ANISCROLL_START_SCROLL_Y_PRECENT * 0.01) {
		window.scrollTo(0, winScroll + HOME_SCROLL_SPEED);
		setTimeout('animateScrollToStart();', 20);
	} else {
		if(window.addEventListener) {
			window.addEventListener('scroll', onScroll, false);
		} else if(window.attachEvent) {
			window.attachEvent('scroll', onScroll);
			window.attachEvent('onscroll', onScroll);
		}
		
		document.getElementById('scrollprompt').style.display = 'block';
	}
	//setTimeout('autoScroll();',  2 * 1000);
}

function autoScroll() {
	scrollcount += 10;
	
	
	window.scrollTo(0, scrollcount);
	/*$('#big_scroll').scrollTop (scrollcount);
	animateChainsOut();
	animateChainsIn();*/
	setTimeout('autoScroll();',  2 * 1000);
}

function animateScrollToTop() {
	var winScroll = 0;
	if(window.scrollY) {
		winScroll = window.scrollY;
	} else if(document.documentElement.scrollTop) {
		winScroll = document.documentElement.scrollTop;
	}
	
	if(winScroll > 0) {
		var to = winScroll - HOME_SCROLL_SPEED;
		if(to < 0) to = 0;
		window.scrollTo(0, to);
		setTimeout('animateScrollToTop();', 20);
	} else {
		onScrolledToTop();
	}
}

function onScroll(e) {
	var winScroll = 0;
	if(window.scrollY) {
		winScroll = window.scrollY;
	} else if(document.documentElement.scrollTop) {
		winScroll = document.documentElement.scrollTop;
	}
	
	if(winScroll < SNAP_HOME_AT_Y) {
		if(window.removeEventListener) window.removeEventListener('scroll', onScroll, false);
		if(window.detachEvent) window.detachEvent('scroll', onScroll);
		if(window.detachEvent) window.detachEvent('onscroll', onScroll);
		animateScrollToTop();
	} else {
		document.getElementById('scrollprompt').style.display = 'none';
	}
}

function onScrolledToTop() {
	setHome();
}