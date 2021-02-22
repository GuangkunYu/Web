const request = require('request')

request({
    url: 'https://api.douban.com/v2/movie/top250',
    json: true
}, (err, res, body)=>{
    console.log(JSON.stringify(body, null, 2))
})