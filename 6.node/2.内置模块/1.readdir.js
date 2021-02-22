// 引入一个内置模块
const fs = require('fs')

// 同步读取文件
try{
	let dirs = fs.readdirSync('../1')
	console.log(dirs)
}catch(err){
	console.log('读取错误')
}


// 异步读取文件
// 错误的回调优先，在回调函数中第一个参数表示错误对象，默认为null, 如果出现错误，就是错误对象
fs.readdir('../', (err, files)=>{
	if(err){
		console.log('读取错误')
	}else{
		console.log(files)
	}
})
/* 
	错误处理：
		同步：try...catch
		异步：错误回调优先
	文件夹的错误：
		
*/
