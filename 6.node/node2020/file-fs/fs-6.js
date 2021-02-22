const fs = require('fs');

fs.rename('hello.js', 'world.js', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('重命名成功')
    }
})