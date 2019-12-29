// index.ts
// 获取应用实例
var app = getApp<IAppOption>();

Page({
  data: {
    btnStyle: 'btn-bg-blue'
  },
  back() {
    wx.redirectTo({
      url: "/prepare-pages/pages/rule/rule"
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
})
