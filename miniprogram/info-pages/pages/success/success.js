"use strict";
Page({
    data: {
        correctNum: 0,
        btnStyle: 'btn-bg-blue'
    },
    toLottery: function () {
        wx.redirectTo({
            url: "../lottery/lottery"
        });
    },
    onLoad: function (options) {
        console.log("options", options);
        this.setData({
            correctNum: options.correct_count
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
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VjY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1Y2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLGFBQWE7S0FDeEI7SUFDRCxTQUFTO1FBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxvQkFBb0I7U0FDMUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU0sRUFBTixVQUFPLE9BQVk7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxPQUFPLENBQUMsYUFBYTtTQUNsQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsWUFBWTtTQUN2QixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsU0FBUztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsYUFBYTtTQUN4QixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGNvcnJlY3ROdW06IDAsXG4gICAgYnRuU3R5bGU6ICdidG4tYmctYmx1ZSdcbiAgfSxcbiAgdG9Mb3R0ZXJ5KCkge1xuICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgdXJsOiBcIi4uL2xvdHRlcnkvbG90dGVyeVwiXG4gICAgfSlcbiAgfSxcbiAgb25Mb2FkKG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKFwib3B0aW9uc1wiLCBvcHRpb25zKVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBjb3JyZWN0TnVtOiBvcHRpb25zLmNvcnJlY3RfY291bnRcbiAgICB9KTtcbiAgfSxcbiAgYnRuVG9SZWQoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGJ0blN0eWxlOiAnYnRuLWJnLXJlZCdcbiAgICB9KVxuICB9LFxuICBidG5Ub0JsdWUoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGJ0blN0eWxlOiAnYnRuLWJnLWJsdWUnXG4gICAgfSlcbiAgfSxcbn0pXG4iXX0=