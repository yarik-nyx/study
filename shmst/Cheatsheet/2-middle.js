'use strict'

const adder = (initial = 0) => ({
    value: initial,
    steps: [initial],
    add(value) {
        this.steps.push(value)
        this.value += value
        return this
    },
    log() {
        console.log(this.value);
        console.log(this.steps);
    }
})

// const obj = adder(5).add(5).add(10).add(3).log()

class Adder {
    constructor(initial = 0){
        this.steps = [initial]
        this.value = initial
    }
    add(value){
        this.steps.push(value)
        this.value += value
        return this
    }

    log(){
       console.log(`value = ${this.value}`) 
       console.log(`steps = ${this.steps}`) 
    }
}

// new Adder(10).add(3).add(2).log()



