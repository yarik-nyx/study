// function Log(constructor: Function) {
//     console.log(constructor)
//     console.log('----------------------Class')
// }

// function Log2(target: any, propName:string | Symbol){
//     console.log(target)
//     console.log(propName)
//     console.log('----------------------Property')

// }

// function Log3(target:any, propName: string | symbol, descrpiptor: PropertyDescriptor){
//     console.log(target)
//     console.log(propName)
//     console.log(descrpiptor)
//     console.log('----------------------ClassFunc')
// }

class Form{
    public email: string | void
    constructor(email?: string){
        this.email = email
    }
    
}

const x = new Form('zxc')
console.log(x.email)