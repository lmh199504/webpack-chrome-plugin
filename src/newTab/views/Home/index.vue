<template>
	<!-- <div class="title" @click="navAbout">home</div> -->
	<div class="images">
		<img src="@newTab/static/images/bg.jpg" alt="">
	</div>
</template>

<script setup>
	import { useRouter } from 'vue-router'
	const router = useRouter()
	function navAbout() {
		router.push('/about')
	}
</script>

<style scoped lang="less">
	.title{
		font-size: 14px;
		font-weight: bold;
	}
	.images{
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		img{
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}
</style>