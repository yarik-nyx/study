'use strict'

// a = 5

// const func = function(x){
//     console.log(`a = ${x}`);
//     x += 1
//     console.log(`a = ${x}`);
// }

// func(a)
// console.log(a);


const object = {
    a: 5,
    b: 6
}

const obj1 = object

object.a = 10
console.log(object);
console.log(obj1);