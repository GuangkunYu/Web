const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')


router.post('/reg', (req, res)=>{
	// 获取数据
	let {us, ps} = req.body
	if(us&&ps){
		User.insertMany({us: us, ps: ps})
		.then(()=>{
			res.send({err: 0, msg:'注册OK'})
		})
		.catch((err)=>{
			res.send({err: -2, msg:'注册err'})
		})
	}else{
		return res.send({err: -1, msg: '参数错误'})
	}
	console.log(us, ps)
	// 数据处理
	// 返回数据
})

router.post('/login', (req, res)=>{
	// 获取数据
	let {us, ps} = req.body
	if(us&&ps){
		User.find({us, ps})
		.then((data)=>{
			if(data.length>0){
				res.send({err: 0, msg:'登录OK'})
			}else{
				res.send({err: -2, msg:'用户名或密码错误'})
			}
		})
		.catch((err)=>{
			res.send({err: -3, msg:'登录err'})
		})
	}else{
		return res.send({err: -1, msg: '参数错误'})
	}
	console.log(us, ps)
	// 数据处理
	// 返回数据
})

module.exports = router