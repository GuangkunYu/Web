const mongoose = require('mongoose');
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

module.exports = User