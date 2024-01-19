const persons = {
    marcus: {name: 'Marcus'},
    mao: {name: 'Mao'},
    Decart: {name: 'Decart'},
}

for (const person in persons){
    console.log(persons[person].name)
}