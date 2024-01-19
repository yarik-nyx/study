const user = {
    name: 'zxc',
    propMain: {
        propInnerOne: {
            propInnerTwo: 1
        }
    }
}

delete user.propMain.propInnerOne

//undefined
console.log(user.propMain.propInnerOne?.propInnerTwo);

//TypeError: Cannot read properties of undefined (reading 'propInnerTwo')
console.log(user.propMain.propInnerOne.propInnerTwo);