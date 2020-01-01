"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var app = getApp();
Page({
    data: {
        showSignonDialog: false,
        successiveSignonCount: 0,
        startBtnStyle: 'btn-bg-blue',
        signonDialogBgStyle: '',
        signonBtnStyle: 'btn-bg-blue',
        bgmPlaying: true
    },
    closeSignonDialog: function () {
        this.setData({
            showSignonDialog: false,
            signonDialogBgStyle: ''
        });
    },
    start: function (info) {
        this.ensureLogin(info.detail.userInfo, function () {
            wx.redirectTo({
                url: "../../prepare-pages/pages/rule/rule"
            });
        });
    },
    signon: function () {
        var _this = this;
        wx.request({
            method: "POST",
            url: app.API_ENDPOINT + "/signon",
            header: {
                'X-User-Token': app.globalData.token
            },
            success: app.handleRequstFinish(function (res) {
                _this.setData({
                    showSignonDialog: true,
                    signonDialogBgStyle: 'signon-dialog-bg-2',
                    successiveSignonCount: res.data.successiveSignonCount
                });
            }),
            fail: app.handleRequestFail
        });
    },
    showSignon: function (info) {
        var _this = this;
        app.sound("dialog");
        this.ensureLogin(info.detail.userInfo, function () {
            _this.setData({
                showSignonDialog: true,
                signonDialogBgStyle: 'signon-dialog-bg-1'
            });
        });
    },
    ensureLogin: function (userInfo, callback) {
        if (!userInfo) {
            wx.showModal({
                title: '错误',
                content: '无法获取用户信息'
            });
            return;
        }
        wx.login({
            success: function (res) {
                if (res.code) {
                    wx.request({
                        method: "POST",
                        url: app.API_ENDPOINT + "/login",
                        data: __assign({}, userInfo, { code: res.code }),
                        success: app.handleRequstFinish(function (res) {
                            var obj = res.data;
                            app.globalData.token = obj.token;
                            if (callback) {
                                callback();
                            }
                        }),
                        fail: app.handleRequestFail
                    });
                }
                else {
                    wx.showModal({
                        title: '错误',
                        content: '无法获取用户Code信息'
                    });
                }
            }
        });
    },
    onShareAppMessage: app.onShare,
    startBtnToRed: function () {
        app.sound("btn");
        this.setData({
            startBtnStyle: 'btn-bg-red'
        });
    },
    startBtnToBlue: function () {
        this.setData({
            startBtnStyle: 'btn-bg-blue'
        });
    },
    signonBtnToRed: function () {
        app.sound("btn");
        this.setData({
            signonBtnStyle: 'btn-bg-red'
        });
    },
    signonBtnToBlue: function () {
        this.setData({
            signonBtnStyle: 'btn-bg-blue'
        });
    },
    onShow: function () {
        this.setData({
            bgmPlaying: !app.bgmPaused()
        });
    },
    toggleBGM: function () {
        this.setData({
            bgmPlaying: !this.data.bgmPlaying
        });
        app.toggleBGM();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUU5QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLHFCQUFxQixFQUFFLENBQUM7UUFDeEIsYUFBYSxFQUFFLGFBQWE7UUFDNUIsbUJBQW1CLEVBQUUsRUFBRTtRQUN2QixjQUFjLEVBQUUsYUFBYTtRQUM3QixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCLG1CQUFtQixFQUFFLEVBQUU7U0FDeEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUssWUFBQyxJQUFTO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxxQ0FBcUM7YUFDM0MsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTTtRQUFOLGlCQWdCQztRQWZDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxHQUFHLENBQUMsWUFBWSxHQUFHLFNBQVM7WUFDakMsTUFBTSxFQUFFO2dCQUNOLGNBQWMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUs7YUFDckM7WUFDRCxPQUFPLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFVBQUMsR0FBUTtnQkFDdkMsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxnQkFBZ0IsRUFBRSxJQUFJO29CQUN0QixtQkFBbUIsRUFBRSxvQkFBb0I7b0JBQ3pDLHFCQUFxQixFQUFFLEdB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RUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG52YXIgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBzaG93U2lnbm9uRGlhbG9nOiBmYWxzZSxcbiAgICBzdWNjZXNzaXZlU2lnbm9uQ291bnQ6IDAsXG4gICAgc3RhcnRCdG5TdHlsZTogJ2J0bi1iZy1ibHVlJyxcbiAgICBzaWdub25EaWFsb2dCZ1N0eWxlOiAnJyxcbiAgICBzaWdub25CdG5TdHlsZTogJ2J0bi1iZy1ibHVlJyxcbiAgICBiZ21QbGF5aW5nOiB0cnVlXG4gIH0sXG4gIGNsb3NlU2lnbm9uRGlhbG9nKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7IFxuICAgICAgc2hvd1NpZ25vbkRpYWxvZzogZmFsc2UsIFxuICAgICAgc2lnbm9uRGlhbG9nQmdTdHlsZTogJydcbiAgICB9KVxuICB9LFxuICBzdGFydChpbmZvOiBhbnkpIHtcbiAgICB0aGlzLmVuc3VyZUxvZ2luKGluZm8uZGV0YWlsLnVzZXJJbmZvLCAoKT0+e1xuICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogXCIuLi8uLi9wcmVwYXJlLXBhZ2VzL3BhZ2VzL3J1bGUvcnVsZVwiXG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuICBzaWdub24oKSB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBhcHAuQVBJX0VORFBPSU5UICsgXCIvc2lnbm9uXCIsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ1gtVXNlci1Ub2tlbic6IGFwcC5nbG9iYWxEYXRhLnRva2VuXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogYXBwLmhhbmRsZVJlcXVzdEZpbmlzaCgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBzaG93U2lnbm9uRGlhbG9nOiB0cnVlLFxuICAgICAgICAgIHNpZ25vbkRpYWxvZ0JnU3R5bGU6ICdzaWdub24tZGlhbG9nLWJnLTInLFxuICAgICAgICAgIHN1Y2Nlc3NpdmVTaWdub25Db3VudDogcmVzLmRhdGEuc3VjY2Vzc2l2ZVNpZ25vbkNvdW50XG4gICAgICAgIH0pXG4gICAgICB9KSxcbiAgICAgIGZhaWw6IGFwcC5oYW5kbGVSZXF1ZXN0RmFpbFxuICAgIH0pXG4gIH0sXG4gIHNob3dTaWdub24oaW5mbzogYW55KSB7XG4gICAgYXBwLnNvdW5kKFwiZGlhbG9nXCIpXG4gICAgdGhpcy5lbnN1cmVMb2dpbihpbmZvLmRldGFpbC51c2VySW5mbywgKCk9PntcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHNob3dTaWdub25EaWFsb2c6IHRydWUsXG4gICAgICAgIHNpZ25vbkRpYWxvZ0JnU3R5bGU6ICdzaWdub24tZGlhbG9nLWJnLTEnXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIGVuc3VyZUxvZ2luKHVzZXJJbmZvOiBPYmplY3QsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xuICAgIGlmICghdXNlckluZm8pIHtcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn6ZSZ6K+vJyxcbiAgICAgICAgY29udGVudDogJ+aXoOazleiOt+WPlueUqOaIt+S/oeaBrydcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzKHJlczogeyBjb2RlOiBzdHJpbmcgfSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhfcmVzLmNvZGUpXG4gICAgICAgIGlmIChyZXMuY29kZSkge1xuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogYXBwLkFQSV9FTkRQT0lOVCArIFwiL2xvZ2luXCIsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIC4uLnVzZXJJbmZvLFxuICAgICAgICAgICAgICBjb2RlOiByZXMuY29kZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGFwcC5oYW5kbGVSZXF1c3RGaW5pc2gocmVzID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgb2JqID0gcmVzLmRhdGEgYXMgeyB0b2tlbjogc3RyaW5nIH07XG4gICAgICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnRva2VuID0gb2JqLnRva2VuO1xuICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZhaWw6IGFwcC5oYW5kbGVSZXF1ZXN0RmFpbFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn6ZSZ6K+vJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfml6Dms5Xojrflj5bnlKjmiLdDb2Rl5L+h5oGvJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGFwcC5vblNoYXJlLFxuICBzdGFydEJ0blRvUmVkKCkge1xuICAgIGFwcC5zb3VuZChcImJ0blwiKTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc3RhcnRCdG5TdHlsZTogJ2J0bi1iZy1yZWQnXG4gICAgfSlcbiAgfSxcbiAgc3RhcnRCdG5Ub0JsdWUoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHN0YXJ0QnRuU3R5bGU6ICdidG4tYmctYmx1ZSdcbiAgICB9KVxuICB9LFxuICBzaWdub25CdG5Ub1JlZCgpIHtcbiAgICBhcHAuc291bmQoXCJidG5cIik7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNpZ25vbkJ0blN0eWxlOiAnYnRuLWJnLXJlZCdcbiAgICB9KVxuICB9LFxuICBzaWdub25CdG5Ub0JsdWUoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNpZ25vbkJ0blN0eWxlOiAnYnRuLWJnLWJsdWUnXG4gICAgfSlcbiAgfSxcbiAgb25TaG93KCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBiZ21QbGF5aW5nOiAhYXBwLmJnbVBhdXNlZCgpXG4gICAgfSk7XG4gIH0sXG4gIHRvZ2dsZUJHTSgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYmdtUGxheWluZzogIXRoaXMuZGF0YS5iZ21QbGF5aW5nXG4gICAgfSk7XG4gICAgYXBwLnRvZ2dsZUJHTSgpO1xuICB9XG59KVxuIl19