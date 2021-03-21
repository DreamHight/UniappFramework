<template>
	<view class="u-swiper">
		<swiper 
			:class="[type+'-swiper', dotStyle ? 'square-dot' : 'round-dot']" 
			:indicatorDots="indicatorDots"
			:indicatorColor="indicatorColor"
			:indicatorActiveColor="indicatorActiveColor"
			:autoplay="autoplay"
			:current="current"
			:interval="interval" 
			:duration="duration"
			:circular="circular"
			:vertical="vertical"
		>
			<block v-for="(item, index) in data" :key="index">
				<swiper-item v-if="type === 'screen'">
					<block v-if="item.type==='video'">
						<video 
							:src="item.url"
							:autoplay="autoplay"
							:loop="loop"
							:muted="muted"
							:controls="controls"
							objectFit="cover"
							:showFullscreenBtn="showFullscreenBtn"
							:showPlayBtn="showPlayBtn"
						></video>
					</block>
					<block v-else>
						<image :src="item.url" mode="aspectFill"></image>
					</block>
				</swiper-item>
				<view
					v-else
					:class="[
						(type==='tower') ? (item.zIndex === 1 ? 'tower-item none' : 'tower-item') : '',
						(type==='card') ? (cardCurrentIndex === index ? 'cur' : '') : ''
					]"
					:style="'--index:' + (item.zIndex) + ';' + ('--left:' + (item.mLeft) + ';')"
				>
					<view class="swiper-item">
						<block v-if="item.type==='video'">
							<video 
								:src="item.url"
								:autoplay="autoplay"
								:loop="loop"
								:muted="muted"
								:controls="controls"
								objectFit="cover"
								:showFullscreenBtn="showFullscreenBtn"
								:showPlayBtn="showPlayBtn"
							></video>
						</block>
						<block v-else>
							<image :src="item.url" mode="aspectFill"></image>
						</block>
					</view>
				</view>
			</block>
		</swiper>
	</view>
</template>

<script>
export default {
  name: 'USwiper',
  props: {
	data: {
		type: Array,
		default: () => {
			return [
				{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				},
				{
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
				},
				{
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				},
				{
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				},
				{
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				},
				{
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}
			]
		},
	},
	dotStyle: {
		type: Boolean,
		default: true,
	},
	// ['screen-swiper', 'card-swiper', 'tower-swiper']
	type: {
		type: String,
		default: 'tower',
	},
	
    indicatorDots: {
      type: Boolean,
      default: true,
    },
	indicatorColor: {
		type: String,
		default: '#8799a3',
	},
	indicatorActiveColor: {
		type: String,
		default: '#0081ff',
	},
	autoplay: {
	  type: Boolean,
	  default: true,
	},
	current: {
		type: Number,
		default: 0,
	},
	interval: {
	  type: Number,
	  default: 5000,
	},
	duration: {
	  type: Number,
	  default: 500,
	},
	circular: {
	  type: Boolean,
	  default: true,
	},
	vertical: {
	  type: Boolean,
	  default: false,
	},
	
	loop: {
		type: Boolean,
		default: false,
	},
	muted: {
		type: Boolean,
		default: false,
	},
	controls: {
		type: Boolean,
		default: false,
	},
	showFullscreenBtn:{
		type: Boolean,
		default: false,
	},
	showPlayBtn: {
		type: Boolean,
		default: false,
	},
  },
  model: {},
  computed: {},
  data() {
    return {
		dataList: [],
		cardCurrentIndex: 0,
	}
  },
  watch: {},
  beforeCreate() {
    // 在实例初始化之后被调用
    console.log('component beforeCreate')
  },
  created() {
    // 在实例创建完成后被立即调用
    console.log('component created')
  },
  beforeMount() {
    // 在挂载开始之前被调用
    console.log('component beforeMount')
  },
  mounted() {
    // 挂载到实例上去之后调用
    // 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用$nextTick
    console.log('component mounted')
	this.init()
  },
  beforeUpdate() {
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前【仅H5平台支持】
    console.log('component beforeUpdate')
  },
  updated() {
    // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子【仅H5平台支持】
    console.log('component updated')
  },
  beforeDestroy() {
    // 实例销毁之前调用。在这一步，实例仍然完全可用
    console.log('component beforeDestroy')
  },
  destroyed() {
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁
    console.log('component destroyed')
  },
  methods: {
	init() {
	    this.dataList = JSON.parse(JSON.stringify(this.data))
		if(this.type === 'tower'){
			this.towerSwiper('dataList')
		}
	},
	// 初始化towerSwiper
	towerSwiper(name) {
		const list = this[name]
		for (var i = 0; i < list.length; i++) {
			list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
			list[i].mLeft = i - parseInt(list.length / 2)
		}
		this.dataList = list
	},
  },
}
</script>

<style lang="scss" scoped></style>
