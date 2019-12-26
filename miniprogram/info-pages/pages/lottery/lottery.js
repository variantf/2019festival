"use strict";
Page({
    hasJump: false,
    onShow: function () {
        if (this.hasJump) {
            wx.redirectTo({
                url: "/pages/index/index"
            });
        }
    },
    toLottery: function () {
        this.hasJump = true;
        wx.navigateToMiniProgram({
            appId: 'wx2ae8c932b8db6010',
            path: 'pages/prodetail/prodetail?gid=307'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG90dGVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvdHRlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLElBQUksQ0FBQztJQUNILE9BQU8sRUFBRSxLQUFLO0lBQ2QsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxvQkFBb0I7YUFDMUIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsU0FBUztRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QixLQUFLLEVBQUUsb0JBQW9CO1lBQzNCLElBQUksRUFBRSxtQ0FBbUM7U0FDMUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcblxuUGFnZSh7XG4gIGhhc0p1bXA6IGZhbHNlLFxuICBvblNob3coKSB7XG4gICAgaWYgKHRoaXMuaGFzSnVtcCkge1xuICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogXCIvcGFnZXMvaW5kZXgvaW5kZXhcIlxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIHRvTG90dGVyeSgpIHtcbiAgICB0aGlzLmhhc0p1bXAgPSB0cnVlO1xuICAgIHd4Lm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XG4gICAgICBhcHBJZDogJ3d4MmFlOGM5MzJiOGRiNjAxMCcsXG4gICAgICBwYXRoOiAncGFnZXMvcHJvZGV0YWlsL3Byb2RldGFpbD9naWQ9MzA3J1xuICAgIH0pXG4gIH1cbn0pXG4iXX0=