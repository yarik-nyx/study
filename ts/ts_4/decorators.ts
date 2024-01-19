function ClassDecorator(prefix: string){
    return function (target: any){
        console.log(prefix, Object.getOwnPropertyDescriptors(target));
        
    }
}

class User {
    public password: string = '3333'
    constructor(password:string){
        this.password = password
    }
    
}