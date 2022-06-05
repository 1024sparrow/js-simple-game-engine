#!/usr/bin/node

var
	SCENE = require('./scene.js'),
	KEYBOARD = require('./kb.js'),
	XX = 8,
	scene = new SCENE(),
	currentIndex = 0
;

setInterval(onTick, 500);
KEYBOARD.setIntercative(true);
KEYBOARD.setCharCallback(
	function(a_str, a_key){
		if (
			(a_key.ctrl && a_key.name === 'c')
			|| a_key.name === 'q' // comment this on release
		){
			process.exit();
		}
	}
);
KEYBOARD.setLineCallback(
);

function onTick(){
	console.log('-- onTick --');

	var
		sceneContent = [[],[]],
		i
	;
	// Copy pseudographycs utf-8 symbols from https://www.w3.org/TR/xml-entity-names/025.html
	for (i = 0 ; i < XX ; ++i){
		if (i === currentIndex) {
			//sceneContent[0].push('*');
			sceneContent[0].push('█');
			sceneContent[1].push('█');
		}
		else {
			//sceneContent[0].push('.');
			sceneContent[0].push('░');
			sceneContent[1].push('░');
		}
	}

	scene.setState(sceneContent, '', `Current index: ${currentIndex}`);
	currentIndex = (++currentIndex) % XX;
};
