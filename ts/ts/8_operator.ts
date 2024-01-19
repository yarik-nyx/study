interface IPerson {
    name: string
    age: number
}

type PersonKeys = keyof IPerson // 'name' | age

let zxc: PersonKeys = 'name'
zxc = "age"


type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

let x : User = {
    _id: 10,
    name: 'zxc',
    email: '123',
    createdAt: new Date()
}