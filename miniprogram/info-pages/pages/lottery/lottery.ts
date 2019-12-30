// index.ts
// 获取应用实例
var app = getApp<IAppOption>();
Page({
  data: {
    btnStyle: 'btn-bg-blue',
    logo: '',
    link: '',
    bgmPlaying: true
  },
  hasJump: false,
  onLoad(options: any) {
    console.log("options", options);
    this.setData({
      logo: decodeURIComponent(options.logo),
      link: decodeURIComponent(options.link)
    })
  },
  onShow() {
    app.sound("lottery")
    if (this.hasJump) {
      wx.redirectTo({
        url: "/pages/index/index"
      })
    }
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
  toLottery() {
    this.hasJump = true;
    if (this.data.link.substr(0, 11) === "miniprogram") {
      const link = this.data.link.substr(14);
      const spliter = link.indexOf('/');
      const appId = link.substr(0, spliter);
      const path = link.substr(spliter + 1);
      console.log("link: ", link, appId, path);
      wx.navigateToMiniProgram({
        appId,
        path
      })
    } else {
      wx.redirectTo({
        url: `../webview/webview?url=${encodeURIComponent(this.data.link)}`
      })
    }
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
