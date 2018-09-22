import './cart.css'
import './cart_base.css'
import './cart_trade.css'
import axios from 'axios'
import Vue from 'vue'
import url from 'js/api.js'
import Foot from 'components/Foot.vue'
import qs from 'qs'
import Swiper from 'components/Swiper.vue'
import Cart from 'js/cartServe.js'

let {id} = qs.parse(location.search.substring(1))
let app = new Vue({
	el:'.container',
	data:{
		id : id || null,
		lists: null,
		priceTotal: 0,
		editingShop: null,
		editingShopIndex : -1,
		removePopup: false,
		removeMsg: '',
		removeData: null,
	},
	created(){
		this.getList()
	},
	computed: {
		selectLists(){
			let arr=[]
			let total=0
			if(this.lists && this.lists.length){ 
				this.lists.forEach(shop=>{
					shop.goodsList.forEach(good=>{
						if(good.checked){
							arr.push(good)
							total += good.price * good.number
						}
					})
				})
				this.priceTotal = total
				return arr
			}
			return []
		},
    selectAll: {
      get: function () {
				if(this.lists&&this.lists.length){
					return this.lists.every(shop=>{
						return shop.checked
					})
				}
        return false
      },
      set: function (v) {
        this.lists.forEach(shop =>{
					shop.checked = v
					shop.goodsList.forEach(goods =>{
						goods.checked = v 
					})
				})
      }
		},
		removeLists(){
			let arr=[]
			if(this.editingShop){ 
				this.editingShop.goodsList.forEach(goods=>{
					if(goods.remove){
						arr.push(goods)
					}
				})
				return arr
			}
			return []
		},
		removeAll: {
			get(){
				if(this.editingShop){
					return this.editingShop.remove
				} return false
			},
			set(v){
				if(this.editingShop){
					this.editingShop.remove = v
					this.editingShop.goodsList.forEach(goods=>{
						goods.remove =v
					})
				}
			}
		}
  },
	methods:{
		getList(){
			axios.get(url.cartLists).then(res=>{
				let lists =res.data.cartList
				lists.forEach(shop => {
					shop.checked = false
					shop.editing = false
					shop.editMes = '编辑'
					shop.remove = false
					shop.goodsList.forEach(good=>{
						good.checked = false
						good.remove = false
					})
				})
				this.lists = lists
				console.log(this.id)
			})
		},
		changeShopCheck(shop){
			if(this.editingShop) {
				if(shop.shopId!==this.editingShop.shopId) return
			}
			let attr = shop.editing ? 'remove': 'checked'
			shop[attr] = !shop[attr]
			shop.goodsList.forEach(good=>{
				good[attr] = shop[attr]
			})
		},
		chooseGoods(shop,goods){
			if(this.editingShop	) {
				if(shop.shopId!==this.editingShop.shopId) return
			}
			let arrt = shop.editing ? 'remove': 'checked'
			goods[arrt] = !goods[arrt]
			shop[arrt] = shop.goodsList.every(good=>{
				return good[arrt]
			})
		},
		chooseAll(){
			let attr = this.editingShop ? 'removeAll' : 'selectAll'
			this[attr] = !this[attr]
		},
		edit(shop,shopIndex){
			shop.editing = !shop.editing
			shop.editMes = shop.editing ? '完成' :'编辑' 
			this.editingShop = shop.editing ? shop : null
			this.editingShopIndex = shop.editing ? shopIndex : -1
			this.lists.forEach((item,index)=>{
				if(index !==shopIndex){
					item.editing = false
					item.editMes = shop.editing ? '': '编辑'
				}
			})
		},
		addGoods(goods){
			Cart.add(goods.id).then(res=>{
				goods.number++
			})
		},
		reduceGoods(goods){
			if(goods.number<=1) return
			Cart.reduce(goods.id).then(res=>{
				goods.number--
			})
		},
		remove(shop,shopIndex,goods,goodsIndex){
			this.removePopup = true 
			this.removeData = {shop,shopIndex,goods,goodsIndex}
			this.removeMsg = '确定要删除该商品吗？'
		},
		removeConfirm(){
			if(this.removeMsg === '确定要删除该商品吗？'){
				axios.post(url.cartRemove,{
					id: this.removeData.goods.id
				}).then(res=>{
					this.removeData.shop.goodsList.splice(this.removeData.goodsIndex,1)
					if(this.removeData.shop.goodsList.length===0){
						this.removeShop(this.removeData.shopIndex)
					}
					this.removePopup = false
					this.removeData = null
				})
			}else{
				let ids = [] 
				this.removeLists.forEach(goods=>{
					ids.push(goods.id)
				})
				axios.post(url.removeAllGoods,{
					ids
				}).then(()=>{
					let arr =[]
					this.editingShop.goodsList.forEach(goods=>{
						let index = this.removeLists.findIndex(item=>{
							return item.id === goods.id
						})
						if(index!==-1){
							arr.push(goods)
						}
					})
					if(arr.length){
						this.editingShop.goodsList = arr
					} else{
						this.removeShop(this.shopIndex)
						this.removePopup = false
					}
				})
			}
		},
		removeShop(index){
			this.lists.splice(index,1)
			this.editingShop=null
			this.editingShopIndex= -1
			this.lists.forEach(shop=>{
				shop.editMes = '编辑'
			})
		},
		removeAllGoods(){
			this.removeData = this.removeLists
			this.removePopup = true 
			if(this.removeLists.length===1){
				this.removeMsg = '确定要删除该商品吗？'
			}else{
				this.removeMsg = `确定将所选 ${this.removeLists.length} 个商品删除？`
			}
		}
	},
	watch:{
		removePopup(val){
			 document.body.style.overflow = val ? 'hidden': 'auto'
			 document.querySelector('html').style.overflow = val ? 'hidden': 'auto'
			 document.body.style.height = val ? '100%': 'auto'
			 document.querySelector('html').style.height = val ? '100%': 'auto'
		}
	},
})
