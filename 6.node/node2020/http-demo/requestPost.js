const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
    'question[title]': 'css外部文件如何导入',
    'question[content]': '<p>css外部文件如何导入</p>',
    'question[courseId]': '227',
    'question[lessonId]': '1753',
    '_csrf_token': 'def34c34d3e4a3b99b1e727d9bbaecaef7eb17e0'
});

const options = {
  hostname: 'www.codingke.com',
  port: 80,
  path: '/ajax/create/course/question',
  method: 'POST',
  //添加header头
};

const req = http.request(options, (res) => {
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