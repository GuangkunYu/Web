const fs = require('fs');

fs.writeFile('logs/hello.log', 'hello world\n', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('写入文件成功')
    }
})

fs.appendFile('logs/hello.log', 'hello ~\n', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('追加文件成功')
    }
})