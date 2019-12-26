"use strict";
var app = getApp();
Page({
    data: {
        sid: '',
        pid: '',
        questionNumber: 0,
        questionContent: "截止到2018年末，我国农村贫困人口减少到1660万人。2019年12月19日，全国扶贫开发工作会议总结2019年脱贫攻坚工作，预计2019年减少贫困人口1000万人以上。",
        choiceA: "",
        choiceB: "",
        lastChoice: '',
        lastChoiceStatus: 'unknown',
        LOTTERY_CORRECT_COUNT: 3
    },
    nextQuestionPending: false,
    nextQuestion: function (evt) {
        if (this.nextQuestionPending) {
            return;
        }
        var choice = evt.currentTarget.id;
        var page = this;
        this.nextQuestionPending = true;
        this.setData({ lastChoice: choice });
        wx.request({
            method: "POST",
            url: app.API_ENDPOINT + ("/session/" + this.data.sid + "/problem/" + this.data.pid),
            data: {
                ans: choice
            },
            header: {
                'X-User-Token': app.globalData.token
            },
            success: app.handleRequstFinish(function (res) {
                var session = res.data;
                if (session.status == 'done') {
                    page.setData({ lastChoiceStatus: 'error' });
                    setTimeout(function () {
                        page.nextQuestionPending = false;
                        if (session.correct_count >= page.data.LOTTERY_CORRECT_COUNT) {
                            wx.redirectTo({
                                url: "../success/success?correct_count=" + session.correct_count,
                            });
                        }
                        else {
                            wx.redirectTo({
                                url: '../failure/failure'
                            });
                        }
                    }, 500);
                }
                else {
                    page.setData({ lastChoiceStatus: 'correct' });
                    setTimeout(function () {
                        page.nextQuestionPending = false;
                        page.setData({
                            pid: session.problem.id,
                            questionContent: session.problem.body,
                            questionNumber: session.problem.idx,
                            choiceA: session.problem.A,
                            choiceB: session.problem.B,
                            lastChoiceStatus: 'unknown'
                        });
                    }, 500);
                }
            }),
            fail: function (res) {
                page.nextQuestionPending = false;
                app.handleRequestFail(res);
            }
        });
    },
    onLoad: function () {
        var self = this;
        wx.request({
            url: app.API_ENDPOINT + "/session",
            method: "POST",
            header: {
                'X-User-Token': app.globalData.token
            },
            success: app.handleRequstFinish(function (res) {
                var session = res.data;
                self.setData({
                    sid: session.id,
                    pid: session.problem.id,
                    questionContent: session.problem.body,
                    questionNumber: session.problem.idx,
                    choiceA: session.problem.A,
                    choiceB: session.problem.B
                });
            }),
            fail: app.handleRequestFail
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1bm5pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRTlCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxFQUFFO1FBQ1AsR0FBRyxFQUFFLEVBQUU7UUFDUCxjQUFjLEVBQUMsQ0FBQztRQUNoQixlQUFlLEVBQUMsd0ZBQXdGO1FBQ3hHLE9BQU8sRUFBQyxFQUFFO1FBQ1YsT0FBTyxFQUFDLEVBQUU7UUFDVixVQUFVLEVBQUUsRUFBRTtRQUNkLGdCQUFnQixFQUFFLFNBQVM7UUFDM0IscUJBQXFCLEVBQUUsQ0FBQztLQUN6QjtJQUNELG1CQUFtQixFQUFFLEtBQUs7SUFDMUIsWUFBWSxFQUFFLFVBQVUsR0FBUTtRQUM5QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUMxQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDckMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNQLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ25GLElBQUksRUFBRTtnQkFDRixHQUFHLEVBQUUsTUFBTTthQUNkO1lBQ0QsTUFBTSxFQUFFO2dCQUNKLGNBQWMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUs7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ZXRBcHA8SUFwcE9wdGlvbj4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHNpZDogJycsXG4gICAgcGlkOiAnJyxcbiAgICBxdWVzdGlvbk51bWJlcjowLFxuICAgIHF1ZXN0aW9uQ29udGVudDpcIuaIquatouWIsDIwMTjlubTmnKvvvIzmiJHlm73lhpzmnZHotKvlm7Dkurrlj6Plh4/lsJHliLAxNjYw5LiH5Lq644CCMjAxOeW5tDEy5pyIMTnml6XvvIzlhajlm73mibbotKvlvIDlj5Hlt6XkvZzkvJrorq7mgLvnu5MyMDE55bm06ISx6LSr5pS75Z2a5bel5L2c77yM6aKE6K6hMjAxOeW5tOWHj+Wwkei0q+WbsOS6uuWPozEwMDDkuIfkurrku6XkuIrjgIJcIixcbiAgICBjaG9pY2VBOlwiXCIsXG4gICAgY2hvaWNlQjpcIlwiLFxuICAgIGxhc3RDaG9pY2U6ICcnLFxuICAgIGxhc3RDaG9pY2VTdGF0dXM6ICd1bmtub3duJyxcbiAgICBMT1RURVJZX0NPUlJFQ1RfQ09VTlQ6IDNcbiAgfSxcbiAgbmV4dFF1ZXN0aW9uUGVuZGluZzogZmFsc2UsXG4gIG5leHRRdWVzdGlvbjogZnVuY3Rpb24gKGV2dDogYW55KSB7XG4gICAgaWYgKHRoaXMubmV4dFF1ZXN0aW9uUGVuZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjaG9pY2UgPSBldnQuY3VycmVudFRhcmdldC5pZDtcbiAgICB2YXIgcGFnZSA9IHRoaXM7XG4gICAgdGhpcy5uZXh0UXVlc3Rpb25QZW5kaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnNldERhdGEoeyBsYXN0Q2hvaWNlOiBjaG9pY2UgfSk7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIHVybDogYXBwLkFQSV9FTkRQT0lOVCArIChcIi9zZXNzaW9uL1wiICsgdGhpcy5kYXRhLnNpZCArIFwiL3Byb2JsZW0vXCIgKyB0aGlzLmRhdGEucGlkKSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYW5zOiBjaG9pY2VcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnWC1Vc2VyLVRva2VuJzogYXBwLmdsb2JhbERhdGEudG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogYXBwLmhhbmRsZVJlcXVzdEZpbmlzaChmdW5jdGlvbiAocmVzOiBhbnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb24gPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGlmIChzZXNzaW9uLnN0YXR1cyA9PSAnZG9uZScpIHtcbiAgICAgICAgICAgICAgICBwYWdlLnNldERhdGEoeyBsYXN0Q2hvaWNlU3RhdHVzOiAnZXJyb3InIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBwYWdlLm5leHRRdWVzdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlc3Npb24uY29ycmVjdF9jb3VudCA+PSBwYWdlLmRhdGEuTE9UVEVSWV9DT1JSRUNUX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi9zdWNjZXNzL3N1Y2Nlc3M/Y29ycmVjdF9jb3VudD0ke3Nlc3Npb24uY29ycmVjdF9jb3VudH1gLFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vZmFpbHVyZS9mYWlsdXJlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhZ2Uuc2V0RGF0YSh7IGxhc3RDaG9pY2VTdGF0dXM6ICdjb3JyZWN0JyB9KTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZS5uZXh0UXVlc3Rpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2Uuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaWQ6IHNlc3Npb24ucHJvYmxlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uQ29udGVudDogc2Vzc2lvbi5wcm9ibGVtLmJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbk51bWJlcjogc2Vzc2lvbi5wcm9ibGVtLmlkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZUE6IHNlc3Npb24ucHJvYmxlbS5BLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlQjogc2Vzc2lvbi5wcm9ibGVtLkIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0Q2hvaWNlU3RhdHVzOiAndW5rbm93bidcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIHBhZ2UubmV4dFF1ZXN0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgYXBwLmhhbmRsZVJlcXVlc3RGYWlsKHJlcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBvbkxvYWQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGFwcC5BUElfRU5EUE9JTlQgKyBcIi9zZXNzaW9uXCIsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdYLVVzZXItVG9rZW4nOiBhcHAuZ2xvYmFsRGF0YS50b2tlblxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGFwcC5oYW5kbGVSZXF1c3RGaW5pc2goKHJlczogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSByZXMuZGF0YTtcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBzaWQ6IHNlc3Npb24uaWQsXG4gICAgICAgICAgcGlkOiBzZXNzaW9uLnByb2JsZW0uaWQsXG4gICAgICAgICAgcXVlc3Rpb25Db250ZW50OiBzZXNzaW9uLnByb2JsZW0uYm9keSxcbiAgICAgICAgICBxdWVzdGlvbk51bWJlcjogc2Vzc2lvbi5wcm9ibGVtLmlkeCxcbiAgICAgICAgICBjaG9pY2VBOiBzZXNzaW9uLnByb2JsZW0uQSxcbiAgICAgICAgICBjaG9pY2VCOiBzZXNzaW9uLnByb2JsZW0uQlxuICAgICAgICB9KVxuICAgICAgfSksXG4gICAgICBmYWlsOiBhcHAuaGFuZGxlUmVxdWVzdEZhaWxcbiAgICB9KVxuICB9XG59KVxuIl19