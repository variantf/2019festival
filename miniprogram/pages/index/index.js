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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUU5QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLHFCQUFxQixFQUFFLENBQUM7S0FDekI7SUFDRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBQ0QsS0FBSyxZQUFDLElBQVM7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3JDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLGtDQUFrQzthQUN4QyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLFlBQUMsSUFBUztRQUFoQixpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULE1BQU0sRUFBRSxNQUFNO2dCQUNkLEdBQUcsRUFBRSxHQUFHLENBQUMsWUFBWSxHQUFHLFNBQVM7Z0JBQ2pDLE1BQU0sRUFBRTtvQkFDTixjQUFjLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLO2lCQUNyQztnQkFDRCxPQUFPLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFVBQUMsR0FBUTtvQkFDdkMsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxnQkFBZ0IsRUFBRSxJQUFJO3dCQUN0QixxQkFBcUIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQjtxQkFDdEQsQ0FBQyxDQUFBO2dCQUNKLENBQUMsQ0FBQztnQkFDRixJQUFJLEVBQUUsR0FBRyxDQUFDLGlCQUFpQjthQUM1QixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxXQUFXLFlBQUMsUUFBZ0IsRUFBRSxRQUFxQjtRQUNqRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxPQUFPLEVBQUUsVUFBVTthQUNwQixDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1I7UUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxZQUFDLEdBQXFCO2dCQUUzQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ1osRUFBRSxDQUFDLE9BQU8sQ0FBQzt3QkFDVCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxHQUFHLEVBQUUsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRO3dCQUNoQyxJQUFJLGVBQ0MsUUFBUSxJQUNYLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxHQUNmO3dCQUNELE9BQU8sRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUMsVUFBQSxHQUFHOzRCQUNqQyxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBeUIsQ0FBQzs0QkFDMUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQzs0QkFDakMsSUFBSSxRQUFRLEVBQUU7Z0NBQ1osUUFBUSxFQUFFLENBQUM7NkJBQ1o7d0JBQ0gsQ0FBQyxDQUFDO3dCQUNGLElBQUksRUFBRSxHQUFHLENBQUMsaUJBQWlCO3FCQUM1QixDQUFDLENBQUE7aUJBQ0g7cUJBQU07b0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxLQUFLLEVBQUUsSUFBSTt3QkFDWCxPQUFPLEVBQUUsY0FBYztxQkFDeEIsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG52YXIgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBzaG93U2lnbm9uRGlhbG9nOiBmYWxzZSxcbiAgICBzdWNjZXNzaXZlU2lnbm9uQ291bnQ6IDAsXG4gIH0sXG4gIGNsb3NlU2lnbm9uRGlhbG9nKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7IHNob3dTaWdub25EaWFsb2c6IGZhbHNlIH0pXG4gIH0sXG4gIHN0YXJ0KGluZm86IGFueSkge1xuICAgIHRoaXMuZW5zdXJlTG9naW4oaW5mby5kZXRhaWwudXNlckluZm8sICgpPT57XG4gICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgdXJsOiBcIi4uLy4uL2luZm8tcGFnZXMvcGFnZXMvcnVsZS9ydWxlXCJcbiAgICAgIH0pXG4gICAgfSk7XG4gIH0sXG4gIHNpZ25vbihpbmZvOiBhbnkpIHtcbiAgICB0aGlzLmVuc3VyZUxvZ2luKGluZm8uZGV0YWlsLnVzZXJJbmZvLCAoKT0+e1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIHVybDogYXBwLkFQSV9FTkRQT0lOVCArIFwiL3NpZ25vblwiLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnWC1Vc2VyLVRva2VuJzogYXBwLmdsb2JhbERhdGEudG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogYXBwLmhhbmRsZVJlcXVzdEZpbmlzaCgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoeyBcbiAgICAgICAgICAgIHNob3dTaWdub25EaWFsb2c6IHRydWUsIFxuICAgICAgICAgICAgc3VjY2Vzc2l2ZVNpZ25vbkNvdW50OiByZXMuZGF0YS5zdWNjZXNzaXZlU2lnbm9uQ291bnQgXG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIGZhaWw6IGFwcC5oYW5kbGVSZXF1ZXN0RmFpbFxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICBlbnN1cmVMb2dpbih1c2VySW5mbzogT2JqZWN0LCBjYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcbiAgICBpZiAoIXVzZXJJbmZvKSB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+mUmeivrycsXG4gICAgICAgIGNvbnRlbnQ6ICfml6Dms5Xojrflj5bnlKjmiLfkv6Hmga8nXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzcyhyZXM6IHsgY29kZTogc3RyaW5nIH0pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3Jlcy5jb2RlKVxuICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICB1cmw6IGFwcC5BUElfRU5EUE9JTlQgKyBcIi9sb2dpblwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAuLi51c2VySW5mbyxcbiAgICAgICAgICAgICAgY29kZTogcmVzLmNvZGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBhcHAuaGFuZGxlUmVxdXN0RmluaXNoKHJlcyA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHJlcy5kYXRhIGFzIHsgdG9rZW46IHN0cmluZyB9O1xuICAgICAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS50b2tlbiA9IG9iai50b2tlbjtcbiAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmYWlsOiBhcHAuaGFuZGxlUmVxdWVzdEZhaWxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+mUmeivrycsXG4gICAgICAgICAgICBjb250ZW50OiAn5peg5rOV6I635Y+W55So5oi3Q29kZeS/oeaBrydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG59KVxuIl19