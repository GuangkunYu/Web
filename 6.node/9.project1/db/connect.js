const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost/1902', { useUnifiedTopology: true,  useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('db ok!')
});