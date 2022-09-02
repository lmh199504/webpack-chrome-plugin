<template>
	<div class="loadingBox">
		<div class="loader-ring">
			<div class="loader-ring-light"></div>
			<div class="loader-ring-track"></div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.loadingBox {
	    width: 100%;
	    height: 100%;
	    position: fixed;
	    left: 0;
	    top: 0;
	    z-index: 990;
	    display: block;
	    background-color: #3d4247;
	}
	.loader-ring {
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    margin: -120px 0 0 -120px;
	    z-index: 992;
	    width: 240px;
	    height: 240px;
	}
	.loader-ring-light {
	    width: 240px;
	    height: 240px;
	    border-radius: 240px;
	    box-shadow: 0 4px 0 #00abf2 inset;
	    animation: rotate-360 2s linear infinite;
	}
	.loader-ring-track {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 240px;
	    height: 240px;
	    border-radius: 240px;
	    box-shadow: 0 0 10px 4px rgb(0 0 0 / 30%) inset;
	}
	@keyframes rotate-360 {
	    from {
	        transform: rotate(0);
	    }
	    to {
	        transform: rotate(360deg);
	    }
	}
</style>