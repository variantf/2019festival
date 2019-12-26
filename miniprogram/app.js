"use strict";
App({
    API_ENDPOINT: 'https://endpoint.2019festival.variantf.zgcszkw.com/api',
    globalData: {
        token: ''
    },
    onLaunch: function () {
        this.innerAudioContext = wx.createInnerAudioContext();
        this.innerAudioContext.autoplay = true;
        this.innerAudioContext.src = 'https://endpoint.2019festival.variantf.zgcszkw.com/static/bgm.mp3';
        this.innerAudioContext.loop = true;
        this.innerAudioContext.play();
    },
    innerAudioContext: null,
    handleRequstFinish: function (callback) {
        var _this = this;
        return function (res) {
            if (res.statusCode != 200) {
                _this.handleRequestFail(res.data.message);
            }
            else {
                callback(res);
            }
        };
    },
    handleRequestFail: function (res) {
        console.log(res);
        wx.showModal({
            title: '错误',
            content: String(res),
            showCancel: false,
            complete: function () {
                wx.redirectTo({
                    url: "/pages/index/index"
                });
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxHQUFHLENBQWE7SUFDZCxZQUFZLEVBQUUsd0RBQXdEO0lBQ3RFLFVBQVUsRUFBRTtRQUNWLEtBQUssRUFBRSxFQUFFO0tBRVY7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEdBQUUsbUVBQW1FLENBQUM7UUFDaEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLGtCQUFrQixZQUFDLFFBQXVFO1FBQTFGLGlCQVFDO1FBUEMsT0FBTyxVQUFDLEdBQW1EO1lBQ3pELElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7Z0JBQ3pCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBRSxHQUFHLENBQUMsSUFBWSxDQUFDLE9BQVEsQ0FBQyxDQUFDO2FBQ3BEO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNmO1FBQ0gsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUNELGlCQUFpQixZQUFDLEdBQTRDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDcEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsUUFBUSxFQUFFO2dCQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLG9CQUFvQjtpQkFDMUIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcblxuQXBwPElBcHBPcHRpb24+KHtcbiAgQVBJX0VORFBPSU5UOiAnaHR0cHM6Ly9lbmRwb2ludC4yMDE5ZmVzdGl2YWwudmFyaWFudGYuemdjc3prdy5jb20vYXBpJyxcbiAgZ2xvYmFsRGF0YToge1xuICAgIHRva2VuOiAnJ1xuXG4gIH0sXG4gIG9uTGF1bmNoKCkge1xuICAgIHRoaXMuaW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xuICAgIHRoaXMuaW5uZXJBdWRpb0NvbnRleHQuYXV0b3BsYXk9dHJ1ZTsgXG4gICAgdGhpcy5pbm5lckF1ZGlvQ29udGV4dC5zcmMgPSdodHRwczovL2VuZHBvaW50LjIwMTlmZXN0aXZhbC52YXJpYW50Zi56Z2Nzemt3LmNvbS9zdGF0aWMvYmdtLm1wMyc7XG4gICAgdGhpcy5pbm5lckF1ZGlvQ29udGV4dC5sb29wID0gdHJ1ZTtcbiAgICB0aGlzLmlubmVyQXVkaW9Db250ZXh0LnBsYXkoKTtcbiAgfSxcbiAgaW5uZXJBdWRpb0NvbnRleHQ6IG51bGwsXG4gIGhhbmRsZVJlcXVzdEZpbmlzaChjYWxsYmFjazogKHJlczogV2VjaGF0TWluaXByb2dyYW0uUmVxdWVzdFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4gdm9pZCkge1xuICAgIHJldHVybiAocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5SZXF1ZXN0U3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1c0NvZGUgIT0gMjAwKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVxdWVzdEZhaWwoKHJlcy5kYXRhIGFzIGFueSkubWVzc2FnZSEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGhhbmRsZVJlcXVlc3RGYWlsKHJlczogV2VjaGF0TWluaXByb2dyYW0uR2VuZXJhbENhbGxiYWNrUmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgdGl0bGU6ICfplJnor68nLFxuICAgICAgY29udGVudDogU3RyaW5nKHJlcyksXG4gICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgIHVybDogXCIvcGFnZXMvaW5kZXgvaW5kZXhcIlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbn0pIl19