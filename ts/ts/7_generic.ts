//type object<type data>
const arrayOfNumbers: Array<number> = [1, 2, 3]
const arrayOfStrings: Array<string> = ["Hello", "World", '!']

function reverse<T>(arr: T[]): T[] {
    return arr.reverse()
}
console.log(reverse(arrayOfNumbers))
console.log(reverse(arrayOfStrings))
