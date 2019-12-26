// index.ts
// 获取应用实例
var app = getApp<IAppOption>()

Page({
  data: {
    showSignonDialog: false,
    successiveSignonCount: 0,
  },
  closeSignonDialog() {
    this.setData({ showSignonDialog: false })
  },
  start(info: any) {
    this.ensureLogin(info.detail.userInfo, ()=>{
      wx.redirectTo({
        url: "../../info-pages/pages/rule/rule"
      })
    });
  },
  signon(info: any) {
    this.ensureLogin(info.detail.userInfo, ()=>{
      wx.request({
        method: "POST",
        url: app.API_ENDPOINT + "/signon",
        header: {
          'X-User-Token': app.globalData.token
        },
        success: app.handleRequstFinish((res: any) => {
          this.setData({ 
            showSignonDialog: true, 
            successiveSignonCount: res.data.successiveSignonCount 
          })
        }),
        fail: app.handleRequestFail
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
  onShareAppMessage: function () {
    if (app.globalData.token) {
      wx.request({
        url: app.API_ENDPOINT + "/shared",
        method: "POST",
        header: {
          'X-User-Token': app.globalData.token
        }
      })
    }

    return {
      title: '快来跟我一起玩河北经视新春欢享节！！',
      imageUrl: 'https://endpoint.2019festival.variantf.zgcszkw.com/static/share.jpg'
    }
  },
})
