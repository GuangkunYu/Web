// 输出当前文件的执行文件
console.log(__dirname)

// 引用并调用模块
let Module = require('./module')
console.log(Module)

Module.sayHello()