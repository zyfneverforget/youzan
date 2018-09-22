<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swp-page swiper-slide" v-for="list in lists">
				<img class="goods-main-photo fadeIn" :src="list.img" >
				<a class="js-no-follow" :href="list.clickUrl"></a>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>
<style>
 .swiper-slide img,
 .swiper-slide a
 .swiper-container{
	 height: 100%;
	 width: 100%;
 }
</style>

<script> 
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
	name: 'swiper',
	props: ['lists'],
	mounted(){
		new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
	}
}
</script>

