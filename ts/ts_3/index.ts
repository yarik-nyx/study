//типы данных
const str:string = ''
const number:number = 132
const booleanData:boolean = true

const nullData:null = null
const undefinedData: undefined = undefined

//использовать не нужно
const someObject: Object = {data:1}
const anyData: any = 0

//можно написать все что угодно, чтобы потом переопределить потом тип даты
const someData: unknown = false

const strArray: string[] = ['hello', 'world']
const strArrayGen: Array<string> = ['hello', 'world']

const numArray: number[] = [1, 2, 3]
const numArrayGen: Array<number> = [1, 2, 3]

//для объектов можно создавать типы или интерфейсы
type ProductType = {
    id: number,
    title: string,
    amount?: number
}
//Интерфейс может имплементироваться в класс, наследоваться от класса
interface IProduct {
    id: number,
    title: string,
    amount?: number 
}

const someProduct: ProductType = {
    id: 1,
    title: 'Product1'
}
//как строки, так и числа
enum SomeStatus {
    complete = 0,
    error = 1,
    warning = 3
}
//never - ошибка
function sum(someParam: number, somePara2: number): never {
    throw Error
}

//полиморфизм - перегрузка методов
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
 if (d !== undefined && y !== undefined) {
   return new Date(y, mOrTimestamp, d);
 } else {
   return new Date(mOrTimestamp);
 }
}

//generics
interface IUser {
    id: number,
    username: string,
    password: string
}


interface Pagination<T extends IUser | ProductType> {
    items: T,
    count: number,
    page: number
}

const newPag: Pagination<IUser> = {
    items: {id:1, username: 'zxc', password: '123'},
    count: 1,
    page: 1
}

function PrintSomeData<T>(data: T):void {
    console.log(data);
}

PrintSomeData<IUser>({id:1, username: 'zxc', password: '123'})


class Profile {
    public name: string
    protected password: string
    private card: string

    constructor(name: string, password: string, card: string){
        this.name = name
        this.password = password
        this.card = card
    }

    public print(){
        console.log(this.card, this.name, this.password);
    }
}

const alex = new Profile('alex', '123', 'card')
alex.print()

interface IAnimal {
    age: number,
    name: string,
    voice: () => void
}

class Dog implements IAnimal{
    constructor(   
        public age : number, 
        public name : string
    ){}

    public voice():void{
        console.log('gavgavich');
        
    }
}

const dogich = new Dog(12, 'zxc')
dogich.voice()