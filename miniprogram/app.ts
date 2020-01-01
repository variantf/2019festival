// app.ts

App<IAppOption>({
  API_ENDPOINT: 'https://endpoint.2019festival.variantf.zgcszkw.com/api',
  STATIC_URL: 'https://endpoint.2019festival.variantf.zgcszkw.com/static/',
  globalData: {
    token: ''

  },
  onLaunch() {
    this.bgmInnerAudioContext = wx.createInnerAudioContext();
    this.bgmInnerAudioContext.src = this.STATIC_URL + 'bgm.mp3';
    this.bgmInnerAudioContext.loop = true;
    this.bgmInnerAudioContext.autoplay = true;
    this._bgmPaused = false;
    const self = this;
    this.bgmInnerAudioContext.onPlay = function() {
      self._bgmPaused = false;
    }
    this.bgmInnerAudioContext.onPause = function() {
      self._bgmPaused = true;
    }

    this.btnInnerAudioContext = wx.createInnerAudioContext();
    this.btnInnerAudioContext.src = this.STATIC_URL + 'btn.mp3';

    this.correctInnerAudioContext = wx.createInnerAudioContext();
    this.correctInnerAudioContext.src = this.STATIC_URL + 'correct.mp3';

    this.failedInnerAudioContext = wx.createInnerAudioContext();
    this.failedInnerAudioContext.src = this.STATIC_URL + 'failed.mp3';

    this.dialogInnerAudioContext = wx.createInnerAudioContext();
    this.dialogInnerAudioContext.src = this.STATIC_URL + 'dialog.mp3';

    this.lotteryInnerAudioContext = wx.createInnerAudioContext();
    this.lotteryInnerAudioContext.src = this.STATIC_URL + 'lottery.mp3';

    this.ruleInnerAudioContext = wx.createInnerAudioContext();
    this.ruleInnerAudioContext.src = this.STATIC_URL + 'rule.mp3';

    this.startInnerAudioContext = wx.createInnerAudioContext();
    this.startInnerAudioContext.src = this.STATIC_URL + 'start.mp3';
  },
  onShow () {
    const { bgmInnerAudioContext } = this;
    if (bgmInnerAudioContext === null) {
      return
    }
    if (this._bgmPaused) {
      bgmInnerAudioContext.pause();
    } else {
      bgmInnerAudioContext.play();
    }
  },
  toggleBGM() {
    const {bgmInnerAudioContext} = this;
    if (bgmInnerAudioContext === null) {
      return
    }
    if (this._bgmPaused) {
      bgmInnerAudioContext.play();
      this._bgmPaused = false;
    } else {
      bgmInnerAudioContext.pause();
      this._bgmPaused = true;
    }
  },
  bgmPaused() {
    return this._bgmPaused;
  },
  sound(name: string) {
    const x: any = this;
    const ctx: any =x[`${name}InnerAudioContext`];
    if (ctx !== null) {
      ctx.play();
    }
  },
  _bgmPaused: false,
  bgmInnerAudioContext: null,
  btnInnerAudioContext: null,
  correctInnerAudioContext: null,
  failedInnerAudioContext: null,
  dialogInnerAudioContext: null,
  startInnerAudioContext: null,
  ruleInnerAudioContext: null,
  lotteryInnerAudioContext: null,
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
          url: "/pages/index/index"
        });
      }
    });
  },
  onShare: function(){
    if (this.globalData.token) {
      wx.request({
        url: this.API_ENDPOINT + "/shared",
        method: "POST",
        header: {
          'X-User-Token': this.globalData.token
        }
      })
    }

    return {
      title: '红包年货拿到嗨，一起欢喜过大年',
      imageUrl: 'https://endpoint.2019festival.variantf.zgcszkw.com/static/share.jpg'
    }
  }
})