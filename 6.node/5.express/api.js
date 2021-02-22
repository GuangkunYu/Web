/* 
	通过express框架书写API
		1. 初始化项目		npm init --yes
		2. 安装express	npm install express --save
			模块引用（第三方）：从当前目录往上找
	
	API接口的书写：
		接收数据
			get  req.query
			post req.body 需要body-parser插件进行解析
				注意数据格式：json x-www-form-urlencode formdata
*/
const express = require('express')
const bodyParser = require('body-parser')
// express实例化
const app = express()

// 第三方插件解析body消息体post使用
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json({
	extended: false
}))

// 简单的api接口
app.get('/user/login', (req, res) => {
	console.log('你好');
	console.log(req.query);
	res.send({
		"err": 0,
		"msg": "regist ok"
	})
})

app.post('/user/register', (req, res) => {
	// express 不能直接解析消息体，通过第三方插件实现解析
	console.log(req.body)
	res.send({
		"err": 1,
		"msg": "regist ok"
	})
})

// 监听3000端口开启服务器
app.listen(3000, () => {
	console.log('server start')
})
