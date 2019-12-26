/// <reference path="./types/index.d.ts" />

interface IAppOption {
  API_ENDPOINT: string,
  globalData: {
    token: string
  },
  handleRequstFinish: (callback: (res: WechatMiniprogram.RequestSuccessCallbackResult) => void) => WechatMiniprogram.RequestSuccessCallback,
  handleRequestFail: (res: WechatMiniprogram.GeneralCallbackResult) => void
}