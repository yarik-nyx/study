const arr = [0, 3, -1, 9, 4, -2, 1, 5, -3, 8, 6, 2, 7]
let count = 0

function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }

    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]
    let less = []
    let greater = []

    for (let i = 0; i < arr.length;i++){
        count += 1
        if(i === pivotIndex){
            continue
        }
        if(arr[i] < pivot)
        {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}


console.log(quickSort(arr))
console.log(count)