<template>
	<div class="bottom-nav">
		<ul>
			<li :class="{active:index===currentIndex}" v-for="list,index in navConfig" @click="changeNav(list,index)">
				<a><i :class="list.icon"></i>
					<div>{{list.name}}</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import qs from 'qs'
let {index} = qs.parse(location.search.substring(1))

let navConfig = [
	{
		name:'有赞',
		icon:'icon-home',
		href:'/index.html',
	},{
		name:'分类',
		icon:'icon-category',
		href:'/category.html',
	},{
		name:'购物车',
		icon:'icon-cart',
		href:'/cart.html',
	},{
		name:'我',
		icon:'icon-user',
		href:'/member.html',
	}]
export default {
	data(){
		return {
			navConfig,
			currentIndex : parseInt(index) || 0
		}
	},
	methods:{
		changeNav(list,index){
			location.href = `${list.href}?index=${index}`
		}
	}
}
</script>
