const arr = [0, 3, -1, 9, 4, -2, 1, 5, -3, 8, 6, 2, 7]

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let indexMin = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[indexMin]){
                indexMin = j
            }
        }
        let tmp = arr[i]
        arr[i] = arr[indexMin]
        arr[indexMin] = tmp
    }
    return arr
}
console.log(selectionSort(arr))