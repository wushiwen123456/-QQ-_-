<template>
	<view class="top-bar">
		<view class="logo">
			<slot />
		</view>
		<view class="text">
			<view class="title">QQ音乐</view>
			<view class="title-fu">打开APP收藏下载</view>
		</view>
		<view class="down-load">
			<button plain="true" class="button">下载app</button>
		</view>
	</view>
</template>
	
<script>
	export default{
		name:"TopBar",
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.top-bar{
		display: flex;
		height: 108upx;
		padding: 0 32upx;
		align-items: center;
	}
	.text{
		width: 65%;
	}
	.down-load{
		
	}
	.button{
		font-size: 26upx;
	}
	.title{
		font-size: 32upx;
		color: #000;
		font-weight: 400;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.title-fu{
		color: grey;
		font-size: 24upx;
	}
</style>
