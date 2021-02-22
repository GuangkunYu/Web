# Node.js学习文档

> - [Node.js官网链接](http://nodejs.cn/)
> - [npm插件官网](https://www.npmjs.com/)

## 一、Node.js初识

### 1.what
- Chrome V8 runtime
- 事件驱动
- 非阻塞的i/o
	- i/o：input output 输入输出流，
	- 正常情况下i/o操作都是阻塞的（Ajax的同步）
	- 网络请求、数据库处理、文件的读写...(都是阻塞的)

优点：高并发特别好

### 2.why
1. 防止甩锅，明确数据交互的错误问题在谁
2. 能够书写api
3. 了解前后端的交互流程
4. 全栈

### 3.API接口

### 4.js运行环境
- 浏览器
	- 基本语法
	- BOM
	- DOM
	- Ajax
	- 系统文件数据库（不能，不是语言不能，处于安全性考虑不能）
- 服务器
	- 基本语法
	- 能操作数据库
	- 能操作本地文件

> 限制语言能力的不是语言本身，而是语言的运行环境（平台）

### 5.nvm下载使用
> node.js版本管理器
1. 下载[nvm](https://github.com/coreybutler/nvm-windows/releases)安装
2. 配置nvm下载源
	1. setting文件中加入下面两行
	2. `node_mirror: npm.taobao.org/mirrors/node/`
	3. `npm_mirror: npm.taobao.org/mirrors/npm/`
2. 安装node.js
	1. `nvm install 14.15.4`
	2. `nvm use 14.15.4`

### 6.node运行环境 REPL
- 直接在命令行写代码
- 写在js文件中，使用`node + 文件路径`执行

### 7.模块化
- 内置模块（node中提供的可以直接调用）
	- 文件操作
- 第三方模块
- 自定义模块
	- 创建一个模块（一个js文件就是一个模块）
	- 导出一个模块（`module.exports=name`）
	- 引用一个模块并且调用

#### （1）打印当前目录的目录树
1. 实现的效果
2. 分析功能点
	- 当前目录结构
	- 分辨是文件还是文件夹

```js
// 引入一个内置模块
const fs = require('fs')

// 同步读取文件
try{
	let dirs = fs.readdirSync('../')
	console.log(dirs)
}catch(err){
	console.log('读取错误')
}

// 异步读取文件
// 错误的回调优先，在回调函数中第一个参数表示错误对象，默认为null, 如果出现错误，就是错误对象
fs.readdir('../', (err, files)=>{
	if(err){
		console.log('读取错误')
	}else{
		console.log(files)
	}
})
```

## 二、MongoDB
1. [下载](https://www.mongodb.com/try/download/community) 
2. 点击安装
	1. 不选最后一个对号
	2. 缺少数据库文件 Data directory D:\\data\\db\\ not found. Create the missing directory
	3. 不是内部命令 需要设置环境变量bin目录，或者在安装目录的bin目录下打开cmd

### 1.指令
- mongodb	数据库名
- mongod	命令行启动数据库命令
- mongo		命令行操作数据库指令
- mongoose	node操作数据库的插件