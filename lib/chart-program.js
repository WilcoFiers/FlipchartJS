'use strict';

function chartProgram(prog) {
	// remove equal
	prog = prog.substr(1);

	if (!/return[^a-zA-Z0-9]/.test(prog)) {
		prog = 'return ' + prog;
	}


	let func = new Function(prog);
	return func;
}

module.exports = chartProgram;