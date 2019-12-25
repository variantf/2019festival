"use strict";
App({
    globalData: {
        token: ''
    },
    onLaunch: function () {
    },
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
                    url: "index"
                });
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBQ0QsUUFBUTtJQUNSLENBQUM7SUFDRCxrQkFBa0IsWUFBQyxRQUF1RTtRQUExRixpQkFRQztRQVBDLE9BQU8sVUFBQyxHQUFtRDtZQUN6RCxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFO2dCQUN6QixLQUFJLENBQUMsaUJBQWlCLENBQUUsR0FBRyxDQUFDLElBQVksQ0FBQyxPQUFRLENBQUMsQ0FBQzthQUNwRDtpQkFBTTtnQkFDTCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDZjtRQUNILENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxpQkFBaUIsWUFBQyxHQUE0QztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ3BCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFFBQVEsRUFBRTtnQkFDUixFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBRSxPQUFPO2lCQUNiLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUM7SUFFTCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXG5cbkFwcDxJQXBwT3B0aW9uPih7XG4gIGdsb2JhbERhdGE6IHtcbiAgICB0b2tlbjogJydcbiAgfSxcbiAgb25MYXVuY2goKSB7XG4gIH0sXG4gIGhhbmRsZVJlcXVzdEZpbmlzaChjYWxsYmFjazogKHJlczogV2VjaGF0TWluaXByb2dyYW0uUmVxdWVzdFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4gdm9pZCkge1xuICAgIHJldHVybiAocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5SZXF1ZXN0U3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1c0NvZGUgIT0gMjAwKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVxdWVzdEZhaWwoKHJlcy5kYXRhIGFzIGFueSkubWVzc2FnZSEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGhhbmRsZVJlcXVlc3RGYWlsKHJlczogV2VjaGF0TWluaXByb2dyYW0uR2VuZXJhbENhbGxiYWNrUmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgdGl0bGU6ICfplJnor68nLFxuICAgICAgY29udGVudDogU3RyaW5nKHJlcyksXG4gICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgIHVybDogXCJpbmRleFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICB9LFxufSkiXX0=