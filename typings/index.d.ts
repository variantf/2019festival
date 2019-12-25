/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    token: string
  },
  handleRequstFinish: (callback: (res: WechatMiniprogram.RequestSuccessCallbackResult) => void) => WechatMiniprogram.RequestSuccessCallback,
  handleRequestFail: (res: WechatMiniprogram.GeneralCallbackResult) => void
}