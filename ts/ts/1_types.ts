const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const msg: string = "Hello TSC"

const numArr:number[] = [1, 2, 3]
const numArr2:Array<number> = [1, 2, 3]

const words: string[] = ['Hello', 'TSC']

//Tuple - массив с разными типами данных
const contact:[string, number] = ['Ya', 123]

//Any - можно переопределять тип данных
let variable: any = 42
variable = 'zxc'

// ====
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('zxc')

// Never - функция возвращает ошибку или постоянно выполняется
function throwErr(msg: string): never {
    throw new Error(msg)      
}

function infinite() : never {
    while(true){

    }
}

//Type
type Login = string

const login: Login = 'admin'

type ID = string | number
const id1: ID = 123
const id2: ID = "123"

type SomeType = string | null | undefined

