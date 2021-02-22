const fs = require('fs')
const zlib = require('zlib')

let fileReadStream = fs.createReadStream('data.json')
let fileWriteStream = fs.createWriteStream('data-1.json.gz')

fileWriteStream.on('pipe', (source)=>{
    console.log(source)
})

fileReadStream
.pipe(zlib.createGzip())
.pipe(fileWriteStream)

let count = 0;

fileReadStream.once('data', (chunk)=>{
    console.log(chunk)
})

fileReadStream.on('data', (chunk)=>{
    console.log(chunk);
    fileWriteStream.write(chunk)
})

fileReadStream.on('data', (chunk)=>{
    console.log(`${++count} 接收到：${chunk.length}`)
})

fileReadStream.on('end', ()=>{
    console.log('---结束---')
})

fileReadStream.on('error', (error)=>{
    console.log(error)
})