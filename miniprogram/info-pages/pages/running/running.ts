Page({
  data: {
    sid: '',
    pid: '',
    questionNumber:0,
    questionContent:"",
    choiceA:"",
    choiceB:"",
    lastChoice: '',
    lastChoiceStatus: 'unknown',
    LOTTERY_CORRECT_COUNT: 3
  },
  nextQuestionPending: false,
  nextQuestion: function (evt: any) {
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
        success: app.handleRequstFinish(function (res: any) {
            const session = res.data;
            if (session.status == 'done') {
                page.setData({ lastChoiceStatus: 'error' });
                setTimeout(function () {
                    page.nextQuestionPending = false;
                    if (session.correct_count >= page.data.LOTTERY_CORRECT_COUNT) {
                      wx.redirectTo({
                        url: `../success/success?correct_count=${session.correct_count}`,
                      });
                    } else {
                      wx.redirectTo({
                        url: '../failed/failed'
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

  onLoad() {
    const self = this;
    wx.request({
      url: app.API_ENDPOINT + "/session",
      method: "POST",
      header: {
        'X-User-Token': app.globalData.token
      },
      success: app.handleRequstFinish((res: any) => {
        const session = res.data;
        self.setData({
          sid: session.id,
          pid: session.problem.id,
          questionContent: session.problem.body,
          questionNumber: session.problem.idx,
          choiceA: session.problem.A,
          choiceB: session.problem.B
        })
      }),
      fail: app.handleRequestFail
    })
  }
})
