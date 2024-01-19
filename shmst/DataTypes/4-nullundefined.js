'use strict'

//ничего скалярное
let undf
console.log({undf}, typeof undf);

//ничего ссылочное
const emptyObj = null
console.log({emptyObj}, typeof emptyObj);

//ничего числовое
let count = NaN
console.log({count}, typeof count);

//Nan
count = undefined + 1
console.log(count);

console.log(Infinity, -Infinity, typeof Infinity)