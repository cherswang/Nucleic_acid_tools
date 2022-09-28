<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="https://www.remove.bg/zh"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
