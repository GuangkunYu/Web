const fs = require('fs');

fs.readdirSync('logs').map((file)=>{
    fs.unlink(`logs/${file}`, (err)=>{
        if (err) {
            console.log(err)
        } else {
            console.log('删除文件成功')
        }
    })
})
fs.rmdir('logs', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('删除目录成功')
    }
})