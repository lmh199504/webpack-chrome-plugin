<template>
	<div class="title" @click="navAbout">home</div>
	<div class="">
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

<style scoped>
	.title{
		font-size: 14px;
		font-weight: bold;
	}
</style>