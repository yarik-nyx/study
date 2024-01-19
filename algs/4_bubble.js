const arr = [0, 3, -1, 9, 4, -2, 1, 5, -3, 8, 6, 2, 7]
let count = 0
function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
         for(let j = 0; j < arr.length; j++){
            if(arr[j + 1]< arr[j]){
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
            count += 1
        }
        
    }
    return arr
}

console.log(bubbleSort(arr))
console.log(arr.length)//13  элементов
console.log(count) //169 итераций
//O(n * n) 