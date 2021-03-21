<template>
  <view class="u-upload">
    <view class="bg-white">
      <slot name="header">
        <view class="cu-bar">
          <view class="action">{{ title }}</view>
          <view class="action">{{'' + imgList.length + '/' + imgLength }}</view>
        </view>
      </slot>
    </view>
    <view class="cu-form-group">
      <view :class="['grid', 'col-' + col, 'grid-square', 'flex-sub']">
        <block v-for="(item, index) in imgList" :key="index">
          <view class="bg-img">
            <image :src="imgList[index]" mode="aspectFill"></image>
            <view class="cu-tag bg-red" @click="deleteImage($event, customBottomTextArr[index])">
              <text class="cuIcon-close"></text>
            </view>
          </view>
        </block>

        <block v-if="customChoose && customChoose.length > 0">
          <block
            v-for="(obj, index) in customChoose"
            :key="index"
          >
            <block v-if="!customBottomTextArr.includes(obj.bottomText)">
              <view
                class="solids"
                @click="chooseImage($event, obj.bottomText)"
              >
                <text class="cuIcon-cameraadd">
                  <text class="text-sm">{{ obj.bottomText }}</text>
                </text>
              </view>
            </block>
          </block>
        </block>
        <block v-if="(!customChoose || customChoose.length) === 0 && (imgList.length < imgLength)">
          <view
            class="solids"
            @click="chooseImage($event, bottomText)"
          >
            <text class="cuIcon-cameraadd">
              <text class="text-sm">{{ bottomText }}</text>
            </text>
          </view>
        </block>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'UUpload',
  props: {
    col: {
      type: String,
      default: '4',
    },
    title: {
      type: String,
      default: '图片上传',
    },
    imgLength: {
      type: Number | String,
      default: 1,
    },
    customChoose: {
      type: Array,
      default: () => {
        return []
      },
    },
    bottomText: {
      type: String,
      default: '',
    },
  },
  computed: {},
  data() {
    return {
      imgList: [],
      customBottomTextArr: []
    }
  },
  methods: {
    chooseImage(e, t) {
      uni.chooseImage({
        count: this.imgLength, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['camera', 'album'], // album 从相册选图，camera 使用相机，默认二者都有。
        success: res => {
          if (this.imgList.length != 0) {
            this.imgList = this.imgList.concat(res.tempFilePaths)
          } else {
            this.imgList = res.tempFilePaths
          }
          this.customBottomTextArr.push(t)
        },
        fail: err => {
          console.log(err)
        },
        complete: complete => {
          console.log(complete)
          this.$emit('handleChooseImage', e, this.imgList)
        }
      })
    },
    deleteImage(e, t) {
      if(this.customBottomTextArr.length){
        this.customBottomTextArr.map((item, index) => {
          if(item === t){
            this.imgList.splice(index, 1)
            this.customBottomTextArr.splice(index, 1)
          }
        })
      }else{
        this.imgList.splice(e.currentTarget.dataset.index, 1)
      }
      this.$emit('handleDeleteImage', e, this.imgList)

      // uni.showModal({
      //   title: '温馨提示',
      //   content: '确定要删除？',
      //   cancelText: '取消',
      //   confirmText: '确定',
      //   success: res => {
      //     if (res.confirm) {
      //       if(this.customBottomTextArr.length){
      //         this.customBottomTextArr.map((item, index) => {
      //           if(item === t){
      //             this.imgList.splice(index, 1)
      //             this.customBottomTextArr.splice(index, 1)
      //           }
      //         })
      //       }else{
      //         this.imgList.splice(e.currentTarget.dataset.index, 1)
      //       }
      //     }
      //   },
      //   fail: err => {
      //     console.log(err)
      //   },
      //   complete: complete => {
      //     console.log(complete)
      //     this.$emit('handleDeleteImage', e, this.imgList)
      //   }
      // })
    },
  },
}
</script>
