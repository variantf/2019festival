// index.ts
// 获取应用实例

Page({
  data: {
    correctNum: 0
  },
  toLottery() {
    wx.redirectTo({
      url: "../lottery/lottery"
    })
  },
  onLoad(options: any) {
    console.log("options", options)
    this.setData({
      correctNum: options.correct_count
    });
  }
})
