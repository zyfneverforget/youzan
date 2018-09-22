import 'css/common.css'
import './category.css'
import axios from 'axios'
import Vue from 'vue'
import url from 'js/api.js'
import Foot from 'components/Foot.vue'

let app =new Vue({
	el: '#app',
	data:{
		topLists: null,
		topIndex:0,
		rankLists: null,
		hotShops: null,
		hotKeywords: null,
		brandLists: null,
		categoryLists: null,
	},
	created(){
		this.getToplists()
		this.getRank()
	},
	methods:{
		getToplists(){
			axios.get(url.topLists).then((res)=>{
				this.topLists = res.data.lists
				console.log(this.topLists)
			})
		},
		getRank(){
			axios.get(url.rankLists).then(res=>{
				this.rankLists = res.data.data.hotGoods
				this.hotShops = res.data.data.hotShops
				this.hotKeywords = res.data.data.hotKeywords
			})
		},
		getSubLists(index){
			if(index===0){
				this.topIndex = index	
			} else{
				axios.get(url.subLists,{
					id: index
				}).then(res =>{
					this.topIndex = index
					this.brandLists = res.data.data.brandList
					this.categoryLists = res.data.data.categoryList
				})
			}
		},
		goSearch(id,keyword){
			location.href = `search.html?id=${id}&keyword=${keyword}`
		},
		toDetail(id){
			location.href = `goods.html?id=${id}`
		},
	},
	components:{
		Foot,
	}
})