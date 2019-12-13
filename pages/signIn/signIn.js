import moment from "moment"
moment.locale('zh-cn') //将语言环境设置为本地
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_diable: false,
    is_cover:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let _this = this
    let preDate = wx.getStorageSync('preDate')
    let tody = new Date()
    if (!preDate) {
     return
    }
    let diff = moment(tody).diff(moment(preDate), 'days')
    if (diff < 1 ) {
      _this.setData({
        is_diable: true
      })
    }


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    //设置自定义tabbar的选中态
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  sign_in: function() {
    let _this = this
    wx.setStorageSync("preDate", new Date())
    _this.setData({
      is_diable: true
    })
  },
  extractSubmit: function(e) {
    let _this=this
    console.log('提取积分，携带数据为：', e.detail.value)
    _this.setData({
      is_cover: true
    })
    
  
  },
  closeToast:function(){
    this.setData({
      is_cover: false
    })
  },
  test:function(){
    console.log("进入积分商城")
  }
})