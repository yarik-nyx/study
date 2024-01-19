let isRunning = true

setTimeout(() => isRunning = false, 10)
process.nextTick(() => console.log("Next Tick"))

//главный поток, цикл событий заблокирован
while(isRunning){
    console.log("While loop is running...")
}