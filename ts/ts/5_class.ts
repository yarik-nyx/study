class TypeScript {
    version: string = 'zxc'

    constructor(version?: string){
        if(version){
            this.version = version
        }
    }

    info(name: string){
        return `[${name}]: Typescript versions is ${this.version}`
    }
}

// class Car {
//     readonly model:string
//     readonly numberOfWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

// class Car {
//     readonly numberOfWheels: number = 4
//     constructor(readonly model:string){

//     }
// }

//public protected private
class Animal {
    protected voice: string = ''
    public color: string = 'black'
    
    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void{
        this.voice = voice
    }
}

const cat = new Cat()
//абстрактные классы и методы
//в абстрактных классах описываем методы, которы едолжны быть у классов, которые extends от этого класса(они тоже будут абстрактыными)

abstract class Component {
    abstract render():void
    abstract info():string
}

class AppComponent extends Component{
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return 'This is info'
    }
}