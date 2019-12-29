"use strict";
var app = getApp();
Page({
    data: {
        url: ''
    },
    onLoad: function (options) {
        this.setData({
            url: decodeURIComponent(options.url)
        });
    },
    onOpenID: function (e) {
        console.log("on load: ", e);
    },
    onWebViewLoad: function (e) {
        console.log("on load: ", e);
    },
    onWebViewError: function (e) {
        console.log("on error: ", e);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRTlCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRCxNQUFNLFlBQUMsT0FBWTtRQUNqQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osR0FBRyxFQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFFBQVEsWUFBQyxDQUFNO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELGFBQWEsWUFBQyxDQUFNO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxjQUFjLFlBQUMsQ0FBTTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdXJsOiAnJ1xuICB9LFxuICBvbkxvYWQob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB1cmw6IGRlY29kZVVSSUNvbXBvbmVudChvcHRpb25zLnVybClcbiAgICB9KTtcbiAgfSxcbiAgb25PcGVuSUQoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJvbiBsb2FkOiBcIiwgZSk7XG4gIH0sXG4gIG9uV2ViVmlld0xvYWQoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJvbiBsb2FkOiBcIiwgZSk7XG4gIH0sXG4gIG9uV2ViVmlld0Vycm9yKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKFwib24gZXJyb3I6IFwiLCBlKTtcbiAgfVxufSk7Il19