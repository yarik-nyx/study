const array = [2, 4, 1, 7, 4, 2, 3, 5, 9, 8, 1, 3, 11]

function linearSearch(array, item) {
    for(let i = 0; i < array.length; i++){
        if(array[i] === item){
            return i
        }
    }
    return null
}

console.log(linearSearch(array, 11))

