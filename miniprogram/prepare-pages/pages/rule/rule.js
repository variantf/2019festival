var app = getApp()

Page({
  data: {
    btnStyle: 'btn-bg-blue'
  },
  next() {
    wx.redirectTo({
      url: '../countdown/countdown',
    })
  },
  btnToRed() {
    app.sound("btn")
    this.setData({
      btnStyle: 'btn-bg-red'
    })
  },
  btnToBlue() {
    this.setData({
      btnStyle: 'btn-bg-blue'
    })
  },
  onShow() {
    app.sound("rule")
  }
})