import {get,post} from '../../utils/request.js'


//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    active_index:0,
    is_diable:false,
    is_cover:false//是否显示遮罩
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  
    this.setData({
      navH: app.globalData.navHeight,
      navTop: app.globalData.navTop
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function () {
    //设置自定义tabbar的选中态
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  change_active_index:function(e){
    let _this=this
    _this.setData({
      active_index: e.currentTarget.dataset.active_index
    })
  },
  integral_submit: function (e) {
    console.log('获取积分，携带数据为：', e.detail.value)
    this.setData({
      is_cover:true
    })
    wx.createSelectorQuery().select('.button_wrap').boundingClientRect(res=>{
      console.log(res)
    }).exec()
  },
  close_cover:function(){
    this.setData({
      is_cover: false
    })
  }
 
 
})
