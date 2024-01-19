'use strict'

// Constans

const SALUTATION = 'Ave'

const COLORS = [
    /* 1*/ 'black',
    /* 2*/ 'red',
    /* 3*/ 'green',
    /* 4*/ 'yellow',
    /* 5*/ 'blue',
    /* 6*/ 'magenta',
    /* 7*/ 'cyan',
    /* 8*/ 'white',   
]

// functions

const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`

const colorize = name => {
    let res = ''
    const letters = name.split("")
    let color = 1
    for (const letter of letters){
        res += colorer(letter, color++)
        if(color > COLORS.length){
            color = 1
        }
    }
    return res
}

const greetings = name => {
    return name.includes('Augustus') ? `${SALUTATION}, ${name}!` : `Hello, ${name}!`
}

console.log(greetings('zxc'))
console.log(colorize('QWE QWE QWE QWE QWE'))