"use strict";
var app = getApp();
Page({
    data: {
        btnStyle: 'btn-bg-blue'
    },
    back: function () {
        wx.redirectTo({
            url: "/prepare-pages/pages/rule/rule"
        });
    },
    btnToRed: function () {
        app.sound("btn");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFpbHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhaWx1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFDO0FBRS9CLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxhQUFhO0tBQ3hCO0lBQ0QsSUFBSTtRQUNGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsZ0NBQWdDO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxRQUFRO1FBQ04sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLFlBQVk7U0FDdkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLGFBQWE7U0FDeEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcbnZhciBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBidG5TdHlsZTogJ2J0bi1iZy1ibHVlJ1xuICB9LFxuICBiYWNrKCkge1xuICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgdXJsOiBcIi9wcmVwYXJlLXBhZ2VzL3BhZ2VzL3J1bGUvcnVsZVwiXG4gICAgfSlcbiAgfSxcbiAgYnRuVG9SZWQoKSB7XG4gICAgYXBwLnNvdW5kKFwiYnRuXCIpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGJ0blN0eWxlOiAnYnRuLWJnLXJlZCdcbiAgICB9KVxuICB9LFxuICBidG5Ub0JsdWUoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGJ0blN0eWxlOiAnYnRuLWJnLWJsdWUnXG4gICAgfSlcbiAgfSxcbn0pXG4iXX0=