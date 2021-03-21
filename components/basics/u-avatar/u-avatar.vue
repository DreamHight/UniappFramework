<template>
  <view class="u-avatar">
    <view class="cu-avatar-group" v-if="avatarList.length">
      <view
        v-for="(item, index) in avatarList"
        :key="index"
        :class="['cu-avatar', shape, size, bgColor]"
        :style="{ backgroundImage: 'url(' + item + ')' }"
        @click="$emit('handleClick', item, index)"
      >
        <text :class="[textClass]">{{ text }}</text>
        <view :class="[badgeClass ? 'cu-tag badge ' + badgeClass : '']"></view>
      </view>
    </view>
    <view
      v-else
      :class="['cu-avatar', shape, size, bgColor]"
      :style="{ backgroundImage: 'url(' + src + ')' }"
      @click="handleClick(src, 0)"
    >
      <slot>
        <text :class="[textClass]">{{ text }}</text>
        <view :class="[badgeClass ? 'cu-tag badge ' + badgeClass : '']"></view>
      </slot>
    </view>
  </view>
</template>

<script>
export default {
  name: 'UAvatar',
  props: {
    avatarList: {
      type: Array,
      default: () => {
        return []
      },
    },
    src: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    textClass: {
      type: String,
      default: '',
    },
    // ['round', 'radius']
    shape: {
      type: String,
      default: 'round',
    },
    // ['sm', 'lg', 'xl']
    size: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: '',
    },
    badgeClass: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
