// index.ts
// 获取应用实例
var app = getApp<IAppOption>()

Page({
  data: {
    showSignonDialog: false,
    successiveSignonCount: 0,
    startBtnStyle: 'btn-bg-blue',
    signonDialogBgStyle: '',
    signonBtnStyle: 'btn-bg-blue',
    bgmPlaying: true
  },
  closeSignonDialog() {
    this.setData({ 
      showSignonDialog: false, 
      signonDialogBgStyle: ''
    })
  },
  start(info: any) {
    this.ensureLogin(info.detail.userInfo, ()=>{
      wx.redirectTo({
        url: "../../prepare-pages/pages/rule/rule"
      })
    });
  },
  signon() {
    wx.request({
      method: "POST",
      url: app.API_ENDPOINT + "/signon",
      header: {
        'X-User-Token': app.globalData.token
      },
      success: app.handleRequstFinish((res: any) => {
        this.setData({
          showSignonDialog: true,
          signonDialogBgStyle: 'signon-dialog-bg-2',
          successiveSignonCount: res.data.successiveSignonCount
        })
      }),
      fail: app.handleRequestFail
    })
  },
  showSignon(info: any) {
    app.sound("dialog")
    this.ensureLogin(info.detail.userInfo, ()=>{
      this.setData({
        showSignonDialog: true,
        signonDialogBgStyle: 'signon-dialog-bg-1'
      })
    })
  },
  ensureLogin(userInfo: Object, callback?: () => void) {
    if (!userInfo) {
      wx.showModal({
        title: '错误',
        content: '无法获取用户信息'
      });
      return;
    }
    wx.login({
      success(res: { code: string }) {
        // console.log(_res.code)
        if (res.code) {
          wx.request({
            method: "POST",
            url: app.API_ENDPOINT + "/login",
            data: {
              ...userInfo,
              code: res.code
            },
            success: app.handleRequstFinish(res => {
              const obj = res.data as { token: string };
              app.globalData.token = obj.token;
              if (callback) {
                callback();
              }
            }),
            fail: app.handleRequestFail
          })
        } else {
          wx.showModal({
            title: '错误',
            content: '无法获取用户Code信息'
          });
        }
      }
    })
  },
  onShareAppMessage: app.onShare,
  startBtnToRed() {
    app.sound("btn");
    this.setData({
      startBtnStyle: 'btn-bg-red'
    })
  },
  startBtnToBlue() {
    this.setData({
      startBtnStyle: 'btn-bg-blue'
    })
  },
  signonBtnToRed() {
    app.sound("btn");
    this.setData({
      signonBtnStyle: 'btn-bg-red'
    })
  },
  signonBtnToBlue() {
    this.setData({
      signonBtnStyle: 'btn-bg-blue'
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
  }
})
