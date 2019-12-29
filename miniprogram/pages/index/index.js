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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUU5QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLHFCQUFxQixFQUFFLENBQUM7UUFDeEIsYUFBYSxFQUFFLGFBQWE7UUFDNUIsbUJBQW1CLEVBQUUsRUFBRTtRQUN2QixjQUFjLEVBQUUsYUFBYTtLQUM5QjtJQUNELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCLG1CQUFtQixFQUFFLEVBQUU7U0FDeEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUssWUFBQyxJQUFTO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxxQ0FBcUM7YUFDM0MsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTTtRQUFOLGlCQWdCQztRQWZDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxHQUFHLENBQUMsWUFBWSxHQUFHLFNBQVM7WUFDakMsTUFBTSxFQUFFO2dCQUNOLGNBQWMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUs7YUFDckM7WUFDRCxPQUFPLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFVBQUMsR0FBUTtnQkFDdkMsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxnQkFBZ0IsRUFBRSxJQUFJO29CQUN0QixtQkFBbUIsRUFBRSxvQkFBb0I7b0JBQ3pDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJB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RUFBRSxhQUFhO1NBQzlCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG52YXIgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBzaG93U2lnbm9uRGlhbG9nOiBmYWxzZSxcbiAgICBzdWNjZXNzaXZlU2lnbm9uQ291bnQ6IDAsXG4gICAgc3RhcnRCdG5TdHlsZTogJ2J0bi1iZy1ibHVlJyxcbiAgICBzaWdub25EaWFsb2dCZ1N0eWxlOiAnJyxcbiAgICBzaWdub25CdG5TdHlsZTogJ2J0bi1iZy1ibHVlJ1xuICB9LFxuICBjbG9zZVNpZ25vbkRpYWxvZygpIHtcbiAgICB0aGlzLnNldERhdGEoeyBcbiAgICAgIHNob3dTaWdub25EaWFsb2c6IGZhbHNlLCBcbiAgICAgIHNpZ25vbkRpYWxvZ0JnU3R5bGU6ICcnXG4gICAgfSlcbiAgfSxcbiAgc3RhcnQoaW5mbzogYW55KSB7XG4gICAgdGhpcy5lbnN1cmVMb2dpbihpbmZvLmRldGFpbC51c2VySW5mbywgKCk9PntcbiAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICB1cmw6IFwiLi4vLi4vcHJlcGFyZS1wYWdlcy9wYWdlcy9ydWxlL3J1bGVcIlxuICAgICAgfSlcbiAgICB9KTtcbiAgfSxcbiAgc2lnbm9uKCkge1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIHVybDogYXBwLkFQSV9FTkRQT0lOVCArIFwiL3NpZ25vblwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdYLVVzZXItVG9rZW4nOiBhcHAuZ2xvYmFsRGF0YS50b2tlblxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGFwcC5oYW5kbGVSZXF1c3RGaW5pc2goKHJlczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgc2hvd1NpZ25vbkRpYWxvZzogdHJ1ZSxcbiAgICAgICAgICBzaWdub25EaWFsb2dCZ1N0eWxlOiAnc2lnbm9uLWRpYWxvZy1iZy0yJyxcbiAgICAgICAgICBzdWNjZXNzaXZlU2lnbm9uQ291bnQ6IHJlcy5kYXRhLnN1Y2Nlc3NpdmVTaWdub25Db3VudFxuICAgICAgICB9KVxuICAgICAgfSksXG4gICAgICBmYWlsOiBhcHAuaGFuZGxlUmVxdWVzdEZhaWxcbiAgICB9KVxuICB9LFxuICBzaG93U2lnbm9uKGluZm86IGFueSkge1xuICAgIGFwcC5zb3VuZChcImRpYWxvZ1wiKVxuICAgIHRoaXMuZW5zdXJlTG9naW4oaW5mby5kZXRhaWwudXNlckluZm8sICgpPT57XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzaG93U2lnbm9uRGlhbG9nOiB0cnVlLFxuICAgICAgICBzaWdub25EaWFsb2dCZ1N0eWxlOiAnc2lnbm9uLWRpYWxvZy1iZy0xJ1xuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICBlbnN1cmVMb2dpbih1c2VySW5mbzogT2JqZWN0LCBjYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcbiAgICBpZiAoIXVzZXJJbmZvKSB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+mUmeivrycsXG4gICAgICAgIGNvbnRlbnQ6ICfml6Dms5Xojrflj5bnlKjmiLfkv6Hmga8nXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzcyhyZXM6IHsgY29kZTogc3RyaW5nIH0pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3Jlcy5jb2RlKVxuICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICB1cmw6IGFwcC5BUElfRU5EUE9JTlQgKyBcIi9sb2dpblwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAuLi51c2VySW5mbyxcbiAgICAgICAgICAgICAgY29kZTogcmVzLmNvZGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBhcHAuaGFuZGxlUmVxdXN0RmluaXNoKHJlcyA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHJlcy5kYXRhIGFzIHsgdG9rZW46IHN0cmluZyB9O1xuICAgICAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS50b2tlbiA9IG9iai50b2tlbjtcbiAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmYWlsOiBhcHAuaGFuZGxlUmVxdWVzdEZhaWxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+mUmeivrycsXG4gICAgICAgICAgICBjb250ZW50OiAn5peg5rOV6I635Y+W55So5oi3Q29kZeS/oeaBrydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnRva2VuKSB7XG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBhcHAuQVBJX0VORFBPSU5UICsgXCIvc2hhcmVkXCIsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdYLVVzZXItVG9rZW4nOiBhcHAuZ2xvYmFsRGF0YS50b2tlblxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+W/q+adpei3n+aIkeS4gOi1t+eOqeays+WMl+e7j+inhuaWsOaYpeasouS6q+iKgu+8ge+8gScsXG4gICAgICBpbWFnZVVybDogJ2h0dHBzOi8vZW5kcG9pbnQuMjAxOWZlc3RpdmFsLnZhcmlhbnRmLnpnY3N6a3cuY29tL3N0YXRpYy9zaGFyZS5qcGcnXG4gICAgfVxuICB9LFxuXG4gIHN0YXJ0QnRuVG9SZWQoKSB7XG4gICAgYXBwLnNvdW5kKFwiYnRuXCIpO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzdGFydEJ0blN0eWxlOiAnYnRuLWJnLXJlZCdcbiAgICB9KVxuICB9LFxuICBzdGFydEJ0blRvQmx1ZSgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc3RhcnRCdG5TdHlsZTogJ2J0bi1iZy1ibHVlJ1xuICAgIH0pXG4gIH0sXG4gIHNpZ25vbkJ0blRvUmVkKCkge1xuICAgIGFwcC5zb3VuZChcImJ0blwiKTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc2lnbm9uQnRuU3R5bGU6ICdidG4tYmctcmVkJ1xuICAgIH0pXG4gIH0sXG4gIHNpZ25vbkJ0blRvQmx1ZSgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc2lnbm9uQnRuU3R5bGU6ICdidG4tYmctYmx1ZSdcbiAgICB9KVxuICB9XG59KVxuIl19