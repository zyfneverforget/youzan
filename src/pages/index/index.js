import 'css/common.css'
import './index.css'
import axios from 'axios'
import Vue from 'vue'
import url from 'js/api.js'
import {InfiniteScroll}from 'mint-ui'
import Foot from 'components/Foot.vue'
import Swiper from 'components/Swiper.vue'
/* import VConsole from 'vconsole' */

Vue.use(InfiniteScroll)
let app =new Vue({
	el: '#app',
	data: {
		lists: null,
		pageNum: 1,
		pageSize: '6',
		loading: false,
		allDone: false,
		bannerLists: null, 
	},
	created(){
		this.getList()
		this.getBanner()  
	},
	methods:{
		getList(){
			if(this.allDone) return
			this.loading = true
			axios.get(url.hotLists,{
				pageNum: this.pageNum,
				pageSize: this.pageSize,
			}).then((res)=>{
				let currentList = res.data.lists
				if(currentList.length<this.pageSize){
					this.allDone = true
				}
				if(this.lists){
					this.lists = this.lists.concat(currentList)
				} else {
					//初始化
					this.lists = currentList
				}
				this.pageNum++
				this.loading = false
			})
		},
		getBanner(){
			axios.get(url.bannerLists).then((res)=>{
				this.bannerLists = res.data.lists
			})
		},
		toDetail(id){
			location.href = `goods.html?id=${id}`
		}
	},
	components:{
		Foot,
		Swiper
	}
})