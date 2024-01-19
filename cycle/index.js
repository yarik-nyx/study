const arr = []

const obj = {
    id: 1,
    name: 'ya'
}

const obj2 = {
    id:2,
    name: 'ya2'
}

arr.push(obj)
arr.push(obj2)

const newArr = []

for(elem of arr){
    newArr.push({
        qweid: `${elem.id}`,
        qwename: `${elem.name}`
    })
}

console.log(elem);
elem.name = 1231233123
console.log(elem);

console.log(newArr);