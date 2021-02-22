const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost/1902', { useUnifiedTopology: true,  useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('db ok!')
});

// scheme对象
// 创建一个和集合相关的scheme对象 类似表头
var Schema = mongoose.Schema;
// 获取scheme对象
var userSchema = new Schema({
    us:  {type: String, require:true},
    ps: {type: String, require:true},
    age:   Number,
    sex: { type: Number, default: 0 },
    date: { type: Date, default: Date.now }
});
// 将scheme对象转化为数据模型
var User = mongoose.model('user', userSchema);
// 操作数据库
// 插入数据
User.insertMany({us:'wangyi', ps:'124', age:16})
.then((data)=>{
	console.log(data)
	console.log('插入成功')
})
.catch((err)=>{
	console.log('插入失败')
})

// 查询
// User.find()
// .then((data)=>{
// 	console.log(data)
// 	console.log('查询成功')
// })
// .catch((err)=>{
// 	console.log('查询失败')
// })

// 更新
// User.remove()
// .then((data)=>{
// 	console.log(data)
// 	console.log('删除成功')
// })
// .catch((err)=>{
// 	console.log('删除失败')
// })