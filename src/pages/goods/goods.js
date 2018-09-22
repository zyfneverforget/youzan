import './goods.css'
import './goods_base.css'
import './goods_common.css'
import './goods_custom.css'
import './goods_sku.css'
import './goods_theme.css'
import './goods_mars.css'
import axios from 'axios'
import Vue from 'vue'
import url from 'js/api.js'
import Foot from 'components/Foot.vue'
import qs from 'qs'
import Swiper from 'components/Swiper.vue'

let {id} = qs.parse(location.search.substring(1))
let tabName = ['商品详情','本店成交']
let app =new Vue({
	el: '#app',
	data:{
		id: parseInt(id) || 0,
		goods: null,
		tabIndex: 0,
		tabName,
		deal: null,
		bannerLists: [],
		skuType: 0,
		showSku: false,
		skuNum: 1,
		isAdd: false,
		showAddMessage: false
	},
	created(){
		this.getData()
	},
	methods:{
		getData(){
			axios.get(url.goodsDetails,{
				id: this.id
			}).then(res=>{
				this.goods = res.data.data
				res.data.data.imgs.forEach((item)=>{
					this.bannerLists.push({
						img: item,
						clickUrl: ''
					})
				})
				console.log(this.bannerLists)
			})
		},
		changeTab(index){
			this.tabIndex = index
			if(index === 1){
				this.getDeal(this.id)
			}
		},
		getDeal(id){
			axios.get(url.goodsDeal,{
				id: this.id
			}).then(res=>{	
			this.deal = res.data.data.lists
			})
		},
		chooseType(index){
			this.skuType = index
			this.showSku = true
		},
		changeSku(num){
			if(num<0 && this.skuNum===1) return
			if(num>0 && this.skuNum>=this.goods.remain) {
				return
			}
			this.skuNum += num
		},
		addCart(){
			axios.post(url.cartAdd,{
				id,
				number: this.skuNum
			}).then(res=>{
				if(res.status===200){
					this.showSku = false
					this.showAddMessage = true
					setTimeout(() => {
						this.showAddMessage = false
					}, 2000);
				}
			})
		}
	},
	watch:{
		showSku(val){
			 document.body.style.overflow = val ? 'hidden': 'auto'
			 document.querySelector('html').style.overflow = val ? 'hidden': 'auto'
			 document.body.style.height = val ? '100%': 'auto'
			 document.querySelector('html').style.height = val ? '100%': 'auto'
		}
	},
	components:{
		Swiper
	}
})