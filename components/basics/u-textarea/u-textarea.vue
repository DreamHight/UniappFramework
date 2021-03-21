<template>
  <view class="u-textarea">
    <textarea
      :value="value"
      :placeholder="placeholder"
      :placeholderStyle="placeholderStyle"
      :placeholderClass="placeholderClass"
      :disabled="disabled"
      :maxlength="maxlength"
	  :focus="focus"
	  :autoHeight="autoHeight"
	  :fixed="fixed"
      :cursorSpacing="cursorSpacing"
	  :cursor="cursor"
      :confirmType="confirmType"
      :showConfirmBar="showConfirmBar"
      :selectionStart="selectionStart"
      :selectionEnd="selectionEnd"
      :adjustPosition="adjustPosition"
	  :disableDefaultPadding="disableDefaultPadding"
      :holdKeyboard="holdKeyboard"
	  :autoBlur="autoBlur"
	  @focus="$emit('handleFocus', $event, index)"
      @blur="$emit('handleBlur', $event, index)"
	  @linechange="$emit('handleLinechange', $event, index)"
	  @input="$emit('handleInput', $event, index)"
      @confirm="$emit('handleConfirm', $event, index)"
	  @keyboardheightchange="$emit('handleKeyboardheightchange', $event, index)"
    />
  </view>
</template>

<script>
export default {
  name: 'UTextarea',
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '多行文本输入框',
    },
    placeholderStyle: {
      type: String,
      default: '',
    },
    placeholderClass: {
      type: String,
      default: 'textarea-placeholder',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
      default: -1,
    },
	focus: {
	  type: Boolean,
	  default: false,
	},
	autoHeight: {
	  type: Boolean,
	  default: false,
	},
	fixed: {
	  type: Boolean,
	  default: false,
	},
    cursorSpacing: {
      type: Number,
      default: 0,
    },
	cursor: {
	  type: Number,
	  default: 0,
	},
    confirmType: {
      type: String,
      default: 'done',
    },
    showConfirmBar: {
      type: Boolean,
      default: false,
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
	disableDefaultPadding: {
		type: Boolean,
		default: false,
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
