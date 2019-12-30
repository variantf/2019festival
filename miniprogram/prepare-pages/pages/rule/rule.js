var app = getApp()

Page({
  data: {
    btnStyle: 'btn-bg-blue',
    bgmPlaying: true
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
    app.sound("rule");
    this.setData({
      bgmPlaying: !app.bgmPaused()
    });
  },
  toggleBGM() {
    this.setData({
      bgmPlaying: !this.data.bgmPlaying
    });
    app.toggleBGM();
  }
})