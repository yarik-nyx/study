// const cars: string[] = ['Ford', 'Audi']
// const cars2: Array<string> = ['Ford', 'Audi']

// const promise = new Promise<string>(resolve => {
//     setTimeout(() => {
//         resolve('Promise resolved')
//     }, 2000)
// })

// promise.then( data => {
//     console.log(data.toLowerCase().trim())
// })

function mergeObjects<T extends object, R extends  object>(a:T, b:R) {
    return Object.assign({}, a, b)
}

const merged = mergeObjects({name: 'Ya'}, {age: 20})
const merged2 = mergeObjects({model: 'FORD'}, {year: 2002})
// console.log(merged.age)
// console.log(merged2.model)

//error cuz 'aaa' is not object
// const merged3 = mergeObjects('aaa', 'bbb')
// console.log(merged3)

//------------
interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T) : {value:T, count:string}{
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    }
}

// console.log(withCount("Hello TSC"))
// console.log(withCount(['I', 'am', 'array']))

//-------------------
function getObjectValue<T extends object, R extends keyof T>(obj:T, key:R){
    return obj[key]
}

const person = {
    name: 'ya',
    age: 20,
    job: "TS"
}

// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))

//-------------------------
class Collection<T extends number | string | boolean>{
//    private _items: T[] = []
   
    constructor(private _items: T[] = []){}


   add(item: T){
        this._items.push(item)
   }

   remove(item:T){
    this._items = this._items.filter( i => i !== item)
   }

   get items(): T[]{
    return this._items
   }
}

const strings = new Collection<string>(['I', 'Am', 'Strings'])
strings.add("!")
strings.remove('Am')
// console.log(strings.items)

const numbers = new Collection<number>([1, 2, 3])
numbers.add(99)
numbers.remove(2)
// console.log(numbers.items)


// const objs = new Collection([{a: 1}, {b: 2}])
// objs.remove({b:2})
// console.log(objs.items)

//-------------

interface ICar {
    model:string
    year:number
}
//partial временно создаем объект без ключей
function createAndValidateCar(model:string, year:number) : ICar{
    const car: Partial<ICar> = {}

    if(model.length > 3) {
        car.model = model
    }

    if (year > 2000){
        car.year = year
    }

    return car as ICar
}

///
//Readonly<> - нельзя изменять состояние массива или объекта
const cars: Readonly<Array<string>> = ['Ford', 'Audi']
//err cuz readonly
// cars.shift()
cars[1]

const ford: Readonly<ICar> = {
    model: "ford",
    year: 2020
}
//err cuz readonly
// ford.model = 'Ferrari'

//--------------------------
