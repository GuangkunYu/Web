<template>
	<div>
		<h2 class="title">{{message}}</h2>
		<button @click="btnClick">按钮</button>
		<h2>{{name}}</h2>
	</div>
</template>

<script>
	export default {
		name:'App',
		data(){
			return{
				message: 'hello webpack',
				name: 'codewhy'
			}
		},
		methods:{
			btnClick(){
				console.log('被点击了')
			}
		}
	}
</script>
	
<style>
	.title{
		color: greenyellow;
	}
</style>
