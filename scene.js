// nodejs module

function Scene(){
};

Scene.prototype.setState = function(a_matrix, a_pretext = '', a_posttext = ''){
	// a_matrix - Список списков символов
	//console.log(JSON.stringify(a_matrix));

	var
		iX,
		iY,
		iIncellX,
		lineCandidate,
		rowCount,
		columnCount,
		cellWidth = 1
	;
	rowCount = a_matrix.length;
	for (let o of a_matrix){
		if (columnCount === undefined || columnCount > o.length){
			columnCount = o.length;
		}
		for (const oCell of o){
			if (oCell.length > cellWidth){
				cellWidth = oCell.width;
			}
		}
	}

	this._width = columnCount;
	this._height = rowCount;
	this._cellWidth = cellWidth;

	console.clear();
	if (a_pretext){
		process.stdout.write(a_pretext + '\n');
	}
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
			process.stdout.write(a_matrix[iY][iX] || ' ');
			//console.log(a_matrix[iY][iX]);//
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
	if (a_posttext){
		process.stdout.write(a_posttext + '\n');
	}
};

Scene.prototype.setPixelState = function(a_x, a_y, a_value){
	// a_value - символ для отображения
};

module.exports = Scene;
