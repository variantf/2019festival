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