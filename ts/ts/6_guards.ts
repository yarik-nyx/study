//typeof 
function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

//instanceof
class MyRespone {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function handle(res: MyRespone | MyError){
    if(res instanceof MyRespone){
        return {
            info: res.header + res.result
        }
    }
    return {
        info: res.header + res.message
    }
}

//---------------

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    
}

setAlertType('success')
setAlertType('warning')
// setAlertType('zxc')