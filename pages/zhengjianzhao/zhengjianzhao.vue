<template>
	<view class="container">
		<view class="uni-title uni-common-pl">尺寸选择器</view>
		<view class="">
			<view class="">
				<view class="">
					<view class="item-set">
						<picker @change="bindtitleChange" :range="titles" mode = "selector" class="picker-view">
							<!-- <view class="uni-input">选择规格：{{titles[index]}}</view> -->
							<view class="item-set-title">选择规格</view>
						</picker>
						<picker @change="bindcolorChange" :range="colors[specindex]" mode = "selector" class="picker-view">
							<!-- <view class="uni-input">选择颜色：{{colors[specindex][index]}}</view> -->
							<view class="item-set-title">选择颜色</view>
						</picker>
					</view>
					
					<!-- <view class="item">
						<picker @change="bindspecChange" :range="ids" mode = "selector">
							<view class="uni-input">{{ids[idindex]}}</view>
						</picker>
					</view>
					<view class="item">
						<picker @change="bindspecChange" :range="specs" mode = "selector">
							<view class="uni-input">{{specs[specindex]}}</view>
						</picker>
					</view> -->
					
					<view class="item-show">
						<view class="item-show-row"><span class="item-show-row-title">尺寸:</span>{{spec}}</view>
						<view class="item-show-row"><span class="item-show-row-title">规格:</span>{{title}}</view>
						<view class="item-show-row"><span class="item-show-row-title">规格ID:</span>{{id}}</view>
						<view class="item-show-row"><span class="item-show-row-title">颜色:</span>{{color}}</view>
					</view>
				</view>
			</view>
		</view>
		<view style="width: 90%;margin:10px 5%;display: flex;align-items: center;">
			<button type="primary" @tap="takePhoto">选取照片</button>
			<!-- <button type="primary" @tap="processPhoto">处理照片</button> -->
		</view>
		源照片：
		<view style="width: 90%;margin:10px 5%;display: flex;align-items: center;">
			<image mode="widthFix" :src="src" @click="preview"></image>
		</view>
		
		<view style="width: 90%;margin:10px 5%;display: flex;align-items: center;">
			<!-- <button type="primary" @tap="takePhoto">选取照片</button> -->
			<button type="primary" @tap="processPhoto">处理照片</button>
		</view>
		生成的证件照：
		<view style="width: 90%;margin:10px 5%;display: flex;align-items: center;">
			<image mode="widthFix" :src="srcResult" @click="preview1"></image>
		</view>
		<view class="uni-title">处理后图片的尺寸:{{resultSize}}</view>
		<view class="uni-title">处理后图片的地址:{{resultUrl}}</view>
	</view>
</template>

<script>
	import {
		pathToBase64,
		base64ToPath
	} from "../../common/image-tools/index.js"
	
	const idphotoSpecsData = require('@/common/data/idphoto_specs.json')
	export default {
		data() {
			return {
				src: '',
				srcResult: '',
				AppCode:"84d73f2a5bf84a0490e3ed2047b5cc12", //你的appcode
				
				localData: [],
				
				titles:[],
				title:"",
				titleindex:0,
				
				specs:[],
				spec:"",
				specindex:0,
				
				ids:[],
				id:"",
				idindex:0,
				
				colors:[],
				color:"",
				colorindex:0,
				
				index: 0,
				localbase64str:"",
				
				resultSize:"",
				resultUrl:"",
			}
		},
		onLoad() {
			this.localData = idphotoSpecsData;
			this.initData();
			console.log(this.localData,Array.isArray(this.localData));
		},
		methods: {
			initData(){
				for(let i=0;i<idphotoSpecsData.length;i++){
					this.titles.push(idphotoSpecsData[i].title);
					this.specs.push(idphotoSpecsData[i].spec);
					this.ids.push(idphotoSpecsData[i].id);
					this.colors.push(idphotoSpecsData[i].color);
				}
				console.log(this.titles,this.specs,this.colors);
			},
			bindtitleChange: function(e) {
				const val = e.detail.value
				this.titleindex = val;
				this.title = this.titles[val];
				this.specindex = val;
				this.spec = this.specs[val];
				this.idindex = val;
				this.id = this.ids[val];
				this.color = this.colors[this.specindex][0];
				console.log(this.title,this.spec);
			},
			bindspecChange: function(e) {
				const val = e.detail.value
				this.specindex = val;
				this.spec = this.specs[val];
				
				console.log(this.spec);
			},
			bindcolorChange: function(e) {
				const val = e.detail.value
				this.colorindex = val;
				this.color = this.colors[this.specindex][val];
				console.log(this.color);
			},
			preview() {
				uni.previewImage({
					urls: [this.src],
					current: 0
				})
			},
			preview1() {
				uni.previewImage({
					urls: [this.srcResult],
					current: 0
				})
			},
			takePhoto() {
				var that = this;
				uni.chooseImage({
					count: 1,
					success(res) {
						uni.getImageInfo({
							src: res.tempFilePaths[0],
							success: (ress) => {
								// console.log(ress);
								that.src = ress.path;
								pathToBase64(that.src).then(base64str => {
									that.localbase64str = base64str;
									// that.processPhoto(base64str);
								});
							}
						})
					}
				});
			},
			processPhoto() {
				console.log(this.spec,this.color);
				if(this.spec == "" ||  this.color == "" || this.localbase64str ==""){
					uni.showToast({
						icon:"none",
						title:"请先选择要处理的照片，并配置好参数",
						duration:3000
					})
					return;
				}
				var data = {
					"photo": this.localbase64str,
					"type": "png",
					// "spec": "1", // 见证件照规格列表
					// "bk": "red", // 见证件照颜色列表,
					"spec": this.id, // 见证件照规格列表
					"bk": this.color, // 见证件照颜色列表,
					"with_photo_key": "1",
					"beauty_degree": 1.5 //可选参数，美颜级别，浮点型，取值[1.0-5.0]，超出范围后的值无效。主要调节了脸部黑白平衡。
				};
				console.log(data);
				uni.request({
					url: 'https://idp2.market.alicloudapi.com/idphoto/make', //仅为示例，并非真实接口地址。
					data: data,
					method: "POST",
					header: {
						"Accept": "application/json; charset=utf-8",
						"Authorization": "APPCODE " + this.AppCode,
						"Content-Type": "application/json; charset=UTF-8",
						// "Content-MD5": content_md5
					},
					success: (res) => {
						console.log(res.data);
						uni.showToast({
							icon:"none",
							title:res.data.errmsg,
						})
						this.text = 'request success';
						this.srcResult = res.data.data.result;
						this.resultUrl = res.data.data.result;
						this.resultSize = res.data.data.size;
						// console.log(this.srcResult);
						this.savePhoto(this.srcResult);
					},
					fail:(error) =>{
						console.log(error.data.errmsg);
						uni.showToast({
							icon:"none",
							title:error.data.errmsg,
						})
						return;
					}
				});
			},
			//保存图片到相册，方便核查
			savePhoto(path) {
				//保存到相册
				uni.saveImageToPhotosAlbum({
					filePath: path,
					success: () => {
						uni.showToast({
							title: '已自动保存至相册',
							duration: 2000
						});
					}
				});
			},
		}
	}
</script>

<style>
	.container{
		padding: 10px;
	}
	.picker-view {
		background-color: cadetblue;
		margin: 5px;
		height: 30px;
	}
	.item-set {
		/* height: 0px; */
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		text-align: center;
	}
	.item-show {
		/* height: 0px; */
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
		text-align: left;
	}
	.item-show-row{
		margin: 10px 2%;
		width: 96%;
		border-bottom: 0.5px solid lightblue;
	}
	.item-show-row-title{
		margin-right: 20px;
		font-weight: bold;
	}
</style>
