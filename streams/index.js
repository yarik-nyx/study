//readable - чтение
//writeable - запись
//duplex - чтение + запись
//transform - чтение + запись, во время чтения можно изменять данные

const fs = require('fs')
const path = require('path')
//считывание всего файла за один раз
// fs.readFile(path.resolve('text.txt'), (err, data) => {
//     if(err){
//         throw new Error(err)
//     }

//     console.log(data);
// })

//чтение по частям(чанкам)
const readStream = fs.createReadStream(path.resolve('text.txt'))
//один чанк по дефолту 64кб
readStream.on('data', (chunk) => {
    console.log(chunk);
})

const writeStream = fs.createWriteStream(path.resolve('text2.txt'))
for (let i = 0; i< 20; i++){
    writeStream.write(i + '\n')
}
writeStream.end()


