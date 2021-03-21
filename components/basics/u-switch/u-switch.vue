<template>
  <view class="u-switch">
    <switch
			:class="[checked ? 'checked' : '', icon, color, radius ? 'radius' : '']"
			:checked="checked"
			:disabled="disabled"
			@change="handleChange"
    />
  </view>
</template>

<script>
export default {
  name: 'USwitch',
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
		disabled: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			default: '',
		},
		radius: {
			type: Boolean,
			default: false,
		},
		// ['switch-sex']
		icon: {
			type: String,
			default: '',
		},
	},
	created() {
    console.log('ssss', this.$attrs);
  },
  methods: {
  	handleChange(e) { 
  		this.$emit('handleChange', e)
		},
  },
}
</script>

<style lang="scss" scoped></style>
