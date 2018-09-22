import 'css/common.css'
import './search.css'
import axios from 'axios'
import Vue from 'vue'
import url from 'js/api.js'
import {InfiniteScroll}from 'mint-ui'
import Foot from 'components/Foot.vue'
import Swiper from 'components/Swiper.vue'
import qs from 'qs'
import Velocity from 'velocity-animate'
/* import vConsole from 'vconsole' */

Vue.use(InfiniteScroll);
let {id,keyword} = qs.parse(location.search.substring(1))

let app =new Vue({
	el:'.container',
	data:{
		searchList: null,
		pageNum: 1,
		pageSize: 8,
		id: parseInt(id) || 0,
		keyword,
		loading: true,
		allDone: false,
		isShow: false,
	},
	created(){
		this.getList()
	},
	methods:{
		getList(){
			if(this.allDone) return
			this.loading = true
			axios.get(url.searchLists,{
				pageNum: this.pageNum,
				pageSize: this.pageSize,
			}).then((res)=>{
				let currentList = res.data.lists
				if(currentList.length<this.pageSize){
					this.allDone = true
				}
				if(this.searchList){
					this.searchList = this.searchList.concat(currentList)
				} else {
					//初始化
					this.searchList = currentList
				}
				this.pageNum++
				this.loading = false
			})
		},
		toDetail(id){
			location.href = `goods.html?id=${id}`
		},
		move(){
	
			if(document.documentElement.scrollTop>50||document.body.scrollTop>50){
				this.isShow =true
			} else{
				this.isShow = false
			}
		},
		toTop(){
			Velocity(document.body,'scroll',{duration: 300})
		}
	}
})
