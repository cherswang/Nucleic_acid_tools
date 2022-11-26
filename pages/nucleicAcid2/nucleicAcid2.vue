<template>
	<!-- <view class="p-nav">
		<u-row>
			<u-col span="3" class="back" @tap="$u.route({type:'back'})">
				<image src="../../static/newback.png"></image>
			</u-col>
			<u-col span="6" class="title">护理咨询</u-col>
			<u-col span="3" class="right-btn">&nbsp;</u-col>
		</u-row>
	</view> -->
	<view class="content">
		<div class="container">
			<div class="address">
				<input type="text"
					style="width:100%;background-color:#02B730;border: none;color: white;font-weight: bold;font-size: 30px;text-align: center;">
			</div>
			<div class="date-time father-div">
				<div class="date" id="clockDate">{{clockDate}}</div>
				<div class="time" id="clockTime">{{clockTime}}</div>
			</div>
			<div class="father-div">
				<div class="name" style="border-bottom: 0.5px solid #fcfcfc;">
					<div style="text-align: left;font-size:20px;font-weight:bold;margin: 10px 10px;">王*</div>
					<div style="font-size: 15px;margin:5px 10px;color: #898a8a">411326********0010<span></span></div>
				</div>
				<div class="hesuanjieguo">
					<div style="width: 40vw;height: 26vw;background-color: #7de079;color: #fff;">
						<div style="text-align: center;margin-top: 5px;">核酸检测结果</div>
						<div style="display: flex;flex-direction: row;align-items: center;font-weight: bold;">
							<div style="font-size: 50px;margin:0 5px;">24</div>
							<div style="display: flex;flex-direction: column;align-items: center;">
								<div style="font-size: 15px;">小时内</div>
								<div style="font-size: 20px;">阴性</div>
							</div>
						</div>
					</div>
					<div style="width: 40vw;height: 26vw;background-color: #f7f9fc;font-weight: bold;">
						<div
							style="display: flex;flex-direction: column;align-items: center;justify-content: center;font-weight: bold;">
							<div style="color: #414745;margin-top: 15px;">疫苗接种</div>
							<div style="color: #3DB6F5;font-size: 18px;padding: 0 5px;margin-top: 15px;">
								已接种&nbsp;3&nbsp;针剂</div>
						</div>
					</div>
				</div>
			</div>
			<div class="checkCard">查看行程卡</div>
			<div class="father-div">
				<div class="hesuanguoqi">
					<div style="width: 20vw;height: 26vw;background-color: #fff;">
						<div
							style="display: flex;flex-direction: column;align-items: center;justify-content: center;font-weight: bold;">
							<image src="../../static/hesuanjiancema.png" style="width: 14vw;height: 14vw;" mode=""></image>
							<div style="width: 20vw;color: #000;margin-top: 2px;font-weight: bold;text-align: center;font-size: 13px;margin-top: 10px;">核酸检测码</div>
						</div>
					</div>
					<view style="width: 2px;height:20vw;border-right: 1px #e6e3e9 solid;margin-left: 1vw;margin-bottom: 2vw;">
					</view>
					<div style="width: 20vw;height: 26vw;background-color: #fff;padding: 10px">
						<div
							style="display: flex;flex-direction: column;align-items: center;justify-content: center;font-weight: bold;">
							<image src="../../static/laiyubaobei.png" style="width: 14vw;height: 14vw;" mode=""></image>
							<div style="width: 18vw;color: #000;margin-top: 2px;font-weight: bold;text-align: center;font-size: 13px;margin-top: 10px;">来豫报备</div>
						</div>
					</div>
					<view style="width: 2px;height:20vw;border-right: 1px #e6e3e9 solid;margin-left: 1vw;margin-bottom: 2vw;">
					</view>
					<div style="width: 20vw;height: 26vw;background-color: #fff;">
						<div
							style="display: flex;flex-direction: column;align-items: center;justify-content: center;font-weight: bold;">
							<image src="../../static/caiyangdianchaxun.png" style="width: 14vw;height: 14vw;" mode=""></image>
							<div style="width: 20vw;color: #000;margin-top: 2px;font-weight: bold;text-align: center;font-size: 13px;margin-top: 10px;">采样点查询</div>	
						</div>
					</div>
					<view style="width: 2px;height:20vw;border-right: 1px #e6e3e9 solid;margin-left: 1vw;margin-bottom: 2vw;">
					</view>
					<div style="width: 20vw;height: 26vw;background-color: #fff;padding: 10px">
						<div
							style="display: flex;flex-direction: column;align-items: center;justify-content: center;font-weight: bold;">
							<image src="../../static/chengchema.png" style="width: 14vw;height: 14vw;" mode=""></image>
							<div style="width: 18vw;color: #000;margin-top: 2px;font-weight: bold;text-align: center;font-size: 13px;margin-top: 10px;">乘车码</div>
						</div>
					</div>
				</div>
			</div>
			
			
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				clockDate: "",
				clockTime: "",
				jianceDate: "",
			}
		},
		onLoad() {
			this.showDateTime();
			this.showDate();
			//设置定时器，自动更新时间显示
			setInterval(this.showDateTime, 1000);
		},
		onShow() {

		},
		methods: {
			showDateTime() {
				//获取系统时间
				let hour = new Date().getHours();
				let minute = new Date().getMinutes();
				let second = new Date().getSeconds();
				hour = hour < 10 ? '0' + hour : hour;
				minute = minute < 10 ? '0' + minute : minute;
				second = second < 10 ? '0' + second : second;
				//搞一个空字符串
				let showTime = "";
				//把时间显示的格式放进去
				showTime = hour + ":" + minute + ":" + second;
				//然后在网页上显示出来
				this.clockTime = showTime;
				// document.getElementById("clockTime").innerHTML = showTime;
			},
			showDate() {
				var date = new Date();
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				m = m < 10 ? '0' + m : m;
				var d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				var formatDate = y + '年' + m + '月' + d + '日';

				console.log("当天日期是：", formatDate);
				this.clockDate = formatDate;
				// document.getElementById("clockDate").innerHTML = formatDate;
				// jianceDate
				var jcm = date.getMonth() + 1;
				jcm = jcm < 10 ? '0' + jcm : jcm;
				var jcd = date.getDate() > 2 ? (date.getDate() - 1) : date.getDate();
				jcd = (jcd) < 10 ? ('0' + (jcd)) : (jcd);
				var jcDate = m + '月' + jcd + '日';

				// 
				//获取系统时间
				let jchour = new Date().getHours();
				let jcminute = new Date().getMinutes();
				jcminute = jcminute < 10 ? '0' + jcminute : jcminute;
				//搞一个空字符串
				let jcTime = "";
				//把时间显示的格式放进去
				jcTime = jchour + ":" + jcminute
				this.jianceDate = jcDate + ' ' + jcTime;
				// document.getElementById("jianceDate").innerHTML = jcDate + ' '+ jcTime;
			},
		}
	}
</script>

<style>
	/* #cdcfd4 */
	.content {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAV4CAYAAABYfbnIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5gUUEDcB4HQuVQAAMAhJREFUeNrt3VmXnVeB5+n/fs+J0OyZNDamzDzYxpZthizITBKayvSQ2V3dtar6uteqb9E39TVq1UWt1Xc9FhSJZZNkORsSEhIMAoyBBI/gebbGiDjn3XWxTyhCnm2kfRTS86z1rghFhEL7SBHS+Wm/e+8yHDpYAwAA0MGw7AEAAAAXDgECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0I0AAAIBuBAgAANCNAAEAALoRIAAAQDcCBAAA6EaAAAAA3QgQAACgGwECAAB0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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Fb+O/0LdFeu8P37AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA1LTIwVDE2OjU1OjAxKzA4OjAwAS3I+QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNS0yMFQxNjo1NTowMSswODowMHBwcEUAAAAASUVORK5CYII=) no-repeat;
		background-size: 100% 75%;
		margin: 0;
		font-family: Arial;
	}

	/* background-color: #02B730; */
	/* 大容器 */
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* background: #f0edf2; */
	}

	/* 大容器中的每一个一级父模块 */
	.father-div {
		width: 88%;
		margin-bottom: 20px;
		border-radius: 5px;
		/* border: 0.5px solid #aaaaaa; */
		box-shadow: 1px 1px .2px #f0edf2;
		background: #fff;
	}

	/* 地址*/
	.address {
		margin-top: 15px;
		width: 88%;
		margin-bottom: 15px;
	}

	/* 日期和时间 */
	.date-time {
		margin-top: 30px;
	}

	.date {
		padding-top: 15px;
		color: #706F70;
		text-align: center;
		font-size: 17px;
		font-weight: bold;
	}

	.time {
		margin-bottom: 15px;
		color: #000000;
		text-align: center;
		font-size: 50px;
		font-weight: bold;
	}

	/* 核酸检测结果 和 疫苗接种情况*/
	.hesuanjieguo,
	.hesuanguoqi {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.hesuanguoqi>div,
	.hesuanjieguo>div {
		border-radius: 5px;
		margin: 2px;
	}

	/* 核算检测时间 和 检测到期时间*/

	/* 查看行程卡 */
	.checkCard {
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

	.caiyangshijian {
		width: 70%;
		height: 30px;
		font-size: 15px;
		line-height: 30px;
		color: #3DB6F5;
		border: 1px solid #3DB6F5;
		border-radius: 30px;
		text-align: center;
		margin-top: 3px;
	}
</style>
