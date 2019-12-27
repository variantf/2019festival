"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFpbHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhaWx1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxhQUFhO0tBQ3hCO0lBQ0QsSUFBSTtRQUNGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsZ0NBQWdDO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxhQUFhO1NBQ3hCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgYnRuU3R5bGU6ICdidG4tYmctYmx1ZSdcbiAgfSxcbiAgYmFjaygpIHtcbiAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgIHVybDogXCIvcHJlcGFyZS1wYWdlcy9wYWdlcy9ydWxlL3J1bGVcIlxuICAgIH0pXG4gIH0sXG4gIGJ0blRvUmVkKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBidG5TdHlsZTogJ2J0bi1iZy1yZWQnXG4gICAgfSlcbiAgfSxcbiAgYnRuVG9CbHVlKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBidG5TdHlsZTogJ2J0bi1iZy1ibHVlJ1xuICAgIH0pXG4gIH0sXG59KVxuIl19