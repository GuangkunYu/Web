const express = require('express')

const app = express()

// app.get('./user/add', (req, res)=>{
// 	res.send('user/add  ok')
// })

// app.get('./user/del', (req, res)=>{
// 	res.send('user/del  ok')
// })

let userRouter = require('./router/userRouter')

app.use('/user', userRouter)

app.listen(3000, ()=>{
	console.log('service start')
})