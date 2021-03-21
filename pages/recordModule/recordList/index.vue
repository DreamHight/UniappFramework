<template>
	<view class="page">
		<!-- <u-grid :data="cuIconList" :col="gridCol" :border="gridBorder" /> -->
		<!-- <u-swiper></u-swiper> -->
		<view class="cu-bar search bg-white">
		  <view class="search-form round">
				<text class="cuIcon-search"></text>
				<u-input
					:adjustPosition="false"
					type="text"
					placeholder="搜索商品名：如苹果"
					confirmType="search"
				/>
			</view>
		</view>
		<u-list
			:data="list"
			@handleSwitchChange="handleSwitchChange"
		></u-list>
	</view>
</template>

<script>
import USwiper from '@/components/components/u-swiper/u-swiper.vue'
import UGrid from '@/components/components/u-grid/u-grid.vue'
import UInput from '@/components/basics/u-input/u-input.vue'
import UList from '@/components/components/u-list/u-list.vue'
export default {
	name: 'recordList',
	components: {
		USwiper,
		UGrid,
		UInput,
		UList,
	},
	data() {
		return {
			cuIconList: [
				{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR',
					renderRichNodes: `<div><img style="width:32px;height:32px;" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg" /></div>`,
				},
				{
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像',
					renderRichNodes: `<div><img style="width:64px;height:64px;border-radius:50%;" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg" /></div>`,
				},
				{
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像',
					renderRichNodes: `
						<div class="cuIcon-picfill text-mauve"></div>
						<div style="margin-top:5px;color:#888;font-size:26rpx;line-height:40rpx;">图像</div>
					`
				},
				{
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知',
				},
				{
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 'aaa',
					name: '排行榜',
				},
				{
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤',
				},
				{
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现',
				},
				{
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助',
				},
				{
					cuIcon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答',
				},
				{
					cuIcon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权',
				},
			],
			gridCol: 5,
			gridBorder: true,
			
			list: [
				{
					icon: 'cuIcon-circlefill text-grey',
					title: '图标 + 标题',
					arrow: true,
				},
				{
					icon: 'cuIcon-circlefill text-grey',
					title: '图标 + 标题',
					arrow: true,
				},
				{
					icon: 'cuIcon-circlefill text-grey',
					title: '图标 + 标题',
					arrow: true,
				},
				{
					icon: 'cuIcon-circlefill text-grey',
					title: '图标 + 标题',
					arrow: true,
				},
				{
					icon: 'cuIcon-circlefill text-grey',
					title: '图标 + 标题',
					arrow: true,
				},
				{
					icon: 'cuIcon-circlefill text-grey',
					title: '图标 + 标题',
					arrow: true,
				},
				{
					icon: 'cuIcon-circlefill text-grey',
					title: '图标 + 标题',
					arrow: true,
				},
				{
					icon: 'cuIcon-circlefill text-grey',
					title: '图标 + 标题',
					arrow: true,
				},
				{
					icon: 'cuIcon-circlefill text-grey',
					title: '图标 + 标题',
					arrow: true,
				},
				{
					icon: 'cuIcon-circlefill text-grey',
					title: '图标 + 标题',
					arrow: true,
				},
				{
					icon: 'cuIcon-circlefill text-grey',
					title: '图标 + 标题',
					arrow: true,
				},
				{
					src: '/static/logo.png',
					title: '图片 + 标题',
				},
				{
					icon: 'cuIcon-warn text-green',
					title: '文本',
					text: '小目标还没有实现！',
					arrow: true,
				},
				{
					icon: 'cuIcon-warn text-green',
					multiple: true,
					topIcon: 'cuIcon-clothesfill text-blue margin-right-xs',
					topText: '多行Item',
					bottomIcon: 'cuIcon-infofill margin-right-xs',
					bottomText: '小目标还没有实现！',
					switchProps: {
						checked: false,
						icon: 'switch-sex'
					},
				},
				{
					icon: 'cuIcon-warn text-green',
					multiple: true,
					topIcon: 'cuIcon-clothesfill text-blue margin-right-xs',
					topText: '多行Item',
					bottomIcon: 'cuIcon-infofill margin-right-xs',
					bottomText: '小目标还没有实现！',
					tagProps: {
						shape: 'radius',
						bgColor: 'blue light',
						text: '标签',
					},
				},
				{
					icon: 'cuIcon-btn text-green',
					title: '按钮',
					buttonProps: {
						bgColor: 'green',
						size: 'sm',
						text: '按钮',
						openType: 'contact'
					},
				},
			],
			hobby: 'footerball',
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
		handleChange(checked) {
			this.checked = !this.checked
			console.log('handleChange===', checked, this.checked)
		},
		handleSwitchChange(checked, index) {
			// this.list[index].switchProps.checked = !checked
			// this.$set(this.list[index].switchProps, 'checked', !checked)
			console.log('handleSwitchChange===', checked, index)
		},
	}
}
</script>

<style lang="scss" scoped>
	// .page {
	// 	height: 100vh;
	// 	overflow: hidden;
	// }
</style>
