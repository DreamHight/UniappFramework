<template>
	<view :class="['addForm cu-list menu', wrapClass]">
		<view v-if="title" class="cu-bar bg-white">
		  <view class="action">
			<text class="cuIcon-titles text-green"></text>
			<text class="text-xl text-bold">{{ title }}</text>
		  </view>
		</view>
		<view
		  v-for="(item, index) in dataList"
		  :key="index"
		  :class="['cu-item', item.arrowRight ? 'arrow' : '']"
		>
		  <view class="title">{{ item.label }}</view>

		  <view v-if="item.arrowRight" @click="handleArrowRightClick(item, index)">
			<text style="color:#717171;font-size:30rpx;">{{ item.value || item.placeholder }}</text>
		  </view>
		  <u-picker
        v-else-if="item.component === 'picker'"
        :mode="item.type || 'date'"
        :value="item.value"
        :range="item.range"
        :rangeKey="item.rangeKey"
        :index="index"
        @handleChange="handleChange"
		  />
		  <u-input
        v-else
        class="flex-sub text-right"
        :value="item.value"
        :type="item.type || 'text'"
        :disabled="item.disabled"
        :placeholder="item.placeholder"
        placeholderClass="text-right"
        :index="index"
        @handleInput="handleInput"
		  />
		</view>
		
		<slot name="footer"></slot>
	</view>
</template>

<script>
import UPicker from '@/components/basics/u-picker/u-picker.vue'
import UInput from '@/components/basics/u-input/u-input.vue'
export default {
  name: 'AddForm',
  components: {
    UPicker,
    UInput,
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
    title: {
      type: String,
      default: ''
    },
    inputClass: {
      type: String,
      default: '',
    },
    wrapClass: {
      type: String,
      default: '',
    },
	formIndex: {
		type: Number,
		default: 0,
	}
  },
  computed: {},
  watch: {
	data(n, o) {
		this.dataList = n
	}
  },
  data() {
    return {
      dataList: [],
    }
  },
  mounted() {
    // 挂载到实例上去之后调用
    // 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用$nextTick
    console.log('component mounted')
    this.init()
  },
  methods: {
    init() {
      this.dataList = JSON.parse(JSON.stringify(this.data))
    },
    handleInput(e, index) {
		console.log('valuevalue',e)
      this.$emit('handleInput', this.formIndex, e.detail.value, index)
    },
    handleChange(e, index) {
      this.dataList[index]['value'] = e.detail.value
      this.$emit('handleChange', this.formIndex, e.detail.value, index)
    },
    handleArrowRightClick(item, index) {
      this.$emit('handleArrowRightClick', this.formIndex, item, index)
    },
  },
}
</script>

<style></style>
