/* 
	中间件 middlewear
		内置中间件	static
		自定义中间件
		第三方中间件 （body-parser）（拦截器）
		
	中间件使用，一定要注意next
*/

const express = require('express')

const app = express()

// 全局中间件使用
app.use('/', (req, res, next) => {
	console.log('中间件')
	let {
		token
	} = req.query;
	if (token) {
		next() // 是否继续往下执行
	} else {
		res.send('缺少token')
	}
})
// 局部中间件
app.get('/test3', (req, res, next) => {
	console.log('fun1');
	next()
}, (req, res) => {
	console.log('test3')
	res.send('test3')
})

app.get('/test1', (req, res) => {
	console.log('test1')
	res.send('test1')
})

app.get('/test2', (req, res) => {
	console.log('test2')
	res.send('test2')
})

app.listen(3000, () => {
	console.log('service start')
})
