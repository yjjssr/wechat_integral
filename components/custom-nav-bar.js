// components/custom-nav-bar.js
const app = getApp()
Component({
  lifetimes:{
    attached: function () {
      // 在组件实例进入页面节点树时执行
    }
  },
  pageLifetimes: {
    show() {
      this.setData({
        navH: app.globalData.navHeight,
        navTop: app.globalData.navTop
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
   
  }
})
