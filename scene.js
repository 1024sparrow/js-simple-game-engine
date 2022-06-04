// nodejs module

function Scene(a_width, a_height, a_cellWidth = 1){
	this._width = a_width;
	this._height = a_height;
	this._cellWidth = a_cellWidth;

	console.clear();
};

Scene.prototype.setState = function(a){
	// a - Список списков символов
	//console.log(JSON.stringify(a));

	var
		iX,
		iY,
		iIncellX,
		lineCandidate,
		rowCount,
		columnCount
	;
	//rowCount = a.length;
	for (let o of a){
		if (columnCount === undefined || columnCount > o.length){
			columnCount = o.length;
		}
	}

	console.clear();
	process.stdout.write('╭─');
	for (iX = 0 ; iX < this._width ; ++iX){
		for (iIncellX = 0 ; iIncellX < this._cellWidth ; ++iIncellX){
			process.stdout.write('─');
		}
	}
	process.stdout.write('─╮\n');

	for (iY = 0 ; iY < this._height ; ++iY){
		/*process.stdout.write('│');
		for (iX = 0 ; iX < this._width ; ++iX){
			process.stdout.write('─');
			for (iIncellX = 0 ; iIncellX < this._cellWidth ; ++iIncellX){
				process.stdout.write('─');
			}
		}
		process.stdout.write('│\n');*/

		process.stdout.write('│ ');
		for (iX = 0 ; iX < this._width ; ++iX){
			process.stdout.write(a[iY][iX][0]);
			//console.log(a[iY][iX]);//
		}
		process.stdout.write(' │\n');
	}
	process.stdout.write('╰─');

	for (iX = 0 ; iX < this._width ; ++iX){
		for (iIncellX = 0 ; iIncellX < this._cellWidth ; ++iIncellX){
			process.stdout.write('─');
		}
	}
	process.stdout.write('─╯\n');
};

Scene.prototype.setPixelState = function(a_x, a_y, a_value){
	// a_value - символ для отображения
};

module.exports = Scene;
