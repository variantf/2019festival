/// <reference path="./types/index.d.ts" />

interface IAppOption {
  API_ENDPOINT: string,
  STATIC_URL: string,
  globalData: {
    token: string
  },
  bgmInnerAudioContext: WechatMiniprogram.InnerAudioContext | null,
  btnInnerAudioContext: WechatMiniprogram.InnerAudioContext | null,
  correctInnerAudioContext: WechatMiniprogram.InnerAudioContext | null,
  failedInnerAudioContext: WechatMiniprogram.InnerAudioContext | null,
  dialogInnerAudioContext: WechatMiniprogram.InnerAudioContext | null,
  startInnerAudioContext: WechatMiniprogram.InnerAudioContext | null,
  ruleInnerAudioContext: WechatMiniprogram.InnerAudioContext | null,
  lotteryInnerAudioContext: WechatMiniprogram.InnerAudioContext | null,
  sound: (name:string) => void,
  handleRequstFinish: (callback: (res: WechatMiniprogram.RequestSuccessCallbackResult) => void) => WechatMiniprogram.RequestSuccessCallback,
  handleRequestFail: (res: WechatMiniprogram.GeneralCallbackResult) => void,
  toggleBGM: () => void,
  bgmPaused: () => boolean,
  _bgmPaused: boolean
}