<template>
  <view :class="['u-grid cu-list grid', 'col-' + col, border ? '' : 'no-border']">
  	<block v-for="(item, index) in data" :key="index">
  		<block v-if="index < col * 2">
			<view class="cu-item" v-if="item.renderRichNodes">
				<rich-text :nodes="item.renderRichNodes"></rich-text>
			</view>
  			<view class="cu-item" v-else>
  				<view :class="['cuIcon-'+item.cuIcon,'text-'+item.color]">
  					<block v-if="item.badge != 0">
  						<view class="cu-tag badge">
  							<block v-if="item.badge != 1">
  								<block>{{ item.badge > 99 ? '99+': item.badge }}</block>
  							</block>
  						</view>
  					</block>
  				</view>
  				<text>{{ item.name }}</text>
  			</view>
  		</block>
  	</block>
   </view>
</template>

<script>
export default {
  name: 'UGrid',
  props: {
	data: {
		type: Array,
		default: () => {
			return []
		},
	},
    col: {
      type: Number,
      default: 3,
    },
    border: {
      type: Boolean,
      default: false,
    }
  },
}
</script>
