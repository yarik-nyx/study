import { db, CarsType } from "../db/db"


export const carsRepo = {
    findByStr(name:string):CarsType[]{
        const foundCars : CarsType[] = db.cars
            .filter(x => x.name.indexOf(name) > -1)
        return foundCars
    },
    findById(id:number):CarsType | undefined{
        const foundCar : CarsType | undefined = db.cars.find(c => c.id === id)
        return foundCar
    },
    createCar(name: string):CarsType{
        const createdCar:CarsType = {
            id: +(new Date()),
            name: name,
            sold: 0
        }
        db.cars.push(createdCar)
        return createdCar
    },
    deleteCar(foundCar: CarsType){
        db.cars = db.cars.filter(c => c !== foundCar)
    },
    updateCar(foundCar: CarsType, name:string):CarsType{
        foundCar.name = name
        return foundCar
    }
    
}