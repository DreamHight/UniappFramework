<template>
  <view class="u-input">
    <picker
      :mode="mode"
      :range="range"
      :rangeKey="rangeKey"
      :value="value"
      :customItem="customItem"
      :start="start"
      :end="end"
      :fields="fields"
      :selectorType="selectorType"
      @change="$emit('handleChange', $event, index)"
      @cancel="$emit('handleCancel', $event, index)"
      @columnchange="$emit('handleColumnchange', $event, index)"
    >
      <view class="picker">
        {{ range.length ? range[rangeKey || value] : (value.join ? value.join(',') : value) }}
      </view>
    </picker>
  </view>
</template>

<script>
export default {
  name: 'UPicker',
  props: {
    // 【selector、multiSelector、time、date、region】
    mode: {
      type: String,
      default: 'selector',
    },
    range: {
      type: Array,
      default: () => {
        return []
      },
    },
    rangeKey: {
      type: String,
      default: '',
    },
    value: {
      type: String | Number | Array,
      default: '',
    },
    customItem: {
      type: String,
      default: '',
    },
    start: {
      type: String,
      default: '',
    },
    end: {
      type: String,
      default: '',
    },
    fields: {
      type: String,
      default: 'day',
    },
    selectorType: {
      type: String,
      default: 'auto',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: 0,
    }
  },
  model: {
    prop: 'value',
    prop: 'index',
    event: 'handleChange'
  },
}
</script>
