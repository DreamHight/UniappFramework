<template>
	<view class="u-tag margin-xs">
		<view
			v-if="capsule.color"
			:class="['cu-capsule', shape]"
			@click="$emit('handleClick')"
		>
			<view
				:class="[
					'cu-tag',
					size,
					plain ? plain : (capsule.color ? 'bg-' + capsule.color : '')
				]"
			>
				<text v-if="capsule.left" class="margin-right-sm">{{ capsule.left }}</text>
				<text v-if="capsule.leftIcon" :class="[capsule.leftIcon]"></text>
			</view>
			<view
				:class="[
					'cu-tag',
					size,
					plain ? plain : (capsule.color ? 'line-' + capsule.color : '')
				]"
			>
				<text v-if="capsule.right" class="margin-right-sm">{{ capsule.right }}</text>
				<text v-if="capsule.rightIcon" :class="[capsule.rightIcon]"></text>
			</view>
		</view>
		<view
			v-else
			:class="[
				'cu-tag',
				shape,
				size,
				plain ? plain : (bgColor ? 'bg-' + bgColor : ''),
				textClass,
				badge ? 'badge' : ''
			]"
			@click="$emit('handleClick')"
		>{{ getText }}</view>
	</view>
</template>

<script>
export default {
  name: 'UTag',
  props: {
    capsule: {
      type: Object,
      default: () => {
        return {
			// color: 'red',
			// left: '32',
			// leftIcon: 'cuIcon-likefill',
			// right: '23',
			// rightIcon: 'cuIcon-likefill',
		}
      },
    },
	// ['round', 'radius']
	shape: {
	  type: String,
	  default: '',
	},
	// ['sm']
	size: {
	  type: String,
	  default: '',
	},
    bgColor: {
      type: String,
      default: '',
    },
	plain: {
	  type: String,
	  default: '',
	},
    text: {
      type: String | Number,
      default: '',
    },
    textClass: {
      type: String,
      default: '',
    },
	badge: {
		type: Boolean,
		default: false,
	},
  },
  computed: {
	getText() {
		let newText = this.text
		if(this.badge) {
			if(typeof(+newText) === 'number') {
				if(Number(newText) > 99) {
					newText = '99+'
				}
			}
		}
		return newText
	}
  },
}
</script>

<style lang="scss" scoped>
	.u-tag {
		display: inline-block;
	}
</style>
