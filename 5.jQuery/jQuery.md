# jQuery
## 一、jQuery初识
### 1.什么是jQuery
1. 一个快速、简洁的JavaScript框架；
2. 设计宗旨：write less ， do more
3. 兼容各种主流浏览器

### 2.jQuery的好处
1. 简化js的复杂操作
2. 不再需要关系兼容性
3. 提供大量实用方法

### 3.jQuery版本区别
- 1.0	可以兼容到IE8以下
- 2.0	只兼容IE8以上
- 3.0

### 4.设计思想
#### （1）选择网页元素
1. 模拟css选择网页元素
```js
window.onload = function(){
	$('#div1').css('background', 'red');
	$('.box').css('background', 'red');
	$('ul li').css('background', 'blue');
	$('[name=hello]').css('background', 'yellow');
}
```
2. 独有表达式选择
```js
window.onload = function(){
	// $('li').css('background', 'red');
	
	// 表达式写法
	// $('li:first').css('background', 'red');
	// $('li:last').css('background', 'red');
	
	// 高级写法
	$('li:even').css('background', 'red');
	$('li:odd').css('background', 'yellow');
	$('li:eq(2)').css('background', 'blue');
}
```
3. 多种筛选方法
```js
window.onload = function(){
	// $('li:eq(2)').css('background', 'red');
	// $('li').eq(2).css('background', 'red');
	
	// $('li.box').css('background', 'blue');
	$('li').filter('.box').css('background', 'yellow');
}
```

#### （2）jQuery写法
1. 方法函数化
	1. 在jQuery中基本见不到等于号，所有的赋值操作都是函数传参的操作
```js
$(function(){
	$('h1').click(function(){
		alert('我被点击了')
	});
	
	$('h1').mouseover(function(){
		this.style.backgroundColor = 'red'
	});
	
	$('h1').mouseout(function(){
		this.style.backgroundColor = 'yellow'
	})
})
```
2. 链式操作
```js
$(function(){
	$('h1').click(function(){
		alert('单击')
	})
	.css('background', 'orange')
	.mouseover(function(){
		this.style.backgroundColor = 'red'
	})
	.mouseout(function(){
		this.style.backgroundColor = 'yellow'
	})
})
```
3. 取值赋值合体
```js
$(function(){
	console.log($('#div1').html())
	$('#div1').html('<h1>我是新赋值的内容</h1>')
	
	console.log($('input').val())
	$('input').val('world hello')
})
```

### 5.jQuery和js的关系
- 可以共存，不能混用


## 二、jQuery常用方法
### 1.filter not has方法
```html
<div class="box">div1</div>
<div>div2 <strong class="box"></strong></div>
```
```js
/* 
	filter 过滤 对已经获取到的网页元素进行过滤
	not filter的反义词
	has 拥有，直接判定子节点是否有符合条件的元素
*/
$(function(){
	$('div').filter('.box').css('background', 'yellow');
	$('div').not('.box').css('background', 'red');
	$('div').has('.box').css('background', 'orange');
})
```

### 2.prev next方法
```js
/* 
	prev 查找当前兄弟节点中的上一个节点
	next 查找当前兄弟节点中的下一个节点
*/
$(function(){
	$('h3').prev().css('background', 'red')
	$('h3').next().css('background', 'yellow')
})
```

### 3.find方法
```js
/* 
	find 查找子节点
*/
$(function(){
	$('ul').find('li').css('background', 'red');
	$('ul').find('[class=box]').css('background', 'yellow');
	$('ul').find('[name=hello]').css('background', 'blue');
})
```

### 4.eq index方法
```js
/* 
	index() 获取当前节点在兄弟节点中的下标
	eq() 通过下标来获取指定的元素节点
*/
$(function(){
	console.log($('h3').index());
	$('li').eq(3).css('background', 'red');
	$('li:eq(4)').css('background', 'yellow')
})
```

### 5.attr方法
```js
/* 
	attr 设置和修改行间属性
*/
$(function(){
	console.log($('#div1').attr('id'));
	console.log($('#div1').attr('title'));
	
	$('#div1').attr('class', 'box22');
	console.log($('#div1').attr('class'));
		
	$('#div1').attr({
		title: 'world',
		class: 'xxx',
		yyy: 'zzz'
	})
})
```

### 6.addClass() removeClass()
```js
/* 
	addClass()
	removeClass()
	【注】操作class属性
*/
$(function(){
   $('#div1').addClass('box2 box3 box4');
   $('#div1').removeClass('box2 box3');
})
```

### 7.width height系列方法
```js
/* 
	width系列三个方法：
		width()
		innerWidth()
		outerWidth()
	height系列三个方法
		height()
		innerHeight()
		outerHeight()
*/
$(function(){
   // console.log($('#div1').css('width'))	//100px
   console.log($('#div1').width())	//100
   console.log($('#div1').innerWidth())  //116 width+padding
   console.log($('#div1').outerWidth())  //118  width+padding+border
   console.log($('#div1').outerWidth(true))  //158  width+padding+border+margin
})
```

### 8.节点操作方法
```js
/* 
	insertBefore()	before()
	insertAfter()	after()
	appendTo() 插到子节点的末尾	appendChild(类似js方法)	append()
	prependTo()		prepend()
	remove()
*/
$(function(){
	// 找到span节点插入到div的前面
	$('span').insertBefore($('div')).css('background', 'red')
	// div节点前面是span
	// $('div').before($('span')).css('background', 'red')
	
	// 找到div节点插入到span的前面
	// $('div').insertAfter($('span'))
	
	// 找到span节点插入到div节点的子节点的末尾
	// $('span').appendTo($('div'))
	
	// 找到span节点插入到div节点的子节点的首位
	// $('span').prependTo($('div'))
	
	// $('div').remove()
})
```

### 9.on和off事件绑定
```html
<div id="div1"></div>
<ul>
	<li>111</li>
	<li>222</li>
	<li>333</li>
	<li>444</li>
	<li>555</li>
</ul>
<button type="button" id="btn1">增加节点</button>
<button type="button" id="cancel">取消事件</button>
```
```js
/* 
	$().click(function(){})
	
	on和off方法
	
*/
$(function() {
	// 1.给一个事件添加一个函数
	/* $('#div1').on('click', function() {
		alert('hello')
	}) */
	
	// 2.同时给多个事件添加一个函数，多个事件之间可以通过空格隔开
	/* let i = 0;
	$('#div1').on('click mouseover', function() {
		$(this).html(i++)
	}) */
	
	// 3.给不同的时间添加不同的函数
	$('#div1').on({
		click: function(){
			alert('点击')
		},
		mouseover: function(){
			$(this).css('background', 'orange')
		},
		mouseout: function(){
			$(this).css('background', 'blue')
		}
	});
	
	// 4.事件委托
	$('ul').on('click', 'li', function() {
		$(this).css('background', 'blue')
	});
	
	let i = 6;
	$('#btn1').click(function(){
		//新增li节点
		$(`<li>${i++ * 111}</li>`).appendTo($('ul'))
	})
	
	// off
	$('#cancel').click(function(){
		// $('#div1').off()	// 取消所有事件上的所有函数
		$('#div1').off('click')	// 取消某一个事件下的所有函数
		// $('#div1').off('click', show)	// 取消某一个事件下的某一函数
	})
	
	/* $('#div1').click(function(){
	   alert(1)
   })
   $('#div1').click(function(){
	   alert(2)
   }) */
})
```

### 10.scrollTop
```js
$(function(){
	$(document).click(function(){
		alert($(window).scrollTop()) // 输出滚动高度
	})
})
```

### 11.事件细节
```js
/* 
	【注】 都是兼容后的
	ev	pageX
	which：
		鼠标事件：button
			1 左键
			2 滚轮
			3 右键
		keydown：keyCode键码
		keypress: charCode字符码
	preventDefault	stopPropagation
*/
$(function(){
	$(document).click(function(ev){
		console.log(ev.pageX + ',' + ev.pageY)	// 带滚动距离的
		console.log(ev.clientX + ',' + ev.clientY)	// 可视窗口为原点
	})
	/* $('div').click(function(ev){
		ev.stopPropagation();
		console.log(this.id)
	}) */
	$('a').click(function(ev){
		/* ev.preventDefault();
		ev.stopPropagation(); */
		// 既阻止事件冒泡，又阻止是默认行为
		return false;
	})
})
```

### 12.offset和position
```js
/* 
	offset():直接获取当前元素，距离最左边的距离，margin不算数
	position()：直接获取当前元素距离第一个有定位父节点的距离，margin算在内
	offsetParent()：查找第一个有定位的父节点，如果父节点没有定位就继续往上找，最终找到HTML节点
*/
$(function(){
   console.log($('#div2').offset())
   console.log($('#div2').position())
})
```