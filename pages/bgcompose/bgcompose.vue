<template>
    <view>
		<view style="width: 90%;margin:10px 5%;display: flex;align-items: center;">
			<button type="primary" @tap="takeBG">选取背景图片</button>
			<button type="primary" @tap="takePhoto">选取前景图片</button>
		</view>
        
		<view style="position: absolute;top: -999999px;">
		    <view>
		        <canvas :style="{'width':w,'height': h}" canvas-id="firstCanvas"></canvas>
		    </view>
		</view>
		<view style="width: 90%;margin:10px 5%;display: flex;align-items: center;">
			<image mode="widthFix" :src="src" @click="preview"></image>
		</view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                src:'',
                w:'',
                h:''
            }
        },
        methods: {
            preview(){
                uni.previewImage({
                    urls:[this.src],
                    current:0
                })
            },
			takeBG() {
			    var that = this;
				let ctx = uni.createCanvasContext('firstCanvas');/** 创建画布 */
				uni.chooseImage({
				  success: function(res){
					uni.getImageInfo({
					  src: res.tempFilePaths[0],
					  success: (ress) => {
						console.log(ress);
						},
					})
				    ctx.drawImage(res.tempFilePaths[0], 0, 0,1080,1440)
				    ctx.draw(false,()=>{
						setTimeout(() => {
							uni.canvasToTempFilePath({
							  canvasId: 'firstCanvas',
							  success: (res1) => {
								that.src=res1.tempFilePath;
							  }
							});
						}, 1000);
					})
				  }
				})
			},
            takePhoto() {
                var that = this;
                 uni.chooseImage({
                    count:1,
                    success(res) {
                        uni.getImageInfo({
                          src: res.tempFilePaths[0],
                          success: (ress) => {
                            that.w = ress.width/3+'px';
                            that.h = ress.height/3+'px';
							//担心尺寸重置后还没生效，故做延迟
							setTimeout(() => {
							
                            let ctx = uni.createCanvasContext('firstCanvas');    /** 创建画布 */
                            // ctx.setFillStyle('#00b59d')
							// "blue",
							// "white", 
							// "red", 
							// "blue_gradual", 
							// "gray_gradual"
							// blue:#438EDB,red:#FF0000,white:#FFFFFF
							// ctx.setFillStyle('#438EDB')
							// ctx.fillRect(0, 0, ress.width, ress.height)
							// ctx.drawImage(res.tempFilePaths[0], 0, 0, ress.width, ress.height)
							//将图片src放到cancas内，宽高为图片大小
                            ctx.drawImage(res.tempFilePaths[0], 0, 0, ress.width / 3, ress.height / 3)
                            // ctx.setFontSize(18) 
                            // ctx.setFillStyle('#00b59d')
                            // ctx.rotate(30 * Math.PI / 180);
                            // let textToWidth = ress.width / 3 * 0.5; 
                            // let textToHeight = ress.height / 3 * 0.3;
                            // ctx.fillText('我是水印', textToWidth, textToHeight) 
							
							// 设置文字水印
							// ctx.setFillStyle('white');
							// ctx.setFontSize(20);
							// ctx.fillText('打码日期:', 10, 140);
							
							//再来加个时间水印
							// var date = new Date();
							// //这里用了uview的js如果不适配需要自行修改
							// ctx.setFontSize(20);
							// ctx.fillText(date, 10, 180);
							
                            /** 除了上面的文字水印，这里也可以加入图片水印 */
                            // ctx.drawImage('/static/guanxiaotong_head的副本.png', 0, 0, textToWidth*0.5, textToHeight*0.5)
                            ctx.draw(true,()=>{
                                setTimeout(() => {
                                    uni.canvasToTempFilePath({
                                      canvasId: 'firstCanvas',
                                      success: (res1) => {
                                            that.src=res1.tempFilePath;
											// that.savePhoto(res1.tempFilePath)
                                      }
                                    });
                                  }, 1000);
                            });
                          },500)
						  }
                        })
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
							title: '已保存至相册',
							duration: 2000
						});
					}
				});
			},
        }
    }
</script>

<style>
</style>
