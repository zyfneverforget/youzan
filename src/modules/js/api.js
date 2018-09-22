let host = 'http://rap2api.taobao.org/app/mock/7058'
let url = {
	hotLists: '/index/hotLists',
	bannerLists:'/index/banner',
	topLists :'/category/topList',
	subLists : '/category/subList',
	rankLists:'/category/rank',
	searchLists: '/search/list',
	goodsDetails:'/goods/details',
	goodsDeal:'/goods/deal',
	cartAdd: '/cart/add',
	cartLists: '/cart/list',
	cartReduce :'/cart/reduce',
	cartRemove:'/cart/remove',
	cartRemoveAll: '/cart/mrremove',
	addressLists: '/address/list',
  addressAdd: '/address/add',
  addressRemove: '/address/remove',
  addressUpdate: '/address/update',
  addressSetDefault: '/address/setDefault'
}

for(let key in url){
	if(url.hasOwnProperty(key)){
		url[key] = host + url[key]
	}
}

export default url