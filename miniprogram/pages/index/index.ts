// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

const API_ENDPOINT = 'https://endpoint.2019festival.variantf.zgcszkw.com/api';

Page({
  data: {
    showSignonDialog: false,
    successiveSignonCount: '1',
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
        url: API_ENDPOINT + "/signon",
        success: app.handleRequstFinish(() => {
          this.setData({ showSignonDialog: true })
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
            url: API_ENDPOINT + "/login",
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
})
