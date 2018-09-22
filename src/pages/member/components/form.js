import Address from 'js/addressService.js'

export default {
	data(){
		return{
			address: null,
			name: '',
			cityName: null,
			cityValue: -1,
			districtValue: -1,
			districtName: null,
			isDefault: false,
			id: '',
			provinceValue: -1,
			provinceName: '',
			tel: '',
			type:'',
			instance: null,
			addressData: require('js/address.json'),
			cityLists: null,
			districtLists: null,
			editing: false,
		}
	},
	created(){
		this.type = this.$route.query.type
		this.instance = this.$route.query.instance
		if(this.type==='edit'){
			let ad = this.instance
			this.provinceValue = parseInt(ad.provinceValue)
			this.name = ad.name 
			this.cityValue = parseInt(ad.cityValue)
			this.tel = ad.tel
			this.address = ad.address
			this.id = ad.id
			this.districtValue = parseInt(ad.districtValue)
			this.editing = true
		}
	},
	watch:{
		provinceValue(val){
			if(val===-1) return
			let list = this.addressData.list
			let index = list.findIndex(item=>{
				return item.value === val
			})
			this.cityLists = list[index].children || null
			this.cityValue = -1
			this.districtValue = -1
			if(this.editing){
				this.cityValue = parseInt(this.instance.cityValue)
			}
		},
		cityValue(val){
			if(val===-1) return
			let list = this.cityLists
			let index = list.findIndex(item=>{
				return item.value === val
			})
			this.districtLists = list[index].children || null
			this.districtValue = -1
			if(this.editing){
				this.districtValue = parseInt(this.instance.districtValue)
				this.editing = false
			}
		}
	},
	methods:{
		add(){
			let {address,name,cityValue,districtValue,isDefault,provinceValue,tel} = this
			let data =  {address,name,cityValue,districtValue,isDefault,provinceValue,tel}
			if(this.type ==='add'){
				Address.add(data).then(res=>{
					alert('保存成功')
					this.$router.go(-1)
				})
			}else{
				Address.updata(data).then(res=>{
					this.$router.go(-1)
				})
			}
		},
		remove(){
			if(window.confirm()){
				Address.remove(this.id).then(res=>{
					this.$router.go(-1)
				})
			}
		},
	},
}

