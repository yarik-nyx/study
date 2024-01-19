const menu = {
    analytics: {
        bussines: 'Для бизнеса',
        data: 'Big Data'
    },
    design: {
        graphical: 'Графический'
    }
}

function getMenuItem<T, L1 extends keyof T, L2 extends keyof T[L1]>(obj: T, l1: L1, l2: L2){
    return obj[l1][l2]
}

getMenuItem(menu, 'analytics', 'bussines')