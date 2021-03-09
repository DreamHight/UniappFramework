<script>
	export default {
		globalData: {
			// globalData，这是一种简单的全局变量机制。globalData的相关配置：
			// js中操作globalData的方式如下： getApp().globalData.userInfo = {name: 张三}
			userInfo: null
		},
		onLaunch: function() {
			// 当uni-app 初始化完成时触发（全局只触发一次）
			console.log('App Launch')
		},
		onShow: function() {
			// 当 uni-app 启动，或从后台进入前台显示
			console.log('App Show')
		},
		onHide: function() {
			// 当 uni-app 从前台进入后台
			console.log('App Hide')
		},
		onError: function() {
			// 当 uni-app 报错时触发
			console.log('App Error')
		},
		onUnhandledRejection: function() {
			// 对未处理的 Promise 拒绝事件监听函数
			console.log('App UnhandledRejection')
		},
		onPageNotFound: function() {
			// 页面不存在监听函数
			console.log('App PageNotFound')
		},
		onThemeChange: function() {
			// 监听系统主题变化
			console.log('App ThemeChange')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
