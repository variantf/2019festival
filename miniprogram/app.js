"use strict";
App({
    API_ENDPOINT: 'https://endpoint.2019festival.variantf.zgcszkw.com/api',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxHQUFHLENBQWE7SUFDZCxZQUFZLEVBQUUsd0RBQXdEO0lBQ3RFLFVBQVUsRUFBRTtRQUNWLEtBQUssRUFBRSxFQUFFO0tBQ1Y7SUFDRCxRQUFRO0lBQ1IsQ0FBQztJQUNELGtCQUFrQixZQUFDLFFBQXVFO1FBQTFGLGlCQVFDO1FBUEMsT0FBTyxVQUFDLEdBQW1EO1lBQ3pELElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7Z0JBQ3pCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBRSxHQUFHLENBQUMsSUFBWSxDQUFDLE9BQVEsQ0FBQyxDQUFDO2FBQ3BEO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNmO1FBQ0gsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUNELGlCQUFpQixZQUFDLEdBQTRDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDcEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsUUFBUSxFQUFFO2dCQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLE9BQU87aUJBQ2IsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUVMLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcblxuQXBwPElBcHBPcHRpb24+KHtcbiAgQVBJX0VORFBPSU5UOiAnaHR0cHM6Ly9lbmRwb2ludC4yMDE5ZmVzdGl2YWwudmFyaWFudGYuemdjc3prdy5jb20vYXBpJyxcbiAgZ2xvYmFsRGF0YToge1xuICAgIHRva2VuOiAnJ1xuICB9LFxuICBvbkxhdW5jaCgpIHtcbiAgfSxcbiAgaGFuZGxlUmVxdXN0RmluaXNoKGNhbGxiYWNrOiAocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5SZXF1ZXN0U3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuIChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLlJlcXVlc3RTdWNjZXNzQ2FsbGJhY2tSZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSAhPSAyMDApIHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0RmFpbCgocmVzLmRhdGEgYXMgYW55KS5tZXNzYWdlISk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgaGFuZGxlUmVxdWVzdEZhaWwocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZW5lcmFsQ2FsbGJhY2tSZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICB0aXRsZTogJ+mUmeivrycsXG4gICAgICBjb250ZW50OiBTdHJpbmcocmVzKSxcbiAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgdXJsOiBcImluZGV4XCJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gIH0sXG59KSJdfQ==