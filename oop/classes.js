class Animal{
    constructor(type){
        this.type = type
    }
    print(value){
       console.log(value); 
    }
}

//инкапсуляция - private, protected, public; getter, setter
//наследование от Animal
class Person extends Animal{
    #card = '0000'
    static reg = 'EU'

    constructor(name, age){
        super('human')
        this.name = name
        this.age = age
        
    }

    static help(){
        console.log('help');
    }

    qwe(value){
        super.print(value)
    }

    get getCard(){
        return this.#card
    }

    set setCard(value){
        this.#card = value
        return this.#card
    }


}

const pr = new Person('ya', 20)
pr.qwe('zxc')