// let b  = [1, 2, 3, 4 ,5]

const { response } = require("express")

// Array.prototype.multBy = function (n)  {
//         return this.map(x => x * n)
// }

// console.log([1, 2, 3, 4].multBy(3))

//замыкания
// function urlGen(domain){
//     return function(url){
//         return `https://${url}.${domain}`
//     }
// }

// //новая функция fnCom замкнула в себе com, принимая аргумент url
// const fnCom = urlGen("com")
// //новая функция fnRu замкнула в себе com, принимая аргумент url
// const fnRu = urlGen("ru")

// console.log(fnCom("google"))
// console.log(fnRu(" "))

//object.create({},{})

// const person = Object.create(Object.prototype, {
//     name:{
//         value:'Ya',
//         //можно ли пройтись в цикле
//         enumerable: true,
//         //переписывать значение
//         writable: true,
//         //удаление
//         configurable:true 
//     },
//     birthYear:{
//         value: 2003
//     },
//     age:{
//         set: function (value) {
//             this.age = value
            
//         },
//         get: function () {
            
//             return 26
//         }

//     }
// })
// // person.name = "zxc"
// // console.log(person.name)
// // person.birthYear = 2000
// // console.log(person.birthYear)

// console.log(person.age)
// person.age = 25
// console.log(person.age)

// const x = {
//     name: "Ya",
//     age: 20,
//     get getName(){
//         return this.name
//     },
//     set setName(value){
//         this.name = value
//     }

// }
// console.log(x.name)
// x.setName = 'zxc'
// console.log(x.getName)

//class

// class Animal{
//     static type = 'ANIMAL'
//     constructor(options){
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }

//     getAnimal(){
//         return `Name: ${this.name}, Age: ${this.age}, hasTail: ${this.hasTail}`
//     }

//     voice(){
//         console.log("I'm a animal")
//     }

// }

// const animal = new Animal({name:'Cube', age: 1.5, hasTail: true})
// console.log(animal.getAnimal())
// animal.voice()
// console.log("")


// class Cat extends Animal {
//     static type = "CAT"
//     constructor(options){
//         //вызов конструктора у родительского Animal
//         super(options)
//         this.color = options.color
//     }
//     //переопределение методов
//     getAnimal(){
//         return super.getAnimal() + `, Color: ${this.color}`
//     }

//     voice(){
//         console.log("I'm a cat")
//     }

//     get catColor(){
//         return this.color
//     }
//     set catColor(value){
//         this.color = value
//     }
// }

// const cat = new Cat({name:"BigCube", age: 4, hasTail: true, color: "grey"})
// console.log(cat.getAnimal())
// cat.voice()

// cat.catColor = 'blue'
// console.log(cat.catColor)


//async await
// const delay = (n) =>{
//     return new Promise(r => setTimeout(() => r(), n))
// }

// const url = "https://jsonplaceholder.typicode.com/todos"


// function fetchTodos() {
//     console.log("Fetch started")
//     delay(5000)
//         .then(() => fetch(url))
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(e => console.error(e))
// }

// fetchTodos()


// async function asyncFetchTodos() {
//     try{
//         console.log("Fetch started")
//         await delay(5000)
//         const res = await fetch(url)
//         const data = await res.json()
//         console.log(data)
//     }
//     catch(e){
//         console.error(e)
//     }
//     finally{
//         console.log("end")
//     }

// }
// asyncFetchTodos()

