// app.ts

App<IAppOption>({
  globalData: {
    token: ''
  },
  onLaunch() {
  },
  handleRequstFinish(callback: (res: WechatMiniprogram.RequestSuccessCallbackResult) => void) {
    return (res: WechatMiniprogram.RequestSuccessCallbackResult) => {
      if (res.statusCode != 200) {
        this.handleRequestFail((res.data as any).message!);
      } else {
        callback(res);
      }
    }
  },
  handleRequestFail(res: WechatMiniprogram.GeneralCallbackResult) {
    console.log(res);
    wx.showModal({
      title: '错误',
      content: String(res),
      showCancel: false,
      complete: () => {
        wx.redirectTo({
          url: "index"
        });
      }
    });
    
  },
})