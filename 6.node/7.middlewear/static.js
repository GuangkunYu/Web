/* 
	静态资源目录，目录可以被访问 
*/

const express = require('express')
const path = require('path')

const app = express()
// console.log(__dirname)
// console.log(path.join(__dirname, './hehe'))
// 域名：端口号 直接指向规定的静态目录
// app.use(express.static(path.join(__dirname, './hehe')))
app.use('/public', express.static(path.join(__dirname, './hehe')))

app.listen(3000, () => {
	console.log('service start')
})