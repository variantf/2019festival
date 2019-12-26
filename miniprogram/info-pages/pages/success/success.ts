// index.ts
// 获取应用实例

Page({
  toLottery() {
    wx.redirectTo({
      url: "../lottery/lottery"
    })
  },
  onLoad(options: any) {
    console.log("options", options)
  }
})
