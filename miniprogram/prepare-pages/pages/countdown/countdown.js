var app = getApp()
// info-pages/pages/countdown/countdown.js
Page({

  /**
   * Page initial data
   */
  data: {
    remainSeconds: 3
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    const self = this;
    this.timer = setInterval(() => {
      console.log(self.data.remainSeconds);
      if (self.data.remainSeconds == 0) {
        wx.redirectTo({
          url: '/running/pages/running/running',
        })
        clearInterval(self.timer);
      } else {
        self.setData({
          remainSeconds: self.data.remainSeconds - 1
        });
      }
    }, 1000);
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
  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {
    clearInterval(this.timer);
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: app.onShare,
})