// index.ts
// 获取应用实例
var app = getApp<IAppOption>()

Page({
  data: {
    correctNum: 0,
    btnStyle: 'btn-bg-blue',
    sessionId: ''
  },
  toLottery() {
    wx.request({
      method: "POST",
      url: app.API_ENDPOINT + `/session/${this.data.sessionId}/lottery`,
      header: {
        'X-User-Token': app.globalData.token
      },
      fail: app.handleRequestFail,
      success: app.handleRequstFinish((res: any) => {
        const {data} = res;
        wx.redirectTo({ url: `../lottery/lottery?link=${encodeURIComponent(data.link)}&logo=${encodeURIComponent(data.logo)}` });
      })
    });
  },
  onLoad(options: any) {
    console.log("options", options)
    this.setData({
      correctNum: options.correct_count,
      sessionId: options.session_id
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
