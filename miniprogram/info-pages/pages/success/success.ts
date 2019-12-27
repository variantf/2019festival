// index.ts
// 获取应用实例

Page({
  data: {
    correctNum: 0,
    btnStyle: 'btn-bg-blue'
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
  },
})
