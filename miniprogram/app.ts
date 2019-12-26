// app.ts

App<IAppOption>({
  API_ENDPOINT: 'https://endpoint.2019festival.variantf.zgcszkw.com/api',
  globalData: {
    token: ''

  },
  onLaunch() {
    console.log(12334)
    this.innerAudioContext = wx.createInnerAudioContext();
    this.innerAudioContext.autoplay=true; 
    this.innerAudioContext.src ='https://endpoint.2019festival.variantf.zgcszkw.com/static/bgm.mp3';
    this.innerAudioContext.loop = true;
    this.innerAudioContext.play();
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