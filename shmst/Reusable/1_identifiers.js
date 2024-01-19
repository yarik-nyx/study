'use strict'

const INTERVAL = 500
let counter = 0
const MAX_VALUE = 20
let timer = null

const event = () => {
    if(counter === MAX_VALUE){
        console.log('End');
        clearInterval(timer)
        return
    }
    console.dir({counter, date: new Date()})
    counter++
}

console.log('Begin');

timer = setInterval(event, INTERVAL)