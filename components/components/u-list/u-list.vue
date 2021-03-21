<template>
	<view class="u-list">
		<scroll-view
			style="height:100vh;"
			:scroll-x="scrollX"
			:scroll-y="scrollY"
			:scroll-top="scrollTop"
			:scroll-left="scrollLeft"
			:scroll-with-animation="scrollWithAnimation"
			:enable-back-to-top="enableBackToTop"
			:show-scrollbar="showScrollbar"
			:refresher-enabled="refresherEnabled"
			@scroll="scroll"
			@refresherpulling="refresherpulling"
			@refresherrefresh="refresherrefresh"
			@scrolltoupper="scrolltoupper"
			@scrolltolower="scrolltolower"
		>
			<view :class="['cu-list menu', shortBorder ? 'sm-border' : '', card ? 'card-menu margin-top' : '']">
				<view 
					v-for="(item, index) in data"
					:key="index"
					:class="['cu-item', item.arrow ? 'arrow' : '']"
				>
					<view v-if="item.multiple" class="content padding-tb-sm">
						<view>
							<text :class="[item.topIcon]"></text>
							{{ item.topText }}
						</view>
						<view class="text-gray text-sm">
							<text :class="[item.bottomIcon]"></text>
							{{ item.bottomText }}
						</view>
					</view>
					<view v-else class="content">
						<image v-if="item.src" class="png" :src="item.src" mode="aspectFit"></image>
						<text v-if="item.icon" :class="[item.icon]"></text>
						<text class="text-grey">{{ item.title }}</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">{{ item.text }}</text>
						<u-switch
							v-if="item.switchProps && JSON.stringify(item.switchProps) !== '{}'"
							:checked="item.switchProps.checked"
							:disabled="item.switchProps.disabled"
							:color="item.switchProps.color"
							:radius="item.switchProps.radius"
							:icon="item.switchProps.icon"
							@handleChange="handleSwitchChange($event, index)"
						/>
						<u-tag
							v-if="item.tagProps && JSON.stringify(item.tagProps) !== '{}'"
							:capsule="item.tagProps.capsule"
							:shape="item.tagProps.shape"
							:size="item.tagProps.size"
							:bgColor="item.tagProps.bgColor"
							:plain="item.tagProps.plain"
							:text="item.tagProps.text"
							:textClass="item.tagProps.textClass"
							:badge="item.tagProps.badge"
						/>
						<u-button
							v-if="item.buttonProps && JSON.stringify(item.buttonProps) !== '{}'"
							:bgColor="item.buttonProps.bgColor"
							:round="item.buttonProps.round"
							:icon="item.buttonProps.icon"
							:size="item.buttonProps.size"
							:text="item.buttonProps.text"
							:textClass="item.buttonProps.textClass"
							:shadow="item.buttonProps.shadow"
							:plain="item.buttonProps.plain"
							:disabled="item.buttonProps.disabled"
							:formType="item.buttonProps.formType"
							:openType="item.buttonProps.openType"
						></u-button>
						<slot name="action"></slot>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import USwitch from '@/components/basics/u-switch/u-switch.vue'
import UTag from '@/components/basics/u-tag/u-tag.vue'
import UButton from '@/components/basics/u-button/u-button.vue'
export default {
  name: 'UList',
  props: {
		data: {
			type: Array,
			default: () => {
				return []
			},
		},
		shortBorder: {
      type: Boolean,
      default: true,
    },
    arrow: {
      type: Boolean,
      default: true,
    },
		card: {
			type: Boolean,
			default: false,
		},

		scrollX: {
			type: Boolean,
			default: false,
		},
		scrollY: {
			type: Boolean,
			default: true,
		},
		scrollTop: {
			type: Number,
			default: 0,
		},
		scrollLeft: {
			type: Number,
			default: 0,
		},
		scrollWithAnimation: {
			type: Boolean,
			default: true,
		},
		enableBackToTop: {
			type: Boolean,
			default: true,
		},
		showScrollbar: {
			type: Boolean,
			default: false,
		},
		refresherEnabled: {
			type: Boolean,
			default: true,
		},
  },
  model: {},
  computed: {},
  components: {
  	USwitch,
		UTag,
		UButton,
  },
  data() {
    return {}
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
		handleSwitchChange(e, index) {
			this.$emit('handleSwitchChange', e.detail.value, index)
		},
		
		scroll(e) {
			console.log('scroll===', e)
		},
		scrolltoupper(e) {
			console.log('scrolltoupper===', e)
		},
		scrolltolower(e) {
			console.log('scrolltolower===', e)
		},
		refresherpulling(e) {
			console.log('refresherpulling===', e)
		},
		refresherrefresh(e) {
			console.log('refresherrefresh===', e)
		},
  },
}
</script>

<style lang="scss" scoped></style>
