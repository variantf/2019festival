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
                url: "../../prepare-pages/pages/rule/rule"
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUU5QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLHFCQUFxQixFQUFFLENBQUM7S0FDekI7SUFDRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBQ0QsS0FBSyxZQUFDLElBQVM7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3JDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLHFDQUFxQzthQUMzQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLFlBQUMsSUFBUztRQUFoQixpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULE1BQU0sRUFBRSxNQUFNO2dCQUNkLEdBQUcsRUFBRSxHQUFHLENBQUMsWUFBWSxHQUFHLFNBQVM7Z0JBQ2pDLE1BQU0sRUFBRTtvQkFDTixjQUFjLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLO2lCQUNyQztnQkFDRCxPQUFPLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFVBQUMsR0FBUTtvQkFDdkMsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxnQkFBZ0IsRUFBRSxJQUFJO3dCQUN0QixxQkFBcUIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQjtxQkFDdEQsQ0FBQyxDQUFBO2dCQUNKLENBQUMsQ0FBQztnQkFDRixJQUFJLEVBQUUsR0FBRyxDQUFDLGlCQUFpQjthQUM1QixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxXQUFXLFlBQUMsUUFBZ0IsRUFBRSxRQUFxQjtRQUNqRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxPQUFPLEVBQUUsVUFBVTthQUNwQixDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1I7UUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxZQUFDLEdBQXFCO2dCQUUzQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ1osRUFBRSxDQUFDLE9BQU8sQ0FBQzt3QkFDVCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxHQUFHLEVBQUUsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRO3dCQUNoQyxJQUFJLGVBQ0MsUUFBUSxJQUNYLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxHQUNmO3dCQUNELE9BQU8sRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUMsVUFBQSxHQUFHOzRCQUNqQyxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBeUIsQ0FBQzs0QkFDMUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQzs0QkFDakMsSUFBSSxRQUFRLEVBQUU7Z0NBQ1osUUFBUSxFQUFFLENBQUM7NkJBQ1o7d0JBQ0gsQ0FBQyxDQUFDO3dCQUNGLElBQUksRUFBRSxHQUFHLENBQUMsaUJBQWlCO3FCQUM1QixDQUFDLENBQUE7aUJBQ0g7cUJBQU07b0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxLQUFLLEVBQUUsSUFBSTt3QkFDWCxPQUFPLEVBQUUsY0FBYztxQkFDeEIsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO1lBQ3hCLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLEdBQUcsQ0FBQyxZQUFZLEdBQUcsU0FBUztnQkFDakMsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsTUFBTSxFQUFFO29CQUNOLGNBQWMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUs7aUJBQ3JDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7UUFFRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLG9CQUFvQjtZQUMzQixRQUFRLEVBQUUscUVBQXFFO1NBQ2hGLENBQUE7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xudmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgc2hvd1NpZ25vbkRpYWxvZzogZmFsc2UsXG4gICAgc3VjY2Vzc2l2ZVNpZ25vbkNvdW50OiAwLFxuICB9LFxuICBjbG9zZVNpZ25vbkRpYWxvZygpIHtcbiAgICB0aGlzLnNldERhdGEoeyBzaG93U2lnbm9uRGlhbG9nOiBmYWxzZSB9KVxuICB9LFxuICBzdGFydChpbmZvOiBhbnkpIHtcbiAgICB0aGlzLmVuc3VyZUxvZ2luKGluZm8uZGV0YWlsLnVzZXJJbmZvLCAoKT0+e1xuICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogXCIuLi8uLi9wcmVwYXJlLXBhZ2VzL3BhZ2VzL3J1bGUvcnVsZVwiXG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuICBzaWdub24oaW5mbzogYW55KSB7XG4gICAgdGhpcy5lbnN1cmVMb2dpbihpbmZvLmRldGFpbC51c2VySW5mbywgKCk9PntcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IGFwcC5BUElfRU5EUE9JTlQgKyBcIi9zaWdub25cIixcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgJ1gtVXNlci1Ub2tlbic6IGFwcC5nbG9iYWxEYXRhLnRva2VuXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGFwcC5oYW5kbGVSZXF1c3RGaW5pc2goKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHsgXG4gICAgICAgICAgICBzaG93U2lnbm9uRGlhbG9nOiB0cnVlLCBcbiAgICAgICAgICAgIHN1Y2Nlc3NpdmVTaWdub25Db3VudDogcmVzLmRhdGEuc3VjY2Vzc2l2ZVNpZ25vbkNvdW50IFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICBmYWlsOiBhcHAuaGFuZGxlUmVxdWVzdEZhaWxcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgZW5zdXJlTG9naW4odXNlckluZm86IE9iamVjdCwgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKCF1c2VySW5mbykge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfplJnor68nLFxuICAgICAgICBjb250ZW50OiAn5peg5rOV6I635Y+W55So5oi35L+h5oGvJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3MocmVzOiB7IGNvZGU6IHN0cmluZyB9KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9yZXMuY29kZSlcbiAgICAgICAgaWYgKHJlcy5jb2RlKSB7XG4gICAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgdXJsOiBhcHAuQVBJX0VORFBPSU5UICsgXCIvbG9naW5cIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgLi4udXNlckluZm8sXG4gICAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogYXBwLmhhbmRsZVJlcXVzdEZpbmlzaChyZXMgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBvYmogPSByZXMuZGF0YSBhcyB7IHRva2VuOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgYXBwLmdsb2JhbERhdGEudG9rZW4gPSBvYmoudG9rZW47XG4gICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZmFpbDogYXBwLmhhbmRsZVJlcXVlc3RGYWlsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfplJnor68nLFxuICAgICAgICAgICAgY29udGVudDogJ+aXoOazleiOt+WPlueUqOaIt0NvZGXkv6Hmga8nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS50b2tlbikge1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogYXBwLkFQSV9FTkRQT0lOVCArIFwiL3NoYXJlZFwiLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnWC1Vc2VyLVRva2VuJzogYXBwLmdsb2JhbERhdGEudG9rZW5cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICflv6vmnaXot5/miJHkuIDotbfnjqnmsrPljJfnu4/op4bmlrDmmKXmrKLkuqvoioLvvIHvvIEnLFxuICAgICAgaW1hZ2VVcmw6ICdodHRwczovL2VuZHBvaW50LjIwMTlmZXN0aXZhbC52YXJpYW50Zi56Z2Nzemt3LmNvbS9zdGF0aWMvc2hhcmUuanBnJ1xuICAgIH1cbiAgfSxcbn0pXG4iXX0=