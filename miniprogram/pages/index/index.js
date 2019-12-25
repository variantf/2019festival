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
var API_ENDPOINT = 'https://endpoint.2019festival.variantf.zgcszkw.com/api';
Page({
    data: {
        showSignonDialog: false,
        successiveSignonCount: '1',
    },
    closeSignonDialog: function () {
        this.setData({ showSignonDialog: false });
    },
    start: function (info) {
        this.ensureLogin(info.detail.userInfo, function () {
            wx.redirectTo({
                url: "../../info-pages/pages/rule/rule"
            });
        });
    },
    signon: function (info) {
        var _this = this;
        this.ensureLogin(info.detail.userInfo, function () {
            wx.request({
                method: "POST",
                url: API_ENDPOINT + "/signon",
                success: app.handleRequstFinish(function () {
                    _this.setData({ showSignonDialog: true });
                }),
                fail: app.handleRequestFail
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
                        url: API_ENDPOINT + "/login",
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFNLFlBQVksR0FBRyx3REFBd0QsQ0FBQztBQUU5RSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLHFCQUFxQixFQUFFLEdBQUc7S0FDM0I7SUFDRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBQ0QsS0FBSyxZQUFDLElBQVM7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3JDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLGtDQUFrQzthQUN4QyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLFlBQUMsSUFBUztRQUFoQixpQkFXQztRQVZDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDckMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxHQUFHLEVBQUUsWUFBWSxHQUFHLFNBQVM7Z0JBQzdCLE9BQU8sRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUM7b0JBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO2dCQUMxQyxDQUFDLENBQUM7Z0JBQ0YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUI7YUFDNUIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsV0FBVyxZQUFDLFFBQWdCLEVBQUUsUUFBcUI7UUFDakQsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsT0FBTyxFQUFFLFVBQVU7YUFDcEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sWUFBQyxHQUFxQjtnQkFFM0IsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUNaLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBQ1QsTUFBTSxFQUFFLE1BQU07d0JBQ2QsR0FBRyxFQUFFLFlBQVksR0FBRyxRQUFRO3dCQUM1QixJQUFJLGVBQ0MsUUFBUSxJQUNYLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxHQUNmO3dCQUNELE9BQU8sRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUMsVUFBQSxHQUFHOzRCQUNqQyxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBeUIsQ0FBQzs0QkFDMUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQzs0QkFDakMsSUFBSSxRQUFRLEVBQUU7Z0NBQ1osUUFBUSxFQUFFLENBQUM7NkJBQ1o7d0JBQ0gsQ0FBQyxDQUFDO3dCQUNGLElBQUksRUFBRSxHQUFHLENBQUMsaUJBQWlCO3FCQUM1QixDQUFDLENBQUE7aUJBQ0g7cUJBQU07b0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxLQUFLLEVBQUUsSUFBSTt3QkFDWCxPQUFPLEVBQUUsY0FBYztxQkFDeEIsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuXG5jb25zdCBBUElfRU5EUE9JTlQgPSAnaHR0cHM6Ly9lbmRwb2ludC4yMDE5ZmVzdGl2YWwudmFyaWFudGYuemdjc3prdy5jb20vYXBpJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBzaG93U2lnbm9uRGlhbG9nOiBmYWxzZSxcbiAgICBzdWNjZXNzaXZlU2lnbm9uQ291bnQ6ICcxJyxcbiAgfSxcbiAgY2xvc2VTaWdub25EaWFsb2coKSB7XG4gICAgdGhpcy5zZXREYXRhKHsgc2hvd1NpZ25vbkRpYWxvZzogZmFsc2UgfSlcbiAgfSxcbiAgc3RhcnQoaW5mbzogYW55KSB7XG4gICAgdGhpcy5lbnN1cmVMb2dpbihpbmZvLmRldGFpbC51c2VySW5mbywgKCk9PntcbiAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICB1cmw6IFwiLi4vLi4vaW5mby1wYWdlcy9wYWdlcy9ydWxlL3J1bGVcIlxuICAgICAgfSlcbiAgICB9KTtcbiAgfSxcbiAgc2lnbm9uKGluZm86IGFueSkge1xuICAgIHRoaXMuZW5zdXJlTG9naW4oaW5mby5kZXRhaWwudXNlckluZm8sICgpPT57XG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBBUElfRU5EUE9JTlQgKyBcIi9zaWdub25cIixcbiAgICAgICAgc3VjY2VzczogYXBwLmhhbmRsZVJlcXVzdEZpbmlzaCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHsgc2hvd1NpZ25vbkRpYWxvZzogdHJ1ZSB9KVxuICAgICAgICB9KSxcbiAgICAgICAgZmFpbDogYXBwLmhhbmRsZVJlcXVlc3RGYWlsXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIGVuc3VyZUxvZ2luKHVzZXJJbmZvOiBPYmplY3QsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xuICAgIGlmICghdXNlckluZm8pIHtcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn6ZSZ6K+vJyxcbiAgICAgICAgY29udGVudDogJ+aXoOazleiOt+WPlueUqOaIt+S/oeaBrydcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzKHJlczogeyBjb2RlOiBzdHJpbmcgfSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhfcmVzLmNvZGUpXG4gICAgICAgIGlmIChyZXMuY29kZSkge1xuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogQVBJX0VORFBPSU5UICsgXCIvbG9naW5cIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgLi4udXNlckluZm8sXG4gICAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogYXBwLmhhbmRsZVJlcXVzdEZpbmlzaChyZXMgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBvYmogPSByZXMuZGF0YSBhcyB7IHRva2VuOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgYXBwLmdsb2JhbERhdGEudG9rZW4gPSBvYmoudG9rZW47XG4gICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZmFpbDogYXBwLmhhbmRsZVJlcXVlc3RGYWlsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfplJnor68nLFxuICAgICAgICAgICAgY29udGVudDogJ+aXoOazleiOt+WPlueUqOaIt0NvZGXkv6Hmga8nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxufSlcbiJdfQ==