export const router = (options, type='navigateTo') => {
  const typeJson = {
    navigateTo: () => {
      // 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
      uni.navigateTo(options)
    },
    redirectTo: () => {
      // 关闭当前页面，跳转到应用内的某个页面。
      uni.redirectTo(options)
    },
    reLaunch: () => {
      // 关闭所有页面，打开到应用内的某个页面。
      uni.reLaunch(options)
    },
    switchTab: () => {
      // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
      uni.switchTab(options)
    },
    navigateBack: () => {
      // 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
      uni.navigateBack(options)
    },
    preloadPage: () => {
      // 预加载页面，是一种性能优化技术。被预载的页面，在打开时速度更快。
      // 【App-nvue、H5】
      uni.preloadPage(options)
    }
  }
  typeJson[type]()
}
