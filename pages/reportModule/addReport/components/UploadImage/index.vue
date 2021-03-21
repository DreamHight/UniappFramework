<template>
  <view :class="['uploadImage', wrapClass]">
    <block v-for="(item, index) in data" :key="index">
		<u-upload
			:customChoose="item.customChoose"
			@handleChooseImage="handleChooseImage"
			@handleDeleteImage="handleDeleteImage"
		>
        <template v-slot:header>
          <view v-if="item.title" class="cu-bar bg-white">
            <view class="action">
              <text class="cuIcon-titles text-green"></text>
              <text class="text-xl text-bold">{{ item.title }}</text>
            </view>
          </view>
          <view class="cu-form-group">
            <view class="title">{{ item.label }}</view>
            <u-input
              class="flex-sub text-right"
              :placeholder="item.placeholder"
              placeholderClass="text-right"
              :index="index"
              @handleInput="handleInput"
            />
          </view>
        </template>
      </u-upload>
    </block>
  </view>
</template>

<script>
import UUpload from '@/components/basics/u-upload/u-upload.vue'
import UInput from '@/components/basics/u-input/u-input.vue'
export default {
  name: 'UploadImage',
  components: {
    UUpload,
    UInput,
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
    wrapClass: {
      type: String,
      default: '',
    }
  },
  methods: {
    handleInput(value, index) {
      this.$emit('handleInput', value, index)
    },
    handleChooseImage(e, list) {
      this.$emit('handleChooseImage', e, list)
    },
    handleDeleteImage(e, list) {
      this.$emit('handleDeleteImage', e, list)
    },
  },
}
</script>

<style></style>
