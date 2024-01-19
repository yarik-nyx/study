interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}
const rect1: Rect = {
    id: '1234',
    size:{
        width: 10,
        height: 10
    },
    color: '#CCC'
}

const rect2: Rect = {
    id: '12345',
    size:{
        width: 5,
        height: 5
    }
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

//Наследование интерфейсов

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size:{
        width: 10,
        height: 15
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// ------------------

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date()

    setTime(date: Date): void {
        this.time  = date
    }
}

// --------------------

interface IStyles {
    [key: string]:string
}

const css: IStyles= {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}