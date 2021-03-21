<template>
  <view class="u-button">
    <view>
      <button
        :class="[
          block ? 'block' : '',
          'cu-btn',
          plain ? plain : (bgColor ? 'bg-' + bgColor : ''),
          icon ? 'icon' : '',
          round ? 'round' : '',
          shadow ? 'shadow' : '',
          size
        ]"
        :disabled="disabled"
        :loading="loading"
		:formType="formType"
		:openType="openType"
		:appParameter="appParameter"
		:hoverStopPropagation="hoverStopPropagation"
		:sendMessageTitle="sendMessageTitle"
		:sendMessagePath="sendMessagePath"
		:sendMessageImg="sendMessageImg"
		:sendMessageCard="sendMessageCard"
		@click="$emit('handleClick')"
		@getphonenumber="$emit('getphonenumber')"
		@getuserinfo="$emit('getuserinfo')"
		@error="$emit('error')"
		@opensetting="$emit('opensetting')"
		@launchapp="$emit('launchapp')"
      >
        <text :class="[icon, textClass]">{{ text }}</text>
      </button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'UButton',
  props: {
    bgColor: {
      type: String,
      default: 'white',
    },
    round: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    // ['sm', 'lg']
    size: {
      type: String,
      default: 'lg',
    },
    text: {
      type: String,
      default: '',
    },
    textClass: {
      type: String,
      default: '',
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
	formType: {
		type: String,
		default: '',
	},
	openType: {
		type: String,
		default: '',
	},
	appParameter: {
		type: String,
		default: '',
	},
	hoverStopPropagation: {
		type: Boolean,
		default: false,
	},
	sendMessageTitle: {
		type: String,
		default: '',
	},
	sendMessagePath: {
		type: String,
		default: '',
	},
	sendMessageImg: {
		type: String,
		default: '',
	},
	sendMessageCard: {
		type: Boolean,
		default: false,
	},
  },
}
</script>
