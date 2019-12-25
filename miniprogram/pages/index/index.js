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
        successiveSignonCount: '1',
    },
    signon: function () {
        this.setData({
            showSignonDialog: true
        });
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
    ensureLogin: function (userInfo, callback) {
        if (!userInfo) {
            wx.showModal({
                title: '错误',
                content: '无法获取用户信息'
            });
            return;
        }
        var page = this;
        wx.login({
            success: function (res) {
                if (res.code) {
                    wx.request({
                        method: "POST",
                        url: "https://endpoint.go-ahead.variantf.zgcszkw.com/api/login",
                        data: __assign({}, userInfo, { code: res.code }),
                        success: function (res) {
                            var obj = res.data;
                            page.token = obj.token;
                            if (callback) {
                                callback();
                            }
                        },
                        fail: page.handleRequestFail
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLHFCQUFxQixFQUFFLEdBQUc7S0FDM0I7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGdCQUFnQixFQUFFLElBQUk7U0FDdkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFDRCxLQUFLLFlBQUMsSUFBUztRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDckMsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsa0NBQWtDO2FBQ3hDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFdBQVcsWUFBQyxRQUFnQixFQUFFLFFBQXFCO1FBQ2pELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxJQUFJO2dCQUNYLE9BQU8sRUFBRSxVQUFVO2FBQ3BCLENBQUMsQ0FBQztZQUNILE9BQU87U0FDUjtRQUNELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxZQUFDLEdBQXFCO2dCQUUzQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ1osRUFBRSxDQUFDLE9BQU8sQ0FBQzt3QkFDVCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxHQUFHLEVBQUUsMERBQTBEO3dCQUMvRCxJQUFJLGVBQ0MsUUFBUSxJQUNYLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxHQUNmO3dCQUNELE9BQU8sWUFBQyxHQUFHOzRCQUNULElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUF5QixDQUFDOzRCQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7NEJBQ3ZCLElBQUksUUFBUSxFQUFFO2dDQUNaLFFBQVEsRUFBRSxDQUFDOzZCQUNaO3dCQUNILENBQUM7d0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7cUJBQzdCLENBQUMsQ0FBQTtpQkFDSDtxQkFBTTtvQkFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNYLEtBQUssRUFBRSxJQUFJO3dCQUNYLE9BQU8sRUFBRSxjQUFjO3FCQUN4QixDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgc2hvd1NpZ25vbkRpYWxvZzogZmFsc2UsXG4gICAgc3VjY2Vzc2l2ZVNpZ25vbkNvdW50OiAnMScsXG4gIH0sXG4gIHNpZ25vbigpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc2hvd1NpZ25vbkRpYWxvZzogdHJ1ZVxuICAgIH0pXG4gIH0sXG4gIGNsb3NlU2lnbm9uRGlhbG9nKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7c2hvd1NpZ25vbkRpYWxvZzogZmFsc2V9KVxuICB9LFxuICBzdGFydChpbmZvOiBhbnkpIHtcbiAgICB0aGlzLmVuc3VyZUxvZ2luKGluZm8uZGV0YWlsLnVzZXJJbmZvLCAoKT0+e1xuICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogXCIuLi8uLi9pbmZvLXBhZ2VzL3BhZ2VzL3J1bGUvcnVsZVwiXG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuICBlbnN1cmVMb2dpbih1c2VySW5mbzogT2JqZWN0LCBjYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcbiAgICBpZiAoIXVzZXJJbmZvKSB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+mUmeivrycsXG4gICAgICAgIGNvbnRlbnQ6ICfml6Dms5Xojrflj5bnlKjmiLfkv6Hmga8nXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFnZSA9IHRoaXM7XG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzcyhyZXM6IHsgY29kZTogc3RyaW5nIH0pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3Jlcy5jb2RlKVxuICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9lbmRwb2ludC5nby1haGVhZC52YXJpYW50Zi56Z2Nzemt3LmNvbS9hcGkvbG9naW5cIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgLi4udXNlckluZm8sXG4gICAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgb2JqID0gcmVzLmRhdGEgYXMgeyB0b2tlbjogc3RyaW5nIH07XG4gICAgICAgICAgICAgIHBhZ2UudG9rZW4gPSBvYmoudG9rZW47XG4gICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiBwYWdlLmhhbmRsZVJlcXVlc3RGYWlsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfplJnor68nLFxuICAgICAgICAgICAgY29udGVudDogJ+aXoOazleiOt+WPlueUqOaIt0NvZGXkv6Hmga8nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxufSlcbiJdfQ==