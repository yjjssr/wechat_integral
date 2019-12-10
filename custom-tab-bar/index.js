Component({
  data: {
    selected: 0,
    color: "#dbdbdb",
    selectedColor: "#e5971f",
    list: [{
      pagePath: "../index/index",
      iconPath: "../assets/image/gift_inactive.png",
      selectedIconPath: "../assets/image/gift_active.png",
      text: "获取积分"
    }, {
      pagePath: "../signIn/signIn",
      iconPath: "../assets/image/sign_inactive.png",
      selectedIconPath: "../assets/image/sign_active.png",
      text: "释放积分"
    }]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})