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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VjY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1Y2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLGFBQWE7S0FDeEI7SUFDRCxTQUFTO1FBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxvQkFBb0I7U0FDMUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU0sWUFBQyxPQUFZO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxVQUFVLEVBQUUsT0FBTyxDQUFDLGFBQWE7U0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLFlBQVk7U0FDdkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLGFBQWE7U0FDeEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBjb3JyZWN0TnVtOiAwLFxuICAgIGJ0blN0eWxlOiAnYnRuLWJnLWJsdWUnXG4gIH0sXG4gIHRvTG90dGVyeSgpIHtcbiAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgIHVybDogXCIuLi9sb3R0ZXJ5L2xvdHRlcnlcIlxuICAgIH0pXG4gIH0sXG4gIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9wdGlvbnNcIiwgb3B0aW9ucylcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY29ycmVjdE51bTogb3B0aW9ucy5jb3JyZWN0X2NvdW50XG4gICAgfSk7XG4gIH0sXG4gIGJ0blRvUmVkKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBidG5TdHlsZTogJ2J0bi1iZy1yZWQnXG4gICAgfSlcbiAgfSxcbiAgYnRuVG9CbHVlKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBidG5TdHlsZTogJ2J0bi1iZy1ibHVlJ1xuICAgIH0pXG4gIH0sXG59KVxuIl19