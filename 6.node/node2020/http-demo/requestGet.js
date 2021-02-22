const https = require('https');

const options = {
  hostname: 'api.douban.com',
  port: 443,
  path: '/v2/movie/top250',
  method: 'GET'
};

const req = https.request(options, (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);

  res.setEncoding('utf-8');
  res.on('data', (d) => {
    console.log(d)
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();