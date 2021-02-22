const fs = require('fs');
const path = require('path')

let dirtree = function(path){
	// fs.readdir(path, (err, files)=>{
		
	// })
	// 1.先判断是文件还是文件夹，如果是文件直接返回，如果是文件夹继续循环
	fs.stat(path, (err, stats)=>{
		if(stats.isFile()){
			console.log('这是文件')
			fs.readdir(path, (err, files)=>{
				if(err){
					console.log('读取错误')
				}else{
					console.log(files)
					for(let i=0; i<files.length; i++){
						console.log(files[i])
					}
				}
			})
		}else{
			console.log('这是目录')
		}
	})
	
}

dirtree('./3.file.js')

/* fs.stat('../', (err, stats)=>{
	if(stats.isFile()){
		console.log('这是文件')
	}else{
		fs.readdir('../', (err, files)=>{
			if(err){
				console.log('读取错误')
			}else{
				console.log(files)
				for(let i=0; i<files.length; i++){
					console.log(files[i])
				}
			}
		})
	}
}) */
