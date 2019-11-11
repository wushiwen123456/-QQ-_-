<template>
	<view class="song-bg">
		<scroll-view class="player" scroll-y="true">
			<view class="player-pointer">
				<image src="../../static/detail/cm2_play_needle_play-ip6@2x.png" mode="aspectFit"></image>
			</view>
			<view class="player-disc running">
				<image src="../../static/detail/disc.png" mode="aspectFit"></image>
				<image src="../../static/detail/disc_light-ip6.png" mode="aspectFit"></image>
				<image :src="imgUrl" mode="aspectFit" class="albumid"></image>
			</view>
		</scroll-view>
		<view class="operation">
			<view class="song-actions">
				<view><image src="../../static/detail/cm2_play_icn_love@2x.png" mode=""></image></view>
				<view><image src="../../static/detail/cm2_play_icn_dld@2x.png" mode=""></image></view>
				<view><image src="../../static/detail/cm2_play_icn_cmt_num@2x.png" mode=""></image></view>
				<view><image src="../../static/detail/cm2_play_icn_more@2x.png" mode=""></image></view>
			</view>
			<view class="song-progress">
				<text class="cur-time">00:00</text>
				<slider @change="" style="width: 100%;" activeColor="#d33a31" backgroundColor="rgba(255, 255, 255, 0.2)" 
						min="0" max="100" block-size="12" block-color="#fff" class="song-slider" />
				<text class="total-time">00:00</text>
			</view>
			<view class="play-bar">
				<view>
					<image  
						v-for="(item,index) in modeList" 
						:key="index" 
						:src="item.image" 
						mode="widthFix" 
						style="width: 88upx;" 
						v-show="index == currentMode"
						@click="modeClick(index)"></image>
				</view>
				<view><image src="../../static/detail/cm2_play_btn_prev@2x.png" mode="widthFix" style="width: 98upx;"></image></view>
				<view>
					<image 
							v-for="(item,index) in playList" 
							:key="index" 
							:src="item.image" 
							mode="widthFix" 
							style="width: 136upx;" 
							v-show="index == currentStatus"
							@click="statusCLick(index)"></image>
				</view>
				<view><image src="../../static/detail/cm2_fm_btn_next@2x.png" mode="widthFix" style="width: 98upx;"></image></view>
				<view><image src="../../static/detail/cm2_icn_list@2x.png" mode="widthFix" style="width: 88upx;"></image></view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getAlbumid } from '@/network/detail.js'
	export default {
		onLoad(option) {
			console.log(option.albumid)
			
			this.imgUrl = getAlbumid(option.albumid)
		},
		data() {
			return {
				imgUrl:'',
				currentMode:0,
				currentStatus:1,
				modeList:[
					{
						name:'列表循环',
						image:'../../static/detail/cm2_icn_loop@2x.png'
					},
					{
						name:'单曲循环',
						image:'../../static/detail/cm2_icn_one@2x.png'
					},
					{
						name:'随机播放',
						image:'../../static/detail/cm2_icn_shuffle@2x.png'
					},
				],
				playList:[
					{
						name:'暂停',
						image:'../../static/detail/cm2_fm_btn_play@2x.png'
					},
					{
						name:'播放',
						image:'../../static/detail/cm2_fm_btn_pause@2x.png'
					},
				]
			}
		},
		
		methods: {
			modeClick(index){
				if(index < this.modeList.length - 1){
					this.currentMode ++
				}else{
					this.currentMode = 0
				}
			},
			statusCLick(index){
				if(index < this.playList.length - 1){
					this.currentStatus ++
				}else{
					this.currentStatus = 0
				}
			}
		},
	}
</script>

<style>
	/* 背景 */
	.song-bg{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 100%;
		background-color: rgba(0,0,0,.5);
	}
	/* 滑杆 */
	.player-pointer{
		position: absolute;
		top: 0;
		z-index: 4;
		width: 100%;
		text-align: center;
	}
	.player-pointer>image{
			width: 222rpx;
		    height: 366rpx;
			margin: -60upx 0 0 111upx;
		    transform-origin: 60rpx 60rpx;
		    transform: rotate(0deg);
		    transition: all linear 0.5s; 
	}
	.player{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 332upx;
	}
	/* 封面 */
	.player-disc{
		position: relative;
		top: 230upx;
		height: 480upx;
		animation: circle 20s infinite linear;
		animation-play-state: paused;
	}
	.player-disc>image{
		position: absolute;
		width: 690upx;
		height: 690upx;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
	.player-disc>.albumid{
		height: 400upx;
		width: 400upx;
		border-radius: 50%;
	}
	.paused{
		animation-play-state: paused;
	}
	.running{
		animation-play-state: running;
	}
	@keyframes circle{
		from{transform: rotateZ(0deg);}
		to{transform: rotateZ(360deg);}
	}
	/* 底部 */
	.operation{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 332upx;
	}
	.song-actions{
		padding: 0 80upx;
		display: flex;
		text-align: center;	
	}
	.song-actions>view{
		flex: 1;
	}
	.song-actions>view>image{
		width: 80upx;
		height: 80upx;
	}
	.song-progress{
		display: flex;
		align-items: center;
		padding: 0 20upx;
	}
	.cur-time{
		color: #fff;
		font-size: 20upx;
		font-weight: 300;
	}
	.total-time{
		color: rgba(255, 255, 255, 0.8);
		font-size: 20upx;
		font-weight: 300;
	}
	.play-bar{
		display: flex;
		padding: 0 0 30upx;
		align-items: center;
		justify-content: space-between;
	}
	.play-bar>*{
		flex: 1;
	}
</style>
