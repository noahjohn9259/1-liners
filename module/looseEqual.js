/**
 * @module 1-liners/looseEqual
 * 
 * Same as `a == b`.
 * 
 * @example
 * 
 * 	var looseEqual = require('1-liners/looseEqual');
 * 
 * 	looseEqual(true, true); // => true
 * 	looseEqual(false, true); // => false
 * 	looseEqual(1, true); // => true
 * 
 **/
export default (x, y) => x == y;
