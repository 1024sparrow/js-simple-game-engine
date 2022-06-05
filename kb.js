// NodeJS-module. Helper to make interactive console interface.

const readline = require('readline');

function Kb(){
	this._state = 0; // 0 - interactive; 1 - input.
	this._falseSymbols = 0;
	this._fCharCallback = undefined;
	this._fLineCallback = undefined;

	readline.emitKeypressEvents(process.stdin);
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		//terminal: false
	});
	var self = this; // boris e
	rl.on('line', (p_line)=>{
		if (self._state === 0)
			return;

		const line = p_line.slice(self._falseSymbols);
		self._falseSymbols = 0;
		if (self._fLineCallback)
			self._fLineCallback(line);
		self.setIntercative(true);
	});
	self.setIntercative(true);
	process.stdin.on('keypress', (str, key)=>{
		if (self._state === 1)
			return;

		if (key.name.length === 1 && !key.ctrl && !key.meta){
			++self._falseSymbols;
		}
		if (self._fCharCallback)
			self._fCharCallback(str, key);
	})
};

Kb.prototype.setIntercative = function(p_interactive){
	this._state = p_interactive ? 0 : 1;

	if (p_interactive){
		this._state = 0;
		process.stdin.setRawMode(true);
	}
	else{
		process.stdin.setRawMode(false);
		this._state = 1;
	}
};

Kb.prototype.setCharCallback = function(p_function, p_scope){
	this._fCharCallback = function(p2_str, p2_key){
		process.stdout.write('\n');
		p_function.call(p_scope, p2_str, p2_key);
	};
};

Kb.prototype.setLineCallback = function(p_function, p_scope){
	if (p_scope) {
		this._fLineCallback = function(p2_line){
			p_function.call(p_scope, p2_line);
		};
	}
	else {
		this._fLineCallback = p_function;
	}
};

module.exports = new Kb();
