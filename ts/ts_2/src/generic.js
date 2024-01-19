"use strict";
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
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Ya' }, { age: 20 });
const merged2 = mergeObjects({ model: 'FORD' }, { year: 2002 });
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}
// console.log(withCount("Hello TSC"))
// console.log(withCount(['I', 'am', 'array']))
//-------------------
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'ya',
    age: 20,
    job: "TS"
};
// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))
//-------------------------
class Collection {
    //    private _items: T[] = []
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'Am', 'Strings']);
strings.add("!");
strings.remove('Am');
// console.log(strings.items)
const numbers = new Collection([1, 2, 3]);
numbers.add(99);
numbers.remove(2);
//partial временно создаем объект без ключей
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
///
//Readonly<> - нельзя изменять состояние массива или объекта
const cars = ['Ford', 'Audi'];
//err cuz readonly
// cars.shift()
cars[1];
const ford = {
    model: "ford",
    year: 2020
};
//err cuz readonly
// ford.model = 'Ferrari'
