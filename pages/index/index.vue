<template>
	<view class="content">
		<view class="container">
			<view @click="checkHesuan" class="checkCard">查看核酸</view>
			<view @click="makeAlphaBG" class="checkCard">RemoveBG制作Alpha照</view>
			<view @click="makeZhengjianzhao" class="checkCard">aliyun制作证件照</view>
			<view @click="watermark" class="checkCard">制作水印</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			checkHesuan(){
				// 只允许通过相机扫码
				// uni.scanCode({
				// 	onlyFromCamera: true,
				// 	success: function (res) {
				// 		console.log('条码类型：' + res.scanType);
				// 		console.log('条码内容：' + res.result);
				// 	}
				// });
				uni.navigateTo({
					url:'/pages/nucleicAcid/nucleicAcid'
				})
			},
			makeAlphaBG(){
				console.log("alphabg");
				uni.navigateTo({
					url:'/pages/alphabg/alphabg'
				})
			},
			makeZhengjianzhao(){
				console.log("zhengjianzhao");
				uni.navigateTo({
					url:'/pages/zhengjianzhao/zhengjianzhao'
				})
			},
			watermark(){
				console.log("watermark");
				uni.navigateTo({
					url:'/pages/watermark/watermark'
				})
			},
		}
	}
</script>

<style>
	/* 大容器 */
	.container{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* background: #f0edf2; */
	}	
	/* 查看行程卡 */
	.checkCard{
		width: 70vw;
		height: 40px;
		font-size: 20px;
		line-height: 40px;
		color: #02B730;
		border: 1px solid #02B730;
		border-radius: 60px;
		text-align: center;
		margin: 2vh 0;
	}
</style>
