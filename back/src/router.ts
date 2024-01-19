import express, {Request, Response, Router} from 'express'
import { RequestWithBody, RequestWithParams, RequestWithParamsAndBody, RequestWithQuery } from './types'
import { CreateCarModel } from './models/CreateCarModel'
import { UpdateCarModel } from './models/UpdateCarModel'
import { GetCarsQueryModel } from './models/GetCarsQueryModel'
import { CarViewModel } from './models/CarViewModel'
import { URIParamsCarIdModel } from './models/URIParamsCarIdModel'
import { DbType, CarsType} from './db/db'
import { carsRepo } from './repos/cars_repo'

export const getCarsRouter = (db: DbType): Router => {
    

    const dots = () :void=> {console.log('----------------------------------------------------------------\n')}
    const carsRouter : Router = express.Router()


    //handler - обработчик

    //endpoint - all cars + query параметры через ? /cars?name=B
    carsRouter.get('/', (req:RequestWithQuery<GetCarsQueryModel>, 
        res:Response<CarViewModel[]>) => {
        //req.query хранятся query параметры
        //{ name: 'B' }
        console.log("Get all cars or by name")
        console.log(`req.query: ${JSON.stringify(req.query)}`)
        dots()
        let foundCars : CarsType[] = db.cars
        if(req.query.name){
            foundCars = carsRepo.findByStr(req.query.name)
            if (foundCars.length === 0){
                res.sendStatus(404)
                return
            }
        }



        res.json(foundCars.map(dbCars => {
            return {
                id: dbCars.id,
                name: dbCars.name
            }
        }))
    })


    //endpoint - req.params - cars/1
    carsRouter.get('/:id', (req:RequestWithParams<URIParamsCarIdModel>, 
        res:Response<CarViewModel>) => {
        //req.params хранятся параметры
        //{ id: '1'}
        console.log("Get car by id")
        console.log(`req.params: ${JSON.stringify(req.params)}`)
        dots()
        const foundCar: CarsType | undefined= carsRepo.findById(+req.params.id)

        if (!foundCar){
            res.sendStatus(404)
            return
        }

        res.json({
            id:foundCar.id,
            name:foundCar.name
        })
    })


    //Post endpoint - post - new car - /cars
    carsRouter.post('/', (req:RequestWithBody<CreateCarModel>, 
        res:Response<CarViewModel>) => {
        //req.body хранятся параметры body post запроса
        //{ name: 'ZXC' }
        console.log("Create a new car")
        console.log(`req.body: ${JSON.stringify(req.body)}`)
        dots()
        if(!req.body.name){
            res.sendStatus(400)
            return
        }
        const createdCar: CarsType = carsRepo.createCar(req.body.name)
        console.log(db.cars)
        res
            .status(201)
            .json({
                id: createdCar.id,
                name: createdCar.name
            })


    })

    //Delete endpoint - by id
    carsRouter.delete('/:id', (req:RequestWithParams<URIParamsCarIdModel>, 
        res:Response) => {
        //req.params хранятся параметры
        //{ id: '1'}
        console.log("Delete car by id")
        console.log(`req.params: ${JSON.stringify(req.params)}`)
        dots()
        const foundCar: CarsType | undefined = carsRepo.findById(+req.params.id)

        if (!foundCar){
            res.sendStatus(404)
            return
        }
        carsRepo.deleteCar(foundCar)

        res.sendStatus(204)
    })

    //Update endpoint - by id
    carsRouter.put('/:id', (req:RequestWithParamsAndBody<URIParamsCarIdModel, UpdateCarModel>, 
        res:Response) => {
        //req.params хранятся параметры
        //{ id: '1'}
        console.log("Update car by id")
        console.log(`req.params: ${JSON.stringify(req.params)}`)
        dots()

        if(!req.body.name)
        {
            res.sendStatus(400)
            return
        }

        const foundCar:CarsType | undefined= carsRepo.findById(+req.params.id)

        if (!foundCar){
            res.sendStatus(404)
            return
        }

        carsRepo.updateCar(foundCar, req.body.name)

        res.json({
            id:foundCar.id,
            name:foundCar.name
        })
    })

    return carsRouter

}