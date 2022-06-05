#!/usr/bin/node

const SCENE = require('./scene.js');
const XX = 8;

setInterval(onTick, 500);

var
	scene = new SCENE(),
	currentIndex = 0
;

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
