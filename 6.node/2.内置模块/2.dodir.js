const fs = require('fs')

// 创建文件夹
// fs.mkdir('./test', (err) => {
// 	if(err){
// 		console.log('文件夹早已存在')
// 	}else{
// 		console.log('创建成功')
// 	}
// })

// 更改文件夹
// fs.rename('./test', './newTest', (err) => {
//   if (err){
// 	  console.log('no such file or directory')
//   }else{
// 	  console.log('Rename complete!');
//   }
// });

// 删除文件
fs.rmdir('./newTest', (err)=>{
	if(err){
		console.log('文件夹不存在')
	}else{
		console.log('删除成功')
	}
})