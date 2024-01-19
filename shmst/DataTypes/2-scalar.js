'use strict'

let scalar1 = 5
let scalar2 = scalar1

scalar1--
scalar2++
console.dir({scalar1, scalar2})

const obj1 = { field: 5 }
const obj2 = obj1

obj1.field += 4
console.dir({obj1, obj2})