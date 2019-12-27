// index.ts
// 获取应用实例

Page({
  data: {
    btnStyle: 'btn-bg-blue'
  },
  hasJump: false,
  onShow() {
    if (this.hasJump) {
      wx.redirectTo({
        url: "/pages/index/index"
      })
    }
  },
  toLottery() {
    this.hasJump = true;
    wx.navigateToMiniProgram({
      appId: 'wx2ae8c932b8db6010',
      path: 'pages/prodetail/prodetail?gid=307'
    })
  },
  btnToRed() {
    this.setData({
      btnStyle: 'btn-bg-red'
    })
  },
  btnToBlue() {
    this.setData({
      btnStyle: 'btn-bg-blue'
    })
  }
})
