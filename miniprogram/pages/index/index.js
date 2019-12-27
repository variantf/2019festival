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
                        data: __assign(__assign({}, userInfo), { code: res.code }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUU5QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLHFCQUFxQixFQUFFLENBQUM7UUFDeEIsYUFBYSxFQUFFLGFBQWE7UUFDNUIsbUJBQW1CLEVBQUUsRUFBRTtRQUN2QixjQUFjLEVBQUUsYUFBYTtLQUM5QjtJQUNELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCLG1CQUFtQixFQUFFLEVBQUU7U0FDeEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUssRUFBTCxVQUFNLElBQVM7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3JDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLHFDQUFxQzthQUMzQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLEVBQU47UUFBQSxpQkFnQkM7UUFmQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUUsR0FBRyxDQUFDLFlBQVksR0FBRyxTQUFTO1lBQ2pDLE1BQU0sRUFBRTtnQkFDTixjQUFjLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLO2FBQ3JDO1lBQ0QsT0FBTyxFQUFFLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFDLEdBQVE7Z0JBQ3ZDLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsZ0JBQWdCLEVBQUUsSUFBSTtvQkFDdEIsbUJBQW1CLEVBQUUsb0JBQW9CO29CQUN6QyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsSUFB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cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xudmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgc2hvd1NpZ25vbkRpYWxvZzogZmFsc2UsXG4gICAgc3VjY2Vzc2l2ZVNpZ25vbkNvdW50OiAwLFxuICAgIHN0YXJ0QnRuU3R5bGU6ICdidG4tYmctYmx1ZScsXG4gICAgc2lnbm9uRGlhbG9nQmdTdHlsZTogJycsXG4gICAgc2lnbm9uQnRuU3R5bGU6ICdidG4tYmctYmx1ZSdcbiAgfSxcbiAgY2xvc2VTaWdub25EaWFsb2coKSB7XG4gICAgdGhpcy5zZXREYXRhKHsgXG4gICAgICBzaG93U2lnbm9uRGlhbG9nOiBmYWxzZSwgXG4gICAgICBzaWdub25EaWFsb2dCZ1N0eWxlOiAnJ1xuICAgIH0pXG4gIH0sXG4gIHN0YXJ0KGluZm86IGFueSkge1xuICAgIHRoaXMuZW5zdXJlTG9naW4oaW5mby5kZXRhaWwudXNlckluZm8sICgpPT57XG4gICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgdXJsOiBcIi4uLy4uL3ByZXBhcmUtcGFnZXMvcGFnZXMvcnVsZS9ydWxlXCJcbiAgICAgIH0pXG4gICAgfSk7XG4gIH0sXG4gIHNpZ25vbigpIHtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICB1cmw6IGFwcC5BUElfRU5EUE9JTlQgKyBcIi9zaWdub25cIixcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICAnWC1Vc2VyLVRva2VuJzogYXBwLmdsb2JhbERhdGEudG9rZW5cbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBhcHAuaGFuZGxlUmVxdXN0RmluaXNoKChyZXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHNob3dTaWdub25EaWFsb2c6IHRydWUsXG4gICAgICAgICAgc2lnbm9uRGlhbG9nQmdTdHlsZTogJ3NpZ25vbi1kaWFsb2ctYmctMicsXG4gICAgICAgICAgc3VjY2Vzc2l2ZVNpZ25vbkNvdW50OiByZXMuZGF0YS5zdWNjZXNzaXZlU2lnbm9uQ291bnRcbiAgICAgICAgfSlcbiAgICAgIH0pLFxuICAgICAgZmFpbDogYXBwLmhhbmRsZVJlcXVlc3RGYWlsXG4gICAgfSlcbiAgfSxcbiAgc2hvd1NpZ25vbihpbmZvOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcInNob3dTaWdub25cIilcbiAgICB0aGlzLmVuc3VyZUxvZ2luKGluZm8uZGV0YWlsLnVzZXJJbmZvLCAoKT0+e1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2hvd1NpZ25vbkRpYWxvZzogdHJ1ZSxcbiAgICAgICAgc2lnbm9uRGlhbG9nQmdTdHlsZTogJ3NpZ25vbi1kaWFsb2ctYmctMSdcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgZW5zdXJlTG9naW4odXNlckluZm86IE9iamVjdCwgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKCF1c2VySW5mbykge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfplJnor68nLFxuICAgICAgICBjb250ZW50OiAn5peg5rOV6I635Y+W55So5oi35L+h5oGvJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3MocmVzOiB7IGNvZGU6IHN0cmluZyB9KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9yZXMuY29kZSlcbiAgICAgICAgaWYgKHJlcy5jb2RlKSB7XG4gICAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgdXJsOiBhcHAuQVBJX0VORFBPSU5UICsgXCIvbG9naW5cIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgLi4udXNlckluZm8sXG4gICAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogYXBwLmhhbmRsZVJlcXVzdEZpbmlzaChyZXMgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBvYmogPSByZXMuZGF0YSBhcyB7IHRva2VuOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgYXBwLmdsb2JhbERhdGEudG9rZW4gPSBvYmoudG9rZW47XG4gICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZmFpbDogYXBwLmhhbmRsZVJlcXVlc3RGYWlsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfplJnor68nLFxuICAgICAgICAgICAgY29udGVudDogJ+aXoOazleiOt+WPlueUqOaIt0NvZGXkv6Hmga8nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS50b2tlbikge1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogYXBwLkFQSV9FTkRQT0lOVCArIFwiL3NoYXJlZFwiLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnWC1Vc2VyLVRva2VuJzogYXBwLmdsb2JhbERhdGEudG9rZW5cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICflv6vmnaXot5/miJHkuIDotbfnjqnmsrPljJfnu4/op4bmlrDmmKXmrKLkuqvoioLvvIHvvIEnLFxuICAgICAgaW1hZ2VVcmw6ICdodHRwczovL2VuZHBvaW50LjIwMTlmZXN0aXZhbC52YXJpYW50Zi56Z2Nzemt3LmNvbS9zdGF0aWMvc2hhcmUuanBnJ1xuICAgIH1cbiAgfSxcblxuICBzdGFydEJ0blRvUmVkKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzdGFydEJ0blN0eWxlOiAnYnRuLWJnLXJlZCdcbiAgICB9KVxuICB9LFxuICBzdGFydEJ0blRvQmx1ZSgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc3RhcnRCdG5TdHlsZTogJ2J0bi1iZy1ibHVlJ1xuICAgIH0pXG4gIH0sXG4gIHNpZ25vbkJ0blRvUmVkKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzaWdub25CdG5TdHlsZTogJ2J0bi1iZy1yZWQnXG4gICAgfSlcbiAgfSxcbiAgc2lnbm9uQnRuVG9CbHVlKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzaWdub25CdG5TdHlsZTogJ2J0bi1iZy1ibHVlJ1xuICAgIH0pXG4gIH1cbn0pXG4iXX0=