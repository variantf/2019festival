// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    showSignonDialog: false,
    successiveSignonCount: '1',
  },
  signon() {
    this.setData({
      showSignonDialog: true
    })
  },
  closeSignonDialog() {
    this.setData({showSignonDialog: false})
  },
  start(info: any) {
    this.ensureLogin(info.detail.userInfo, ()=>{
      wx.redirectTo({
        url: "../../info-pages/pages/rule/rule"
      })
    });
  },
  ensureLogin(userInfo: Object, callback?: () => void) {
    if (!userInfo) {
      wx.showModal({
        title: '错误',
        content: '无法获取用户信息'
      });
      return;
    }
    const page = this;
    wx.login({
      success(res: { code: string }) {
        // console.log(_res.code)
        if (res.code) {
          wx.request({
            method: "POST",
            url: "https://endpoint.go-ahead.variantf.zgcszkw.com/api/login",
            data: {
              ...userInfo,
              code: res.code
            },
            success(res) {
              const obj = res.data as { token: string };
              page.token = obj.token;
              if (callback) {
                callback();
              }
            },
            fail: page.handleRequestFail
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
