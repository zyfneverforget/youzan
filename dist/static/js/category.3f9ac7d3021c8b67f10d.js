webpackJsonp([6],{"035s":function(t,e){},FFFo:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,s){return a("li",{class:{active:s===t.currentIndex},on:{click:function(a){t.changeNav(e,s)}}},[a("a",[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]}},Hwmd:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("035s"),n=(a.n(s),a("igmb")),o=(a.n(n),a("mtWM")),r=a.n(o),i=a("7+uW"),d=a("TFhR"),c=a("nq5D"),l=a.n(c);new i.default({el:"#app",data:{topLists:null,topIndex:0,rankLists:null,hotShops:null,hotKeywords:null,brandLists:null,categoryLists:null},created:function(){this.getToplists(),this.getRank()},methods:{getToplists:function(){var t=this;r.a.get(d.a.topLists).then(function(e){t.topLists=e.data.lists,console.log(t.topLists)})},getRank:function(){var t=this;r.a.get(d.a.rankLists).then(function(e){t.rankLists=e.data.data.hotGoods,t.hotShops=e.data.data.hotShops,t.hotKeywords=e.data.data.hotKeywords})},getSubLists:function(t){var e=this;0===t?this.topIndex=t:r.a.get(d.a.subLists,{id:t}).then(function(a){e.topIndex=t,e.brandLists=a.data.data.brandList,e.categoryLists=a.data.data.categoryList})},goSearch:function(t,e){location.href="search.html?id="+t+"&keyword="+e},toDetail:function(t){location.href="goods.html?id="+t}},components:{Foot:l.a}})},TFhR:function(t,e,a){"use strict";var s={hotLists:"/index/hotLists",bannerLists:"/index/banner",topLists:"/category/topList",subLists:"/category/subList",rankLists:"/category/rank",searchLists:"/search/list",goodsDetails:"/goods/details",goodsDeal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartRemoveAll:"/cart/mrremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var n in s)s.hasOwnProperty(n)&&(s[n]="http://rap2api.taobao.org/app/mock/7058"+s[n]);e.a=s},igmb:function(t,e){},nq5D:function(t,e,a){var s=a("VU/8")(a("t2Vd"),a("FFFo"),null,null,null);t.exports=s.exports},t2Vd:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mw3O"),n=a.n(s).a.parse(location.search.substring(1)).index,o=[{name:"有赞",icon:"icon-home",href:"/index.html"},{name:"分类",icon:"icon-category",href:"/category.html"},{name:"购物车",icon:"icon-cart",href:"/cart.html"},{name:"我",icon:"icon-user",href:"/member.html"}];e.default={data:function(){return{navConfig:o,currentIndex:parseInt(n)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}}}},["Hwmd"]);
//# sourceMappingURL=category.3f9ac7d3021c8b67f10d.js.map