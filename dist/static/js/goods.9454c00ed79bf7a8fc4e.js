webpackJsonp([2],{"+kv8":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(e){return n("div",{staticClass:"swp-page swiper-slide"},[n("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:e.img}}),t._v(" "),n("a",{staticClass:"js-no-follow",attrs:{href:e.clickUrl}})])})),t._v(" "),n("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},AeEs:function(t,e){},AnIW:function(t,e){},Awg1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("DNVT"),a=n("v2ns");n.n(a);e.default={name:"swiper",props:["lists"],mounted:function(){new s.a(".swiper-container",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}})}}},"Do/K":function(t,e){},FFFo:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,s){return n("li",{class:{active:s===t.currentIndex},on:{click:function(n){t.changeNav(e,s)}}},[n("a",[n("i",{class:e.icon}),t._v(" "),n("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]}},GVmt:function(t,e){},HFfA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("AeEs"),a=(n.n(s),n("wI1h")),i=(n.n(a),n("JWK+")),o=(n.n(i),n("pI1A")),r=(n.n(o),n("Do/K")),c=(n.n(r),n("AnIW")),d=(n.n(c),n("d7BR")),u=(n.n(d),n("mtWM")),l=n.n(u),h=n("7+uW"),f=n("TFhR"),p=n("nq5D"),m=(n.n(p),n("mw3O")),g=n.n(m),v=n("NydE"),w=n.n(v),b=g.a.parse(location.search.substring(1)).id;new h.default({el:"#app",data:{id:parseInt(b)||0,goods:null,tabIndex:0,tabName:["商品详情","本店成交"],deal:null,bannerLists:[],skuType:0,showSku:!1,skuNum:1,isAdd:!1,showAddMessage:!1},created:function(){this.getData()},methods:{getData:function(){var t=this;l.a.get(f.a.goodsDetails,{id:this.id}).then(function(e){t.goods=e.data.data,e.data.data.imgs.forEach(function(e){t.bannerLists.push({img:e,clickUrl:""})}),console.log(t.bannerLists)})},changeTab:function(t){this.tabIndex=t,1===t&&this.getDeal(this.id)},getDeal:function(t){var e=this;l.a.get(f.a.goodsDeal,{id:this.id}).then(function(t){e.deal=t.data.data.lists})},chooseType:function(t){this.skuType=t,this.showSku=!0},changeSku:function(t){t<0&&1===this.skuNum||t>0&&this.skuNum>=this.goods.remain||(this.skuNum+=t)},addCart:function(){var t=this;l.a.post(f.a.cartAdd,{id:b,number:this.skuNum}).then(function(e){200===e.status&&(t.showSku=!1,t.showAddMessage=!0,setTimeout(function(){t.showAddMessage=!1},2e3))})}},watch:{showSku:function(t){document.body.style.overflow=t?"hidden":"auto",document.querySelector("html").style.overflow=t?"hidden":"auto",document.body.style.height=t?"100%":"auto",document.querySelector("html").style.height=t?"100%":"auto"}},components:{Swiper:w.a}})},"JWK+":function(t,e){},NydE:function(t,e,n){var s=n("VU/8")(n("Awg1"),n("+kv8"),function(t){n("GVmt")},null,null);t.exports=s.exports},TFhR:function(t,e,n){"use strict";var s={hotLists:"/index/hotLists",bannerLists:"/index/banner",topLists:"/category/topList",subLists:"/category/subList",rankLists:"/category/rank",searchLists:"/search/list",goodsDetails:"/goods/details",goodsDeal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartRemoveAll:"/cart/mrremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var a in s)s.hasOwnProperty(a)&&(s[a]="http://rap2api.taobao.org/app/mock/7058"+s[a]);e.a=s},d7BR:function(t,e){},nq5D:function(t,e,n){var s=n("VU/8")(n("t2Vd"),n("FFFo"),null,null,null);t.exports=s.exports},pI1A:function(t,e){},t2Vd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("mw3O"),a=n.n(s).a.parse(location.search.substring(1)).index,i=[{name:"有赞",icon:"icon-home",href:"/index.html"},{name:"分类",icon:"icon-category",href:"/category.html"},{name:"购物车",icon:"icon-cart",href:"/cart.html"},{name:"我",icon:"icon-user",href:"/member.html"}];e.default={data:function(){return{navConfig:i,currentIndex:parseInt(a)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}}},v2ns:function(t,e){},wI1h:function(t,e){}},["HFfA"]);
//# sourceMappingURL=goods.9454c00ed79bf7a8fc4e.js.map