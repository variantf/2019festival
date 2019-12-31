var app = getApp<IAppOption>();

import { HOST_1 } from "./host1";
import { HOST_2 } from "./host2";
import { HOST_3 } from "./host3";
import { HOST_4 } from "./host4";
import { HOST_5 } from "./host5";
import { HOST_6 } from "./host6";
import { HOST_7 } from "./host7";
import { HOST_8 } from "./host8";

const HOSTS: Array<string> = [
  HOST_1, HOST_2, HOST_3, HOST_4,
  HOST_5, HOST_6, HOST_7, HOST_8
]

Page({
  onShow() {
    app.sound("start");
    this.setData({
      bgmPlaying: !app.bgmPaused()
    });
  },
  toggleBGM() {
    this.setData({
      bgmPlaying: !this.data.bgmPlaying
    });
    app.toggleBGM();
  },
  data: {
    sid: '',
    pid: '',
    questionNumber:0,
    questionContent:"",
    choiceA:"",
    choiceB:"",
    lastChoice: '',
    lastChoiceStatus: 'unknown',
    LOTTERY_CORRECT_COUNT: 3,
    HOST_SRC: '',
    bgmPlaying: true
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
              app.sound("failed")
                page.setData({ lastChoiceStatus: 'error' });
                setTimeout(function () {
                    page.nextQuestionPending = false;
                    if (session.correct_count >= page.data.LOTTERY_CORRECT_COUNT) {
                      wx.redirectTo({
                        url: `/info-pages/pages/success/success?correct_count=${session.correct_count}&session_id=${session.id}`,
                      });
                    } else {
                      wx.redirectTo({
                        url: '/info-pages/pages/failure/failure'
                      });
                    }
                }, 500);
            }
            else {
              app.sound("correct")
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
    this.setData({
      HOST_SRC: "data:image/png;base64,"+ HOSTS[Math.floor(Math.random() * 8)]
    });
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
