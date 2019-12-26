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
                url: app.API_ENDPOINT + "/signon",
                header: {
                    'X-User-Token': app.globalData.token
                },
                success: app.handleRequstFinish(function (res) {
                    _this.setData({
                        showSignonDialog: true,
                        successiveSignonCount: res.data.successiveSignonCount
                    });
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLHFCQUFxQixFQUFFLENBQUM7S0FDekI7SUFDRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBQ0QsS0FBSyxZQUFDLElBQVM7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3JDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLGtDQUFrQzthQUN4QyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLFlBQUMsSUFBUztRQUFoQixpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULE1BQU0sRUFBRSxNQUFNO2dCQUNkLEdBQUcsRUFBRSxHQUFHLENBQUMsWUFBWSxHQUFHLFNBQVM7Z0JBQ2pDLE1BQU0sRUFBRTtvQkFDTixjQUFjLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLO2lCQUNyQztnQkFDRCxPQUFPLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFVBQUMsR0FBUTtvQkFDdkMsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxnQkFBZ0IsRUFBRSxJQUFJO3dCQUN0QixxQkFBcUIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQjtxQkFDdEQsQ0FBQyxDQUFBO2dCQUNKLENBQUMsQ0FBQztnQkFDRixJQUFJLEVBQUUsR0FBRyxDQUFDLGlCQUFpQjthQUM1QixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxXQUFXLFlBQUMsUUFBZ0IsRUFBRSxRQUFxQjtRQUNqRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxPQUFPLEVBQUUsVUFBVTthQUNwQixDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1I7UUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxZQUFDLEdBQXFCO2dCQUUzQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ1osRUFBRSxDQUFDLE9BQU8sQ0FBQzt3QkFDVCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxHQUFHLEVBQUUsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRO3dCQUNoQyxJQUFJLGVBQ0MsUUFBUSxJQUNYLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxHQUNmO3dCQUNELE9BQU8sRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUMsVUFBQSxHQUFHOzRCQUNqQyxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBeUIsQ0FBQzs0QkFDMUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQzs0QkFDakMsSUFBSSxRQUFRLEVBQUU7Z0NBQ1osUUFBUSxFQUFFLENBQUM7NkJBQ1o7d0JBQ0gsQ0FBQyxDQUFDO3dCQUNGLElBQUksRUFBRSxHQUFHLENBQUMsaUJBQWlCO3FCQUM1QixDQUFDLENBQUE7aUJBQ0g7cUJBQU07b0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxLQUFLLEVBQUUsSUFBSTt3QkFDWCxPQUFPLEVBQUUsY0FBYztxQkFDeEIsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHNob3dTaWdub25EaWFsb2c6IGZhbHNlLFxuICAgIHN1Y2Nlc3NpdmVTaWdub25Db3VudDogMCxcbiAgfSxcbiAgY2xvc2VTaWdub25EaWFsb2coKSB7XG4gICAgdGhpcy5zZXREYXRhKHsgc2hvd1NpZ25vbkRpYWxvZzogZmFsc2UgfSlcbiAgfSxcbiAgc3RhcnQoaW5mbzogYW55KSB7XG4gICAgdGhpcy5lbnN1cmVMb2dpbihpbmZvLmRldGFpbC51c2VySW5mbywgKCk9PntcbiAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICB1cmw6IFwiLi4vLi4vaW5mby1wYWdlcy9wYWdlcy9ydWxlL3J1bGVcIlxuICAgICAgfSlcbiAgICB9KTtcbiAgfSxcbiAgc2lnbm9uKGluZm86IGFueSkge1xuICAgIHRoaXMuZW5zdXJlTG9naW4oaW5mby5kZXRhaWwudXNlckluZm8sICgpPT57XG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBhcHAuQVBJX0VORFBPSU5UICsgXCIvc2lnbm9uXCIsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdYLVVzZXItVG9rZW4nOiBhcHAuZ2xvYmFsRGF0YS50b2tlblxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBhcHAuaGFuZGxlUmVxdXN0RmluaXNoKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IFxuICAgICAgICAgICAgc2hvd1NpZ25vbkRpYWxvZzogdHJ1ZSwgXG4gICAgICAgICAgICBzdWNjZXNzaXZlU2lnbm9uQ291bnQ6IHJlcy5kYXRhLnN1Y2Nlc3NpdmVTaWdub25Db3VudCBcbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgZmFpbDogYXBwLmhhbmRsZVJlcXVlc3RGYWlsXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIGVuc3VyZUxvZ2luKHVzZXJJbmZvOiBPYmplY3QsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xuICAgIGlmICghdXNlckluZm8pIHtcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn6ZSZ6K+vJyxcbiAgICAgICAgY29udGVudDogJ+aXoOazleiOt+WPlueUqOaIt+S/oeaBrydcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzKHJlczogeyBjb2RlOiBzdHJpbmcgfSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhfcmVzLmNvZGUpXG4gICAgICAgIGlmIChyZXMuY29kZSkge1xuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogYXBwLkFQSV9FTkRQT0lOVCArIFwiL2xvZ2luXCIsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIC4uLnVzZXJJbmZvLFxuICAgICAgICAgICAgICBjb2RlOiByZXMuY29kZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGFwcC5oYW5kbGVSZXF1c3RGaW5pc2gocmVzID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgb2JqID0gcmVzLmRhdGEgYXMgeyB0b2tlbjogc3RyaW5nIH07XG4gICAgICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnRva2VuID0gb2JqLnRva2VuO1xuICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZhaWw6IGFwcC5oYW5kbGVSZXF1ZXN0RmFpbFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn6ZSZ6K+vJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfml6Dms5Xojrflj5bnlKjmiLdDb2Rl5L+h5oGvJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSxcbn0pXG4iXX0=