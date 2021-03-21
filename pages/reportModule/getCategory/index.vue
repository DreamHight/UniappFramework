<template>
	<view class="page">
		<view class="cu-bar search bg-white">
		  <view class="search-form round">
			<text class="cuIcon-search"></text>
			<u-input
			  :adjustPosition="false"
			  type="text"
			  placeholder="搜索商品名：如苹果"
			  confirmType="search"
			  @handleConfirm="handleConfirm"
			/>
		  </view>
		</view>

		<view class="VerticalBox">
			<scroll-view
				class="VerticalNav nav"
				style="height:calc(100vh - 100rpx);"
				:scroll-y="true"
				:scroll-with-animation="true"
				:scroll-top="verticalNavTop"
			>
				<block v-for="(item, index) in list" :key="index">
					<view
						:class="['cu-item flex-center', index == tabCur ? 'text-green cur' : '']"
						style="line-height:normal;"
						@click="handleTabSelect($event, item, index)"
					>
						{{'Tab-'+item.name+''}}
					</view>
				</block>
			</scroll-view>
			<scroll-view
				class="VerticalMain"
				style="height:calc(100vh - 100rpx);"
				:scroll-y="true"
				:scroll-with-animation="true"
				:scroll-into-view="'main-' + mainCur"
				@scroll="handleViewScroll"
			>
				<block v-for="(item, index) in list" :key="index">
					<view class="padding-top padding-lr" :id="'main-' + index">
						<view class="cu-bar solid-bottom bg-white">
							<view class="action">
								<text class="cuIcon-title text-green"></text>{{'Tab-'+item.name}}
							</view>
						</view>
						<view class="padding-xs bg-white">
							<view class="padding-xs text-lg text-bold text-green">{{ mainList.title }}</view>
							<block v-for="(o, i) in mainList.children" :key="i">
								<u-tag 
									plain="line-grey"
									shape="radius"
									:text="o.name"
									@handleClick="handleSelectTag(o.name, i)"
								/>
							</block>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import UInput from '@/components/basics/u-input/u-input.vue'
import UTag from '@/components/basics/u-tag/u-tag.vue'
export default {
	name: 'getCategory',
	components: {
		UInput,
		UTag,
	},
	data() {
		return {
			productFormIndex: 0,
			productIndex: 0,
			list: [
				{
				  name: 'A'
				},
				{
				  name: 'B'
				},
				{
				  name: 'C'
				},
				{
				  name: 'D'
				},
				{
				  name: 'E'
				},
				{
				  name: 'F'
				},
				{
				  name: 'G'
				},
				{
				  name: 'H'
				},
				{
				  name: 'I'
				},
				{
				  name: 'J'
				},
				{
				  name: 'K'
				},
				{
				  name: 'L'
				},
				{
				  name: 'M'
				},
				{
				  name: 'N'
				},
			],
			mainList: {
				title: '第二级分类',
				children: [
					{
						name: '墨鱼仔'
					},
					{
						name: '海带'
					},
					{
						name: '海胆'
					},
					{
						name: '海带'
					},
					{
						name: '海胆'
					},
					{
						name: '海带'
					},
					{
						name: '海胆'
					},
				]
			},
			tabCur: 0,
			mainCur: 0,
			verticalNavTop: 0,
			load: true
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
		this.productFormIndex = e.formIndex
		this.productIndex = e.index
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
		handleTabSelect(e, item, index) {
			this.tabCur = index
			this.mainCur = index
			this.verticalNavTop = (index - 1) * 50
		},
		handleViewScroll(e) {
			let tabHeight = 0
			if (this.load) {
				const _loop = (i) => {
					let view = uni.createSelectorQuery().select("#main-" + i)
					view.fields({
						size: true
					},
					(data) => {
						console.log('datadatadata===',data)
						this.list[i].top = tabHeight
						tabHeight = tabHeight + data.height
						this.list[i].bottom = tabHeight
					}).exec()
				}
				for (let i = 0; i < this.list.length; i++) {
					_loop(i)
				}
				this.load = false
			}
			let scrollTop = e.detail.scrollTop + 10
			for (let _i = 0; _i < this.list.length; _i++) {
				if (scrollTop > this.list[_i].top && scrollTop < this.list[_i].bottom) {
					this.verticalNavTop = (_i - 1) * 50
					this.tabCur = _i
					return false
				}
			}
		},
		handleConfirm(value, index) {
			console.log('===', value, index)
		},
		handleSelectTag(name, i) {
			console.log('===', name, i)
			uni.$emit('select', {name: name, formIndex: this.productFormIndex, index: this.productIndex})
			this.uRouter({}, 'navigateBack')
		}
	}
}
</script>

<style lang="scss" scoped>
	.flex-center {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center
	}
	.fixed {
		position: fixed;
		z-index: 99;
	}
	.VerticalNav {
		&.nav {
			width: 200rpx;
			white-space: initial;
			.cu-item {
				width: 100%;
				text-align: center;
				background-color: #fff;
				margin: 0;
				border: none;
				height: 50px;
				position: relative;
				&.cur {
					background-color: #f1f1f1;
					&::after {
						content: "";
						width: 8rpx;
						height: 30rpx;
						border-radius: 10rpx 0 0 10rpx;
						position: absolute;
						background-color: currentColor;
						top: 0;
						right: 0;
						bottom: 0;
						margin: auto;
					}
				}
			}
		}
	}
	.VerticalBox {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
	}
	.VerticalMain {
		background-color: #f1f1f1;
		-webkit-box-flex: 1;
			-webkit-flex: 1;
					flex: 1;
	}
</style>
