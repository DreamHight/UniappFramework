<template>
  <view class="u-input">
    <input
      :value="value"
      :type="type"
      :password="password"
      :placeholder="placeholder"
      :placeholderStyle="placeholderStyle"
      :placeholderClass="placeholderClass"
      :disabled="disabled"
      :maxlength="maxlength"
      :cursorSpacing="cursorSpacing"
      :focus="focus"
      :confirmType="confirmType"
      :confirmHold="confirmHold"
      :cursor="cursor"
      :selectionStart="selectionStart"
      :selectionEnd="selectionEnd"
      :adjustPosition="adjustPosition"
      :holdKeyboard="holdKeyboard"
	    :autoBlur="autoBlur"
      @input="$emit('handleInput', $event, index)"
      @focus="$emit('handleFocus', $event, index)"
      @blur="$emit('handleBlur', $event, index)"
      @confirm="$emit('handleConfirm', $event, index)"
    />
  </view>
</template>

<script>
export default {
  name: 'UInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    password: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    placeholderStyle: {
      type: String,
      default: '',
    },
    placeholderClass: {
      type: String,
      default: 'input-placeholder',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
      default: -1,
    },
    cursorSpacing: {
      type: Number,
      default: 0,
    },
    focus: {
      type: Boolean,
      default: false,
    },
    confirmType: {
      type: String,
      default: 'done',
    },
    confirmHold: {
      type: Boolean,
      default: false,
    },
    cursor: {
      type: Number,
      default: 0,
    },
    selectionStart: {
      type: Number,
      default: -1,
    },
    selectionEnd: {
      type: Number,
      default: -1,
    },
    adjustPosition: {
      type: Boolean,
      default: true,
    },
    holdKeyboard: {
      type: Boolean,
      default: false,
    },
    autoBlur: {
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
    event: 'handleInput'
  },
}
</script>
