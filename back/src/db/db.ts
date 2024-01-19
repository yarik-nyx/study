export type CarsType = {
    id:number
    name:string
    sold:number
}

export type DbType = {cars: CarsType[]}

export const db:{cars:CarsType[]} = {
    cars:[
        {id:1, name:'MB', sold: 100},
        {id:2, name:'BMW', sold: 80},
        {id:3, name:'AUDI', sold: 90},
        {id:4, name:'TOYOTA', sold: 150}
    ]
}