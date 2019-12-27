"use strict";
Page({
    data: {
        btnStyle: 'btn-bg-blue'
    },
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
    },
    btnToRed: function () {
        this.setData({
            btnStyle: 'btn-bg-red'
        });
    },
    btnToBlue: function () {
        this.setData({
            btnStyle: 'btn-bg-blue'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG90dGVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvdHRlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxhQUFhO0tBQ3hCO0lBQ0QsT0FBTyxFQUFFLEtBQUs7SUFDZCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLG9CQUFvQjthQUMxQixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsSUFBSSxFQUFFLG1DQUFtQztTQUMxQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsWUFBWTtTQUN2QixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsU0FBUztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsYUFBYTtTQUN4QixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGJ0blN0eWxlOiAnYnRuLWJnLWJsdWUnXG4gIH0sXG4gIGhhc0p1bXA6IGZhbHNlLFxuICBvblNob3coKSB7XG4gICAgaWYgKHRoaXMuaGFzSnVtcCkge1xuICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogXCIvcGFnZXMvaW5kZXgvaW5kZXhcIlxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIHRvTG90dGVyeSgpIHtcbiAgICB0aGlzLmhhc0p1bXAgPSB0cnVlO1xuICAgIHd4Lm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XG4gICAgICBhcHBJZDogJ3d4MmFlOGM5MzJiOGRiNjAxMCcsXG4gICAgICBwYXRoOiAncGFnZXMvcHJvZGV0YWlsL3Byb2RldGFpbD9naWQ9MzA3J1xuICAgIH0pXG4gIH0sXG4gIGJ0blRvUmVkKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBidG5TdHlsZTogJ2J0bi1iZy1yZWQnXG4gICAgfSlcbiAgfSxcbiAgYnRuVG9CbHVlKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBidG5TdHlsZTogJ2J0bi1iZy1ibHVlJ1xuICAgIH0pXG4gIH1cbn0pXG4iXX0=