"use strict";
App({
    API_ENDPOINT: 'https://endpoint.2019festival.variantf.zgcszkw.com/api',
    STATIC_URL: 'https://endpoint.2019festival.variantf.zgcszkw.com/static/',
    globalData: {
        token: ''
    },
    onLaunch: function () {
        this.bgmInnerAudioContext = wx.createInnerAudioContext();
        this.bgmInnerAudioContext.src = this.STATIC_URL + 'bgm.mp3';
        this.bgmInnerAudioContext.loop = true;
        this.bgmInnerAudioContext.autoplay = true;
        this._bgmPaused = false;
        var self = this;
        this.bgmInnerAudioContext.onPlay = function () {
            self._bgmPaused = false;
        };
        this.bgmInnerAudioContext.onPause = function () {
            self._bgmPaused = true;
        };
        this.btnInnerAudioContext = wx.createInnerAudioContext();
        this.btnInnerAudioContext.src = this.STATIC_URL + 'btn.mp3';
        this.correctInnerAudioContext = wx.createInnerAudioContext();
        this.correctInnerAudioContext.src = this.STATIC_URL + 'correct.mp3';
        this.failedInnerAudioContext = wx.createInnerAudioContext();
        this.failedInnerAudioContext.src = this.STATIC_URL + 'failed.mp3';
        this.dialogInnerAudioContext = wx.createInnerAudioContext();
        this.dialogInnerAudioContext.src = this.STATIC_URL + 'dialog.mp3';
        this.lotteryInnerAudioContext = wx.createInnerAudioContext();
        this.lotteryInnerAudioContext.src = this.STATIC_URL + 'lottery.mp3';
        this.ruleInnerAudioContext = wx.createInnerAudioContext();
        this.ruleInnerAudioContext.src = this.STATIC_URL + 'rule.mp3';
        this.startInnerAudioContext = wx.createInnerAudioContext();
        this.startInnerAudioContext.src = this.STATIC_URL + 'start.mp3';
    },
    onShow: function () {
        var bgmInnerAudioContext = this.bgmInnerAudioContext;
        if (bgmInnerAudioContext === null) {
            return;
        }
        if (this._bgmPaused) {
            bgmInnerAudioContext.pause();
        }
        else {
            bgmInnerAudioContext.play();
        }
    },
    toggleBGM: function () {
        var bgmInnerAudioContext = this.bgmInnerAudioContext;
        if (bgmInnerAudioContext === null) {
            return;
        }
        if (this._bgmPaused) {
            bgmInnerAudioContext.play();
            this._bgmPaused = false;
        }
        else {
            bgmInnerAudioContext.pause();
            this._bgmPaused = true;
        }
    },
    bgmPaused: function () {
        return this._bgmPaused;
    },
    sound: function (name) {
        var x = this;
        var ctx = x[name + "InnerAudioContext"];
        if (ctx !== null) {
            ctx.play();
        }
    },
    _bgmPaused: false,
    bgmInnerAudioContext: null,
    btnInnerAudioContext: null,
    correctInnerAudioContext: null,
    failedInnerAudioContext: null,
    dialogInnerAudioContext: null,
    startInnerAudioContext: null,
    ruleInnerAudioContext: null,
    lotteryInnerAudioContext: null,
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
                    url: "/pages/index/index"
                });
            }
        });
    },
    onShare: function () {
        if (this.globalData.token) {
            wx.request({
                url: this.API_ENDPOINT + "/shared",
                method: "POST",
                header: {
                    'X-User-Token': this.globalData.token
                }
            });
        }
        return {
            title: '红包年货拿到嗨，一起欢喜过大年',
            imageUrl: 'https://endpoint.2019festival.variantf.zgcszkw.com/static/share.jpg'
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxHQUFHLENBQWE7SUFDZCxZQUFZLEVBQUUsd0RBQXdEO0lBQ3RFLFVBQVUsRUFBRSw0REFBNEQ7SUFDeEUsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFLEVBQUU7S0FFVjtJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sR0FBRztZQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDLENBQUE7UUFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxHQUFHO1lBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQTtRQUVELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBRTVELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcs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QyxHQUE0QztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ3BCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFFBQVEsRUFBRTtnQkFDUixFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBRSxvQkFBb0I7aUJBQzFCLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtZQUN6QixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVM7Z0JBQ2xDLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixjQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLO2lCQUN0QzthQUNGLENBQUMsQ0FBQTtTQUNIO1FBRUQsT0FBTztZQUNMLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsUUFBUSxFQUFFLHFFQUFxRTtTQUNoRixDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC50c1xuXG5BcHA8SUFwcE9wdGlvbj4oe1xuICBBUElfRU5EUE9JTlQ6ICdodHRwczovL2VuZHBvaW50LjIwMTlmZXN0aXZhbC52YXJpYW50Zi56Z2Nzemt3LmNvbS9hcGknLFxuICBTVEFUSUNfVVJMOiAnaHR0cHM6Ly9lbmRwb2ludC4yMDE5ZmVzdGl2YWwudmFyaWFudGYuemdjc3prdy5jb20vc3RhdGljLycsXG4gIGdsb2JhbERhdGE6IHtcbiAgICB0b2tlbjogJydcblxuICB9LFxuICBvbkxhdW5jaCgpIHtcbiAgICB0aGlzLmJnbUlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICB0aGlzLmJnbUlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHRoaXMuU1RBVElDX1VSTCArICdiZ20ubXAzJztcbiAgICB0aGlzLmJnbUlubmVyQXVkaW9Db250ZXh0Lmxvb3AgPSB0cnVlO1xuICAgIHRoaXMuYmdtSW5uZXJBdWRpb0NvbnRleHQuYXV0b3BsYXkgPSB0cnVlO1xuICAgIHRoaXMuX2JnbVBhdXNlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuYmdtSW5uZXJBdWRpb0NvbnRleHQub25QbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLl9iZ21QYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5iZ21Jbm5lckF1ZGlvQ29udGV4dC5vblBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLl9iZ21QYXVzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuYnRuSW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xuICAgIHRoaXMuYnRuSW5uZXJBdWRpb0NvbnRleHQuc3JjID0gdGhpcy5TVEFUSUNfVVJMICsgJ2J0bi5tcDMnO1xuXG4gICAgdGhpcy5jb3JyZWN0SW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xuICAgIHRoaXMuY29ycmVjdElubmVyQXVkaW9Db250ZXh0LnNyYyA9IHRoaXMuU1RBVElDX1VSTCArICdjb3JyZWN0Lm1wMyc7XG5cbiAgICB0aGlzLmZhaWxlZElubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICB0aGlzLmZhaWxlZElubmVyQXVkaW9Db250ZXh0LnNyYyA9IHRoaXMuU1RBVElDX1VSTCArICdmYWlsZWQubXAzJztcblxuICAgIHRoaXMuZGlhbG9nSW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xuICAgIHRoaXMuZGlhbG9nSW5uZXJBdWRpb0NvbnRleHQuc3JjID0gdGhpcy5TVEFUSUNfVVJMICsgJ2RpYWxvZy5tcDMnO1xuXG4gICAgdGhpcy5sb3R0ZXJ5SW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xuICAgIHRoaXMubG90dGVyeUlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHRoaXMuU1RBVElDX1VSTCArICdsb3R0ZXJ5Lm1wMyc7XG5cbiAgICB0aGlzLnJ1bGVJbm5lckF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XG4gICAgdGhpcy5ydWxlSW5uZXJBdWRpb0NvbnRleHQuc3JjID0gdGhpcy5TVEFUSUNfVVJMICsgJ3J1bGUubXAzJztcblxuICAgIHRoaXMuc3RhcnRJbm5lckF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XG4gICAgdGhpcy5zdGFydElubmVyQXVkaW9Db250ZXh0LnNyYyA9IHRoaXMuU1RBVElDX1VSTCArICdzdGFydC5tcDMnO1xuICB9LFxuICBvblNob3cgKCkge1xuICAgIGNvbnN0IHsgYmdtSW5uZXJBdWRpb0NvbnRleHQgfSA9IHRoaXM7XG4gICAgaWYgKGJnbUlubmVyQXVkaW9Db250ZXh0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMuX2JnbVBhdXNlZCkge1xuICAgICAgYmdtSW5uZXJBdWRpb0NvbnRleHQucGF1c2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmdtSW5uZXJBdWRpb0NvbnRleHQucGxheSgpO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlQkdNKCkge1xuICAgIGNvbnN0IHtiZ21Jbm5lckF1ZGlvQ29udGV4dH0gPSB0aGlzO1xuICAgIGlmIChiZ21Jbm5lckF1ZGlvQ29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLl9iZ21QYXVzZWQpIHtcbiAgICAgIGJnbUlubmVyQXVkaW9Db250ZXh0LnBsYXkoKTtcbiAgICAgIHRoaXMuX2JnbVBhdXNlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBiZ21Jbm5lckF1ZGlvQ29udGV4dC5wYXVzZSgpO1xuICAgICAgdGhpcy5fYmdtUGF1c2VkID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIGJnbVBhdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmdtUGF1c2VkO1xuICB9LFxuICBzb3VuZChuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCB4OiBhbnkgPSB0aGlzO1xuICAgIGNvbnN0IGN0eDogYW55ID14W2Ake25hbWV9SW5uZXJBdWRpb0NvbnRleHRgXTtcbiAgICBpZiAoY3R4ICE9PSBudWxsKSB7XG4gICAgICBjdHgucGxheSgpO1xuICAgIH1cbiAgfSxcbiAgX2JnbVBhdXNlZDogZmFsc2UsXG4gIGJnbUlubmVyQXVkaW9Db250ZXh0OiBudWxsLFxuICBidG5Jbm5lckF1ZGlvQ29udGV4dDogbnVsbCxcbiAgY29ycmVjdElubmVyQXVkaW9Db250ZXh0OiBudWxsLFxuICBmYWlsZWRJbm5lckF1ZGlvQ29udGV4dDogbnVsbCxcbiAgZGlhbG9nSW5uZXJBdWRpb0NvbnRleHQ6IG51bGwsXG4gIHN0YXJ0SW5uZXJBdWRpb0NvbnRleHQ6IG51bGwsXG4gIHJ1bGVJbm5lckF1ZGlvQ29udGV4dDogbnVsbCxcbiAgbG90dGVyeUlubmVyQXVkaW9Db250ZXh0OiBudWxsLFxuICBoYW5kbGVSZXF1c3RGaW5pc2goY2FsbGJhY2s6IChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLlJlcXVlc3RTdWNjZXNzQ2FsbGJhY2tSZXN1bHQpID0+IHZvaWQpIHtcbiAgICByZXR1cm4gKHJlczogV2VjaGF0TWluaXByb2dyYW0uUmVxdWVzdFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlICE9IDIwMCkge1xuICAgICAgICB0aGlzLmhhbmRsZVJlcXVlc3RGYWlsKChyZXMuZGF0YSBhcyBhbnkpLm1lc3NhZ2UhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBoYW5kbGVSZXF1ZXN0RmFpbChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLkdlbmVyYWxDYWxsYmFja1Jlc3VsdCkge1xuICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgd3guc2hvd01vZGFsKHtcbiAgICAgIHRpdGxlOiAn6ZSZ6K+vJyxcbiAgICAgIGNvbnRlbnQ6IFN0cmluZyhyZXMpLFxuICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICB1cmw6IFwiL3BhZ2VzL2luZGV4L2luZGV4XCJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIG9uU2hhcmU6IGZ1bmN0aW9uKCl7XG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS50b2tlbikge1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogdGhpcy5BUElfRU5EUE9JTlQgKyBcIi9zaGFyZWRcIixcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgJ1gtVXNlci1Ub2tlbic6IHRoaXMuZ2xvYmFsRGF0YS50b2tlblxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+e6ouWMheW5tOi0p+aLv+WIsOWXqO+8jOS4gOi1t+asouWWnOi/h+Wkp+W5tCcsXG4gICAgICBpbWFnZVVybDogJ2h0dHBzOi8vZW5kcG9pbnQuMjAxOWZlc3RpdmFsLnZhcmlhbnRmLnpnY3N6a3cuY29tL3N0YXRpYy9zaGFyZS5qcGcnXG4gICAgfVxuICB9XG59KSJdfQ==