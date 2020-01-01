// index.ts
// 获取应用实例
var app = getApp<IAppOption>();

Page({
  data: {
    btnStyle: 'btn-bg-blue',
    bgmPlaying: true
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
  onShow() {
    this.setData({
      bgmPlaying: !app.bgmPaused()
    });
  },
  toggleBGM() {
    this.setData({
      bgmPlaying: !this.data.bgmPlaying
    });
    app.toggleBGM();
  },
  onShareAppMessage: app.onShare
})
