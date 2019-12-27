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
        signonBtnStyle: 'btn-bg-blue'
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
        console.log("showSignon");
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
    onShareAppMessage: function () {
        if (app.globalData.token) {
            wx.request({
                url: app.API_ENDPOINT + "/shared",
                method: "POST",
                header: {
                    'X-User-Token': app.globalData.token
                }
            });
        }
        return {
            title: '快来跟我一起玩河北经视新春欢享节！！',
            imageUrl: 'https://endpoint.2019festival.variantf.zgcszkw.com/static/share.jpg'
        };
    },
    startBtnToRed: function () {
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
        this.setData({
            signonBtnStyle: 'btn-bg-red'
        });
    },
    signonBtnToBlue: function () {
        this.setData({
            signonBtnStyle: 'btn-bg-blue'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUU5QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLHFCQUFxQixFQUFFLENBQUM7UUFDeEIsYUFBYSxFQUFFLGFBQWE7UUFDNUIsbUJBQW1CLEVBQUUsRUFBRTtRQUN2QixjQUFjLEVBQUUsYUFBYTtLQUM5QjtJQUNELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCLG1CQUFtQixFQUFFLEVBQUU7U0FDeEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUssWUFBQyxJQUFTO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxxQ0FBcUM7YUFDM0MsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTTtRQUFOLGlCQWdCQztRQWZDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxHQUFHLENBQUMsWUFBWSxHQUFHLFNBQVM7WUFDakMsTUFBTSxFQUFFO2dCQUNOLGNBQWMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUs7YUFDckM7WUFDRCxPQUFPLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFVBQUMsR0FBUTtnQkFDdkMsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxnQkFBZ0IsRUFBRSxJQUFJO29CQUN0QixtQkFBbUIsRUFBRSxvQkFBb0I7b0JBQ3pDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJB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XG4vLyDojrflj5blupTnlKjlrp7kvotcbnZhciBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHNob3dTaWdub25EaWFsb2c6IGZhbHNlLFxuICAgIHN1Y2Nlc3NpdmVTaWdub25Db3VudDogMCxcbiAgICBzdGFydEJ0blN0eWxlOiAnYnRuLWJnLWJsdWUnLFxuICAgIHNpZ25vbkRpYWxvZ0JnU3R5bGU6ICcnLFxuICAgIHNpZ25vbkJ0blN0eWxlOiAnYnRuLWJnLWJsdWUnXG4gIH0sXG4gIGNsb3NlU2lnbm9uRGlhbG9nKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7IFxuICAgICAgc2hvd1NpZ25vbkRpYWxvZzogZmFsc2UsIFxuICAgICAgc2lnbm9uRGlhbG9nQmdTdHlsZTogJydcbiAgICB9KVxuICB9LFxuICBzdGFydChpbmZvOiBhbnkpIHtcbiAgICB0aGlzLmVuc3VyZUxvZ2luKGluZm8uZGV0YWlsLnVzZXJJbmZvLCAoKT0+e1xuICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogXCIuLi8uLi9wcmVwYXJlLXBhZ2VzL3BhZ2VzL3J1bGUvcnVsZVwiXG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuICBzaWdub24oKSB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBhcHAuQVBJX0VORFBPSU5UICsgXCIvc2lnbm9uXCIsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ1gtVXNlci1Ub2tlbic6IGFwcC5nbG9iYWxEYXRhLnRva2VuXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogYXBwLmhhbmRsZVJlcXVzdEZpbmlzaCgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBzaG93U2lnbm9uRGlhbG9nOiB0cnVlLFxuICAgICAgICAgIHNpZ25vbkRpYWxvZ0JnU3R5bGU6ICdzaWdub24tZGlhbG9nLWJnLTInLFxuICAgICAgICAgIHN1Y2Nlc3NpdmVTaWdub25Db3VudDogcmVzLmRhdGEuc3VjY2Vzc2l2ZVNpZ25vbkNvdW50XG4gICAgICAgIH0pXG4gICAgICB9KSxcbiAgICAgIGZhaWw6IGFwcC5oYW5kbGVSZXF1ZXN0RmFpbFxuICAgIH0pXG4gIH0sXG4gIHNob3dTaWdub24oaW5mbzogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJzaG93U2lnbm9uXCIpXG4gICAgdGhpcy5lbnN1cmVMb2dpbihpbmZvLmRldGFpbC51c2VySW5mbywgKCk9PntcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHNob3dTaWdub25EaWFsb2c6IHRydWUsXG4gICAgICAgIHNpZ25vbkRpYWxvZ0JnU3R5bGU6ICdzaWdub24tZGlhbG9nLWJnLTEnXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIGVuc3VyZUxvZ2luKHVzZXJJbmZvOiBPYmplY3QsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xuICAgIGlmICghdXNlckluZm8pIHtcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn6ZSZ6K+vJyxcbiAgICAgICAgY29udGVudDogJ+aXoOazleiOt+WPlueUqOaIt+S/oeaBrydcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzKHJlczogeyBjb2RlOiBzdHJpbmcgfSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhfcmVzLmNvZGUpXG4gICAgICAgIGlmIChyZXMuY29kZSkge1xuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogYXBwLkFQSV9FTkRQT0lOVCArIFwiL2xvZ2luXCIsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIC4uLnVzZXJJbmZvLFxuICAgICAgICAgICAgICBjb2RlOiByZXMuY29kZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGFwcC5oYW5kbGVSZXF1c3RGaW5pc2gocmVzID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgb2JqID0gcmVzLmRhdGEgYXMgeyB0b2tlbjogc3RyaW5nIH07XG4gICAgICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnRva2VuID0gb2JqLnRva2VuO1xuICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZhaWw6IGFwcC5oYW5kbGVSZXF1ZXN0RmFpbFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn6ZSZ6K+vJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfml6Dms5Xojrflj5bnlKjmiLdDb2Rl5L+h5oGvJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudG9rZW4pIHtcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGFwcC5BUElfRU5EUE9JTlQgKyBcIi9zaGFyZWRcIixcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgJ1gtVXNlci1Ub2tlbic6IGFwcC5nbG9iYWxEYXRhLnRva2VuXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5b+r5p2l6Lef5oiR5LiA6LW3546p5rKz5YyX57uP6KeG5paw5pil5qyi5Lqr6IqC77yB77yBJyxcbiAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9lbmRwb2ludC4yMDE5ZmVzdGl2YWwudmFyaWFudGYuemdjc3prdy5jb20vc3RhdGljL3NoYXJlLmpwZydcbiAgICB9XG4gIH0sXG5cbiAgc3RhcnRCdG5Ub1JlZCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc3RhcnRCdG5TdHlsZTogJ2J0bi1iZy1yZWQnXG4gICAgfSlcbiAgfSxcbiAgc3RhcnRCdG5Ub0JsdWUoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHN0YXJ0QnRuU3R5bGU6ICdidG4tYmctYmx1ZSdcbiAgICB9KVxuICB9LFxuICBzaWdub25CdG5Ub1JlZCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc2lnbm9uQnRuU3R5bGU6ICdidG4tYmctcmVkJ1xuICAgIH0pXG4gIH0sXG4gIHNpZ25vbkJ0blRvQmx1ZSgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc2lnbm9uQnRuU3R5bGU6ICdidG4tYmctYmx1ZSdcbiAgICB9KVxuICB9XG59KVxuIl19