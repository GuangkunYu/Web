# Vue.js

- 渐进式web框架

### 一、安装方式
1. CDN
```html
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```
2. 下载文件引入
```html
<script src="js/vue.min.js" type="text/javascript" charset="utf-8"></script>
```
3. npm安装

### 二、语法基础
#### 1. 声明式渲染（文本插值）
> - 响应式的
> - 一个 Vue 应用会将其挂载到一个 DOM 元素上 (对于这个例子是 #app) 然后对其进行完全控制。那个 HTML 是我们的入口，但其余都会发生在新创建的 Vue 实例内部。
```html
<div id="app">
  {{ message }}
</div>
```
```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

#### 2. 基础指令
- 指令带有前缀 `v-`

##### （1）v-bind
> - 绑定元素属性
> - 缩写  :属性
```html
<div id="app-2">
    <span v-bind:title="message">
   <!--  <span :title="message"> -->
	    鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
</div>
```
```js
var app2 = new Vue({
    el: '#app-2',
    data: {
		message: '页面加载于 ' + new Date().toLocaleString()
    }
})
```


##### (2) v-html
> - 解析带标签的字符串
> - 防止XSS,CSRF
> - 前端过滤
> - 后台转义（< > \&lt; \&gt;）
> - 给cookie加上属性http
```html
<div id="app">
	{{ message }}
	<p v-html="message"></p>
</div>
```
```js
new Vue({
		el: '#app',
		data: {
			message: '<h2>hello vue.js!</h2>'
		}
	})
```

##### (3) v-show
> 动态显示隐藏
```html
<div id="app1">
	<div v-show="isShow">动态显示和隐藏</div>
</div>
```
```js
const app1 = new Vue({
	el: '#app1',
	data: {
		isShow: true
	}
})
```

##### (4) v-if  v-else  v-else-if
> - 条件判断,渲染
> - 动态创建和删除节点
```html
<div id="app1">
	<div v-if="isCreate">动态创建和删除</div>
</div>
```
```js
const app1 = new Vue({
	el: '#app1',
	data: {
		isCreate: true
	}
})
```

##### (5) v-for
> 循环
```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```
```js
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
```

##### (6) v-on
> 添加事件监听器，通过它调用vue实例中定义的方法
> - 缩写 @
```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">反转消息</button>
  <!-- <button @click="reverseMessage">反转消息</button> -->
</div>
```
```js
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```

##### (7)v-model
> 实现表单输入和应用状态之间的双向绑定
```html
<div id="app">
	<p>{{ msg }}</p>
	<input type="text" v-model="msg"/>
</div>
```
```js
const app = new Vue({
	el:'#app',
	data:{
		msg:'hello world!'
	}
})
```


#### 3. 生命周期钩子
> 生命周期钩子的函数，给了用户在不同阶段添加自己的代码的机会

##### (1)  created 钩子
> - 可以用来在一个实例被创建之后执行代码
> - 生命周期钩子的 this 上下文指向调用它的 Vue 实例
```js
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
```
##### (2) mounted  updated  destroyed


#### 4、计算属性
> - computed
> - 依赖的状态改变，计算属性会重新计算一遍
> - 计算属性会缓存

#### 5、组件
> - 扩展HTML元素，封装可重用的代码
> - 全局组件 `Vue.component`
> - 局部组件

5.1 组件与实例的区别
> - 自定义组件需要一个root element
> - 父子组件的data无法共享
> - 组件可以有data，methods，computed...但是data必须是一个函数