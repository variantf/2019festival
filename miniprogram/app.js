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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxHQUFHLENBQWE7SUFDZCxZQUFZLEVBQUUsd0RBQXdEO0lBQ3RFLFVBQVUsRUFBRTtRQUNWLEtBQUssRUFBRSxFQUFFO0tBRVY7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEdBQUUsbUVBQW1FLENBQUM7UUFDaEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLGtCQUFrQixFQUFsQixVQUFtQixRQUF1RTtRQUExRixpQkFRQztRQVBDLE9BQU8sVUFBQyxHQUFtRDtZQUN6RCxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFO2dCQUN6QixLQUFJLENBQUMsaUJBQWlCLENBQUUsR0FBRyxDQUFDLElBQVksQ0FBQyxPQUFRLENBQUMsQ0FBQzthQUNwRDtpQkFBTTtnQkFDTCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDZjtRQUNILENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxpQkFBaUIsRUFBakIsVUFBa0IsR0FBNEM7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNwQixVQUFVLEVBQUUsS0FBSztZQUNqQixRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDWixHQUFHLEVBQUUsb0JBQW9CO2lCQUMxQixDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC50c1xuXG5BcHA8SUFwcE9wdGlvbj4oe1xuICBBUElfRU5EUE9JTlQ6ICdodHRwczovL2VuZHBvaW50LjIwMTlmZXN0aXZhbC52YXJpYW50Zi56Z2Nzemt3LmNvbS9hcGknLFxuICBnbG9iYWxEYXRhOiB7XG4gICAgdG9rZW46ICcnXG5cbiAgfSxcbiAgb25MYXVuY2goKSB7XG4gICAgdGhpcy5pbm5lckF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XG4gICAgdGhpcy5pbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheT10cnVlOyBcbiAgICB0aGlzLmlubmVyQXVkaW9Db250ZXh0LnNyYyA9J2h0dHBzOi8vZW5kcG9pbnQuMjAxOWZlc3RpdmFsLnZhcmlhbnRmLnpnY3N6a3cuY29tL3N0YXRpYy9iZ20ubXAzJztcbiAgICB0aGlzLmlubmVyQXVkaW9Db250ZXh0Lmxvb3AgPSB0cnVlO1xuICAgIHRoaXMuaW5uZXJBdWRpb0NvbnRleHQucGxheSgpO1xuICB9LFxuICBpbm5lckF1ZGlvQ29udGV4dDogbnVsbCxcbiAgaGFuZGxlUmVxdXN0RmluaXNoKGNhbGxiYWNrOiAocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5SZXF1ZXN0U3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuIChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLlJlcXVlc3RTdWNjZXNzQ2FsbGJhY2tSZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSAhPSAyMDApIHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0RmFpbCgocmVzLmRhdGEgYXMgYW55KS5tZXNzYWdlISk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgaGFuZGxlUmVxdWVzdEZhaWwocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZW5lcmFsQ2FsbGJhY2tSZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICB0aXRsZTogJ+mUmeivrycsXG4gICAgICBjb250ZW50OiBTdHJpbmcocmVzKSxcbiAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgdXJsOiBcIi9wYWdlcy9pbmRleC9pbmRleFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxufSkiXX0=