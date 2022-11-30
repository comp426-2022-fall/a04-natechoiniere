#!usr/bin/env node

export function roll(x, y, z) {
	// x is sides, y is dice, z is rolls
	// add the result of each roll together, store in results
	var arr = [];
	var sum = 0;
	for (let i = 0; i < z; i++) { // each ROLL
		for (let j = 0; j < y; j++) { // each DICE
			sum += Math.floor(Math.random()*x)+1;
			arr[i] = sum;
		}
		sum = 0;
	}
	
	return {
		sides: x,
		dice: y,
		rolls: z,
		results: arr
	};
}
