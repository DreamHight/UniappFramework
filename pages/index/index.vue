<template>
	<view class="page">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<van-button @click="dingyue">dingyue</van-button>
		<van-button type="danger" @click="getUserInfo">getUserInfo</van-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onInit(e) {
			// 监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad
			// 【百度小程序】
			console.log('Page Init', e)
		},
		onLoad(e) {
			// 监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参）
			console.log('Page Load', e)
		},
		onShow() {
			// 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
			console.log('Page Show')
			
			// console.log(getApp().globalData.userInfo)
			// this.title = getApp().globalData.userInfo.name
		},
		onReady() {
			// 监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
			console.log('Page Ready')
		},
		onHide() {
			// 监听页面隐藏	
			console.log('Page Hide')
		},
		onUnload() {
			// 监听页面卸载
			console.log('Page Unload')
		},

		onResize() {
			// 监听窗口尺寸变化【App、微信小程序】
			console.log('Page Resize')
		},
		onPullDownRefresh() {
			// 监听用户下拉动作，一般用于下拉刷新
			console.log('Page PullDownRefresh')
		},
		onReachBottom() {
			// 页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项
			console.log('Page ReachBottom')
		},
		onTabItemTap(e) {
			// 点击 tab 时触发，参数为Object，具体见下方注意事项
			// 【微信小程序、支付宝小程序、百度小程序、H5、App（自定义组件模式）】
			console.log('Page TabItemTap', e)
		},
		onShareAppMessage() {
			// 用户点击右上角分享【微信小程序、百度小程序、字节跳动小程序、支付宝小程序】
			console.log('Page ShareAppMessage')
		},

		onPageScroll(e) {
			// 监听页面滚动，参数为Object【nvue暂不支持】
			console.log('Page PageScroll', e)
		},
		onNavigationBarButtonTap(e) {
			// 监听原生标题栏按钮点击事件，参数为Object【App、H5】
			console.log('Page NavigationBarButtonTap', e)
		},
		onBackPress(e) {
			// 监听页面返回，返回 event = {from:backbutton、 navigateBack}，
			// backbutton 表示来源是左上角返回按钮或 android 返回键；
			// navigateBack表示来源是 uni.navigateBack ；
			// 详细说明及使用：onBackPress 详解。
			// 支付宝小程序只有真机能触发，只能监听非navigateBack引起的返回，不可阻止默认行为。
			//【app、H5、支付宝小程序】
			console.log('Page BackPress', e)
		},
		onNavigationBarSearchInputChanged() {
			// 监听原生标题栏搜索输入框输入内容变化事件【App、H5】】
			console.log('Page NavigationBarSearchInputChanged')
		},
		onNavigationBarSearchInputConfirmed() {
			// 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发【App、H5】】
			console.log('Page NavigationBarSearchInputConfirmed')
		},
		onNavigationBarSearchInputClicked() {
			// 监听原生标题栏搜索输入框点击事件	【App、H5】
			console.log('Page NavigationBarSearchInputClicked')
		},
		onShareTimeline() {
			// 监听用户点击右上角转发到朋友圈【微信小程序】
			console.log('Page ShareTimeline')
		},
		onAddToFavorites() {
			// 监听用户点击右上角收藏【微信小程序】
			console.log('Page AddToFavorites')
		},
		methods: {
			dingyue() {
				uni.requestSubscribeMessage({
				  tmplIds: [
						'3ZPKP4KmgNWx97DtiefnVSu0uN5cG-_3W8wckqGA8mc',
						'jEIl2dBC-7gemkpjxmjm38WBEXaEWvhFDDP8mmWVAnQ'
					],
				  success (res) {
					 	console.log('requestSubscribeMessage', res)
				  }
				})
			},
			getUserInfo() {
				// 获取用户信息
				uni.getSetting({
					success: res => {
						console.log('resres',res)
						if (res.authSetting['scope.userInfo']) {
							// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
							uni.getUserInfo({
								success: res => {
									// 可以将 res 发送给后台解码出 unionId
									console.log(res)
									// getApp().globalData.userInfo = res.userInfo
									this.title = res.userInfo.nickName
									// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
									// 所以此处加入 callback 以防止这种情况
									if (this.userInfoReadyCallback) {
										this.userInfoReadyCallback(res)
									}
								}
							})
						}else{
							uni.login({
							  success (res) {
									console.log('res===', res)
									if (res.code) {
										//发起网络请求
										uni.request({
											url: 'http://localhost/php/xcxtemplate.php',
											data: {
												code: res.code
											}
										})
									} else {
										console.log('登录失败！' + res.errMsg)
									}
							  }
							})
						}
					}
				})

				// 获取用户信息
				// uni.getSetting({
				// 	success: res => {
				// 		if (res.authSetting['scope.userInfo']) {
				// 			// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
				// 			uni.getUserInfo({
				// 				success: res => {
				// 					// 可以将 res 发送给后台解码出 unionId
				// 					console.log(res)
				// 					getApp().globalData.userInfo = res.userInfo
				// 					this.title = res.userInfo.nickName
				// 					// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
				// 					// 所以此处加入 callback 以防止这种情况
				// 					if (this.userInfoReadyCallback) {
				// 						this.userInfoReadyCallback(res)
				// 					}
				// 				}
				// 			})
				// 		}
				// 	}
				// })
			}
		}
	}
</script>

<style>
	.page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
