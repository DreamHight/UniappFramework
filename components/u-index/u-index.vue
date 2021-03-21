<template>
  <view>u-index</view>
</template>

<script>
export default {
  name: "UIndex",
  props: {},
  computed: {},
  data() {
    return {}
  },
  beforeCreate() {
    // 在实例初始化之后被调用
    console.log("component beforeCreate");
  },
  created() {
    // 在实例创建完成后被立即调用
    console.log("component created");
  },
  beforeMount() {
    // 在挂载开始之前被调用
    console.log("component beforeMount");
  },
  mounted() {
    // 挂载到实例上去之后调用
    // 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用$nextTick
    console.log("component mounted");
  },
  beforeUpdate() {
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前【仅H5平台支持】
    console.log("component beforeUpdate");
  },
  updated() {
    // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子【仅H5平台支持】
    console.log("component updated");
  },
  beforeDestroy() {
    // 实例销毁之前调用。在这一步，实例仍然完全可用
    console.log("component beforeDestroy");
  },
  destroyed() {
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁
    console.log("component destroyed");
  },
  methods: {},
};
</script>

<style>
</style>
