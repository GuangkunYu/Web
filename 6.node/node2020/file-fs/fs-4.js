const fs = require('fs');

fs.readFile('logs/hello.log', 'UTF-8', (err, data)=>{
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})