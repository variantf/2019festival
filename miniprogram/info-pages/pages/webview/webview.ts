var app = getApp<IAppOption>()

Page({
  data: {
    url: ''
  },
  onLoad(options: any) {
    this.setData!({
      url: decodeURIComponent(options.url)
    });
  },
  onOpenID(e: any) {
    console.log("on load: ", e);
  },
  onWebViewLoad(e: any) {
    console.log("on load: ", e);
  },
  onWebViewError(e: any) {
    console.log("on error: ", e);
  }
});