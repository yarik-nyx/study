type MyPartial<T> = {
    [Key in keyof T]? : T[Key]
}

interface Person {
    id: number,
    name:string
}

type PartialPerson = MyPartial<Person>