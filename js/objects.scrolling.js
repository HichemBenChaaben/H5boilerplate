var config =
{
	/**
	* Aniscroll Documentation
	* author: Magic
	* version: 1.0
	* 
	* Global Params
	* -------------------------------------------
	* imgPath:			main images directory
	* scrollLength:		length of the entire page
	* objects:			list of page objects
	* 
	* 
	*/
	
	
	
	// config
	imgPath: 'img/',
	scrollLength: '14500',
	scrollUnits: 'px',
	speed: 0.6,
	scrollSpeed: 0.2,
	homeSpacing: -400,
	
	// objects
	objects:
	[
	
/*** 2 ***/
	// As far back
	{img: '2/as_far_back.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 400, persistent: false, anim: [
		{startAtYPixels: 400, endAtYPixels: 2000, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
	]},
	
	
	// Blue hand
	{img: 'hands/blue.png', z: 1, offsetXPercent: 0, offsetXPixels: -86, offsetYPercent: 100, offsetYPixels: 374, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 2000, conditionalYStartPercent: 40, conditionalYEndPercent: 20, fromXPercent: 0, toXPercent: 10, fromXPixels: 0, toXPixels: 0, fromYPercent: 0, toYPercent: 100, fromYPixels: 0, toYPixels: 	0, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 200000, conditionalYStartPercent: 0, conditionalYEndPercent: -10000, fromOpacity: 0, toOpacity: 0}
	]},
	
	// But one
	{img: '2/but_one.png', z: 0, offsetXPercent: 0, offsetXPixels: -312, offsetYPercent: 100, offsetYPixels: 510, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 50, linear: true, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
	]},
	
	// Emancipation
	{img: '2/emancipation.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 630, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 50, linear: true, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
	]},
	
	// That's what
	{img: '2/thats_what.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 700, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 1000, conditionalYEndPercent: 80, fromOpacity: 0, toOpacity: 0},
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 50, linear: false, fromXPercent: 50, toXPercent: 0, fromXPixels: 310, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 200, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
	]},
	
	// Green hand (That's what)
	{img: 'hands/green.png', z: 1, offsetXPercent: 0, offsetXPixels: 386, offsetYPercent: 100, offsetYPixels: 700, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 1000, conditionalYEndPercent: 80, fromOpacity: 0, toOpacity: 0},
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 50, linear: false, fromXPercent: 50, toXPercent: 0, fromXPixels: 160, toXPixels: -150, fromYPercent: 0, toYPercent: 0, fromYPixels: 145, toYPixels: -55, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 50000, conditionalYStartPercent: 50, conditionalYEndPercent: 0, linear: false, fromXPercent: 0, toXPercent: 100, fromXPixels: -150, toXPixels: -160, fromYPercent: 0, toYPercent: 100, fromYPixels: -55, toYPixels: 300, fromOpacity: 1, toOpacity: 1},
	]},
	
/*** 3 ***/
	// But buying
	{img: '3/but_buying.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 860, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: -40, toXPercent: 0, fromYPercent: 50, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
	]},
	
	// Grey hand (But buying)
	{img: 'hands/grey.png', z: 1, offsetXPercent: 0, offsetXPixels: -666, offsetYPercent: 100, offsetYPixels: 860, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: -40, toXPercent: 0, fromYPercent: 50, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 0, linear: false, fromXPercent: 0, toXPercent: -40, fromYPercent: 0, toYPercent: 200, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 0, conditionalYEndPercent: -10000, linear: false, fromOpacity: 0, toOpacity: 0},
	]},
	
	// If that's
	{img: '3/if_thats.png', z: 0, offsetXPercent: 0, offsetXPixels: -155, offsetYPercent: 100, offsetYPixels: 930, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: 40, toXPercent: 0, fromYPercent: 50, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
	]},
	
	// Small hand Magenta
	{img: 'hands/small_magenta.png', z: 10, offsetXPercent: 0, offsetXPixels: -36, offsetYPercent: 100, offsetYPixels: 930, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: 40, toXPercent: 0, fromXPixels: 0, toXPixels: 0, fromYPercent: 50, toYPercent: 0, fromYPixels: 32, toYPixels: 32, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 0, linear: false, fromXPercent: 0, toXPercent: 20, fromYPercent: 0, toYPercent: 200, fromYPixels: 32, toYPixels: 32, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 0, conditionalYEndPercent: -10000, linear: false, fromOpacity: 0, toOpacity: 0},
	]},
	
	// Small hand Blue
	{img: 'hands/small_blue.png', z: 10, offsetXPercent: 0, offsetXPixels: -54, offsetYPercent: 100, offsetYPixels: 930, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: 40, toXPercent: 0, fromXPixels: 200, toXPixels: 200, fromYPercent: 50, toYPercent: 0, fromYPixels: -20, toYPixels: -20, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 0, linear: false, fromXPercent: 0, toXPercent: 40, fromXPixels: 200, toXPixels: 200, fromYPercent: 0, toYPercent: 200, fromYPixels: -20, toYPixels: -20, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 0, conditionalYEndPercent: -10000, linear: false, fromOpacity: 0, toOpacity: 0},
	]},
	
	// Small hand Yellow
	{img: 'hands/small_yellow.png', z: 10, offsetXPercent: 0, offsetXPixels: -402, offsetYPercent: 100, offsetYPixels: 930, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: 40, toXPercent: 0, fromXPixels: 200, toXPixels: 200, fromYPercent: 50, toYPercent: 0, fromYPixels: 30, toYPixels: 30, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 0, linear: false, fromXPercent: 0, toXPercent: 0, fromXPixels: 200, toXPixels: 200, fromYPercent: 0, toYPercent: 200, fromYPixels: 30, toYPixels: 30, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 0, conditionalYEndPercent: -10000, linear: false, fromOpacity: 0, toOpacity: 0},
	]},
	
/*** 4 ***/
	// Actually
	{img: '4/actually.png', z: 4, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 1044, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 55, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 100, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
	]},
	
	// Orange hand left
	{img: 'hands/orange_left.png', z: 5, offsetXPercent: 0, offsetXPixels: -760, offsetYPercent: 100, offsetYPixels: 1044, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 55, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 100, toYPercent: 0, fromYPixels: -70, toYPixels: -70, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 50000, conditionalYStartPercent: 55, conditionalYEndPercent: 20, linear: false, fromXPercent: 0, toXPercent: -50, fromYPercent: 0, toYPercent: 70, fromYPixels: -70, toYPixels: -70, fromOpacity: 1, toOpacity: 1},
	]},
	
	// Orange hand right
	{img: 'hands/orange_right.png', z: 5, offsetXPercent: 0, offsetXPixels: 170, offsetYPercent: 100, offsetYPixels: 1044, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 55, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 100, toYPercent: 0, fromYPixels: -84, toYPixels: -84, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 50000, conditionalYStartPercent: 55, conditionalYEndPercent: 20, linear: false, fromXPercent: 0, toXPercent: 50, fromYPercent: 0, toYPercent: 70, fromYPixels: -84, toYPixels: -84, fromOpacity: 1, toOpacity: 1},
	]},
	
	// But they're
	{img: '4/but_theyre.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 1145, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 50, linear: true, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
	]},

	// True
	{img: '4/true.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 1310, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, fromOpacity: 1, toOpacity: 1},
	]},
	
	// Scissors
	{img: '4/scissors.png', z: 0, offsetXPercent: 0, offsetXPixels: -300, offsetYPercent: 100, offsetYPixels: 1262, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 70, conditionalYEndPercent: 50, linear: false, fromXPercent: -50, toXPercent: 50, fromXPixels: -50, toXPixels: 290, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 50000, conditionalYStartPercent: 50, conditionalYEndPercent: 0, linear: false, fromXPercent: 50, toXPercent: 50, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 0},
	]},
	
/*** 5 ***/
	// That's where
	{img: '5/thats.png', z: 0, offsetXPercent: 0, offsetXPixels: -158, offsetYPercent: 100, offsetYPixels: 1476, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, fromOpacity: 1, toOpacity: 1},
	]},
	
	// Stone 1
	{img: '5/stone_1.png', z: 5, offsetXPercent: 0, offsetXPixels: -290, offsetYPercent: 100, offsetYPixels: 1416, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 70, conditionalYEndPercent: 70, fromOpacity: 1, toOpacity: 0},
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 70, conditionalYEndPercent: -100, fromOpacity: 0, toOpacity: 0},
	]},
	
	// Stone 2
	{img: '5/stone_2.png', z: 4, offsetXPercent: 0, offsetXPixels: -290, offsetYPercent: 100, offsetYPixels: 1416, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 200, conditionalYEndPercent: 70, fromOpacity: 0, toOpacity: 0},
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 65, conditionalYEndPercent: 65, fromOpacity: 1, toOpacity: 0},
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 65, conditionalYEndPercent: -100, fromOpacity: 0, toOpacity: 0},
	]},
	
	// Stone 3
	{img: '5/stone_3.png', z: 3, offsetXPercent: 0, offsetXPixels: -290, offsetYPercent: 100, offsetYPixels: 1416, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 200, conditionalYEndPercent: 65, fromOpacity: 0, toOpacity: 0},
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 60, conditionalYEndPercent: 60, fromOpacity: 1, toOpacity: 0},
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 60, conditionalYEndPercent: -100, fromOpacity: 0, toOpacity: 0},
	]},
	
	// Stone 4
	{img: '5/stone_4.png', z: 2, offsetXPercent: 0, offsetXPixels: -290, offsetYPercent: 100, offsetYPixels: 1416, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 200, conditionalYEndPercent: 60, fromOpacity: 0, toOpacity: 0},
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 55, conditionalYEndPercent: 55, fromOpacity: 1, toOpacity: 0},
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 55, conditionalYEndPercent: -100, fromOpacity: 0, toOpacity: 0},
	]},
	
	// Stone 5
	{img: '5/stone_5.png', z: 1, offsetXPercent: 0, offsetXPixels: -290, offsetYPercent: 100, offsetYPixels: 1416, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 200, conditionalYEndPercent: 55, fromOpacity: 0, toOpacity: 0},
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 50, conditionalYEndPercent: 50, fromOpacity: 1, toOpacity: 0},
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 50, conditionalYEndPercent: -100, fromOpacity: 0, toOpacity: 0},
	]},
	
/*** 6 ***/
	// It's the suply
	{img: '6/its_the.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 1610, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 200, conditionalYEndPercent: 80, linear: false, fromOpacity: 0, toOpacity: 0},
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: 50, toXPercent: 0, fromXPixels: 350, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 34, toYPixels: 34, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 60, conditionalYEndPercent: -100, linear: false, fromXPercent: 0, toXPercent: 0, fromXPixels: 0, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 34, toYPixels: 34, fromOpacity: 1, toOpacity: 1},
	]},
	
	// Chain
	{img: '6/chain.png', z: 1, offsetXPercent: 0, offsetXPixels: -2234, offsetYPercent: 100, offsetYPixels: 1610, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: 50, toXPercent: 0, fromXPixels: 350, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 60, conditionalYEndPercent: 30, linear: false, fromXPercent: 0, toXPercent: -50, fromXPixels: 0, toXPixels: -350, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
	]},
		
	// So much for abolition
	{img: '6/so_much.png', z: 0, offsetXPercent: 0, offsetXPixels: -155, offsetYPercent: 100, offsetYPixels: 1740, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 75, conditionalYEndPercent: 55, linear: false, fromXPercent: 50, toXPercent: 0, fromXPixels: 200, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
	]},
	
	// Pointing hand yellow (So much for abolition)
	{img: 'hands/pointing_yellow.png', z: 0, offsetXPercent: 0, offsetXPixels: 80, offsetYPercent: 100, offsetYPixels: 1740, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 75, conditionalYEndPercent: 55, linear: false, fromXPercent: 50, toXPercent: 0, fromXPixels: 200, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: -12, toYPixels: -12, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 55, conditionalYEndPercent: 35, linear: false, fromXPercent: 0, toXPercent: 50, fromXPixels: 0, toXPixels: 200, fromYPercent: 0, toYPercent: 0, fromYPixels: -12, toYPixels: -12, fromOpacity: 1, toOpacity: 1},
	]},
	
	// That's why we'd
	{img: '6/thats_why.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 1814, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 50, linear: true, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
	]},
	
	// So you will
	{img: '6/so_you_will.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 1906, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 1000, conditionalYEndPercent: 75, fromOpacity: 0, toOpacity: 0},
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 75, conditionalYEndPercent: 55, linear: false, fromXPercent: 40, toXPercent: 0, fromXPixels: 310, toXPixels: 0, fromYPercent: 50, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
	]},
	
	// Orange hand (So you will)
	{img: 'hands/orange_right_2.png', z: 1, offsetXPercent: 0, offsetXPixels: 150, offsetYPercent: 100, offsetYPixels: 1906, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 1000, conditionalYEndPercent: 75, fromOpacity: 0, toOpacity: 0},
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 75, conditionalYEndPercent: 55, linear: false, fromXPercent: 40, toXPercent: 0, fromXPixels: 310, toXPixels: 0, fromYPercent: 50, toYPercent: 0, fromYPixels: -60, toYPixels: -60, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 55, conditionalYEndPercent: 35, linear: false, fromXPercent: 0, toXPercent: 50, fromXPixels: 0, toXPixels: 310, fromYPercent: 0, toYPercent: 40, fromYPixels: -60, toYPixels: -60, fromOpacity: 1, toOpacity: 1},
	]},
	
	// It is not
	{img: '6/it_is_not.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 2020, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 50, linear: true, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
	]},
	
/*** 7 ***/
	// Take the survey
	{img: '7/take.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 2170, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 100, conditionalYEndPercent: 55, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 50, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
	]},
	
	// Green palm hand (Take the survey)
	{img: 'hands/green_palm.png', z: 0, offsetXPercent: 0, offsetXPixels: -78, offsetYPercent: 100, offsetYPixels: 2170, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 100, conditionalYEndPercent: 55, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 50, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 55, conditionalYEndPercent: 35, linear: false, fromXPercent: 0, toXPercent: 50, fromXPixels: 0, toXPixels: 100, fromYPercent: 0, toYPercent: 100, fromYPixels: 0, toYPixels: 300, fromOpacity: 1, toOpacity: 1},
	]},
	
	// To earn
	{img: '7/to_earn.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 2236, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 50, linear: true, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
	]},
	
	// Together
	{img: '7/together.png', z: 0, offsetXPercent: 0, offsetXPixels: -196, offsetYPercent: 100, offsetYPixels: 2340, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 2700, linear: true, fromXPercent: -200, toXPercent: -200, fromXPixels: 0, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: -16, toYPixels: -16, fromOpacity: 0, toOpacity: 0},
		{startAtYPixels: 2700, endAtYPixels: 2800, linear: true, fromXPercent: -50, toXPercent: 0, fromXPixels: -400, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: -16, toYPixels: -16, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 2800, endAtYPixels: 10000, linear: true, fromXPercent: 0, toXPercent: 0, fromXPixels: 0, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: -16, toYPixels: -16, fromOpacity: 1, toOpacity: 1},
	]},
	
	// Yellow hand (Together)
	{img: 'hands/yellow.png', z: 0, offsetXPercent: 0, offsetXPixels: -1100, offsetYPercent: 100, offsetYPixels: 2340, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 2700, linear: true, fromXPercent: -200, toXPercent: -200, fromXPixels: 0, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: -16, toYPixels: -16, fromOpacity: 0, toOpacity: 0},
		{startAtYPixels: 2700, endAtYPixels: 2800, linear: true, fromXPercent: -50, toXPercent: 0, fromXPixels: -400, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: -16, toYPixels: -16, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 2800, endAtYPixels: 2900, linear: true, fromXPercent: 0, toXPercent: -50, fromXPixels: 0, toXPixels: -600, fromYPercent: 0, toYPercent: 0, fromYPixels: -16, toYPixels: -16, fromOpacity: 1, toOpacity: 1},
		{startAtYPixels: 2900, endAtYPixels: 10000, linear: true, fromXPercent: -200, toXPercent: -200, fromXPixels: 0, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: -16, toYPixels: -16, fromOpacity: 0, toOpacity: 0},
	]},
	
	// Logo
	{img: '7/logo_banner.png', z: 0, offsetXPercent: 0, offsetXPixels: -1000, offsetYPercent: 100, offsetYPixels: 2540, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, fromOpacity: 1, toOpacity: 1},
	]},
	
	// Take survey button
	{img: '7/take_button.png', z: 0, link: 'survey/', linkTarget: '_self', offsetXPercent: 0, offsetXPixels: -96, offsetYPercent: 100, offsetYPixels: 2740, persistent: false, anim: [
		{startAtYPixels: 0, endAtYPixels: 5000, fromOpacity: 1, toOpacity: 1},
	]},
	
	]

};