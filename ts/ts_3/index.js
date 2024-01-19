//типы данных
var str = '';
var number = 132;
var booleanData = true;
var nullData = null;
var undefinedData = undefined;
//использовать не нужно
var someObject = { data: 1 };
var anyData = 0;
//можно написать все что угодно, чтобы потом переопределить потом тип даты
var someData = false;
var strArray = ['hello', 'world'];
var strArrayGen = ['hello', 'world'];
var numArray = [1, 2, 3];
var numArrayGen = [1, 2, 3];
var someProduct = {
    id: 1,
    title: 'Product1'
};
//как строки, так и числа
var SomeStatus;
(function (SomeStatus) {
    SomeStatus[SomeStatus["complete"] = 0] = "complete";
    SomeStatus[SomeStatus["error"] = 1] = "error";
    SomeStatus[SomeStatus["warning"] = 3] = "warning";
})(SomeStatus || (SomeStatus = {}));
//never - ошибка
function sum(someParam, somePara2) {
    throw Error;
}
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
var newPag = {
    items: { id: 1, username: 'zxc', password: '123' },
    count: 1,
    page: 1
};
function PrintSomeData(data) {
    console.log(data);
}
PrintSomeData({ id: 1, username: 'zxc', password: '123' });
var Profile = /** @class */ (function () {
    function Profile(name, password, card) {
        this.name = name;
        this.password = password;
        this.card = card;
    }
    Profile.prototype.print = function () {
        console.log(this.card, this.name, this.password);
    };
    return Profile;
}());
var alex = new Profile('alex', '123', 'card');
alex.print();
var Dog = /** @class */ (function () {
    function Dog(age, name) {
        this.age = age;
        this.name = name;
    }
    Dog.prototype.voice = function () {
        console.log('gavgavich');
    };
    return Dog;
}());
var dogich = new Dog(12, 'zxc');
dogich.voice();
