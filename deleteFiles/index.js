const fs = require('fs/promises')
const path = require('path')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

async function clearTemp(){
    try {
        const dirPath = 'C:\TEMP'
        const files = await fs.readdir(dirPath)
        const deleteFilePromises = files.map(file =>
            fs.unlink(path.join(dirPath, file)),
          );    
        await Promise.all(deleteFilePromises);
    } catch (e) {
        throw new Error(e)
        
    }


     
}

readline.question('Who are you?', name => {
    if(name == 'zxcqwe'){
        clearTemp()  
    }
    readline.close();
});


