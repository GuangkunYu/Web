/* 
	爬虫
		1. 获取目标网站 http.get()
		2. 分析网站内容 cheerio 可以使用jq里的选择器
		3. 获取有效信息，下载或者其他操作
*/
const https = require('https')

https.get('https://www.baidu.com/', (res) => {
	// 数据分段，只要接收数据就会触发data事件，chunk每次接受的数据片段
	res.on('data', (chunk)=>{
		console.log('数据传输')
		console.log(chunk.toString('utf8'))
	})
	// 数据流传输完毕
	res.on('end', (chunk)=>{
		console.log('数据传输完毕')
	})
}).on("error", (err)=>{
	console.log('请求错误')
})