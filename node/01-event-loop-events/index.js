//Event loop => nextTick -> promise -> timers -> i/o Events -> setImmediate -> close
// Start
// End
// Next tick 1 45.87
// Promise 1 46.14
// Timeout 1 47.02
// Immediate 1 48.38
// File written 49.17
// Timeout 2 56.71

const fs = require('fs')
const dns = require('dns')

function info(text){
    console.log(text, performance.now().toFixed(2))
}

console.log("Start")

//асинхронная неблокирующая операция(timers событие)
setTimeout(() => info("Timeout 1"), 0)
//Timeout 2 выполнятеся последним т.к последняя итерация
setTimeout(() => info("Timeout 2"), 10)
setTimeout(() => {
    process.nextTick(() => info("Next Tick 2"))
    info("Timeout 3")
}, 100)

//setInterval
let intervalCount = 0
const intervalId = setInterval(() => {
    info(`Interval ${intervalCount += 1}`)
    if(intervalCount === 2)
    {
        clearInterval(intervalId)
    }
}, 50)

//close событие
fs.writeFile('./test.txt', 'Hello node.js', () => info('File Written'))

//promise событие
Promise.resolve().then(() => info("Promise 1"))

//nexttick событие 
process.nextTick(() => info("Next Tick 1"))

//setImmediate событие
setImmediate(() => info("Immediate 1"))

//I/O event
dns.lookup('localhost', (err, address, family) => {
    info(`DNS 1 localhost ${address}`)
    //Promise
    Promise.resolve().then(() => info("Promise 2"))
    //NextTick
    process.nextTick(() => info("Next Tick 3"))
})
console.log("End")

