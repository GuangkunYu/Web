// const express = require('express')

// const app = express()

// app.listen(3000, () => {
// 	console.log('service start')
// })

// 异步操作需要保持一定的执行顺序   回调函数的嵌套  回调地狱
// 异步的回调
// 链式调用中只需要一个catch
// 终止链式调用的执行 抛出一个错误-> throw一个new Error对象
// 大量的异步操作，如果需要顺序执行，通过回调函数执行会导致回调地狱，通过promise解决回调地狱
// promise  asyc/awiat
function delFile(){
	return new Promise((resolve, reject)=>{
		//异步操作
		// resolve('成功')	// 外部走then的处理函数，表示OK
		reject('失败')	// 外部通过catch接收，表示失败的处理
	})
}
delFile()
.then((msg)=>{
	console.log('then:' + msg)
})
.catch((err)=>{
	console.log('err:' + err)
})
// setTimeout(()=>{
// 	console.log(1)
// }, 1)

// setTimeout(()=>{
// 	console.log(2)
// }, 2)