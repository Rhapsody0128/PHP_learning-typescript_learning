"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myWindow = /** @class */ (function () {
    function myWindow(width, hegiht) {
        this.width = width;
        this.hegiht = hegiht;
        this.shape = "Rectangular";
    }
    myWindow.prototype.area = function () {
        return this.width * this.hegiht;
    };
    myWindow.prototype.cirecumference = function () {
        return 2 * (this.width + this.hegiht);
    };
    return myWindow;
}());
var AWindow = new myWindow(50, 100);
console.log(AWindow);
console.log(AWindow.area());
console.log(AWindow.cirecumference());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () { return this.width * this.height; };
    Rectangle.prototype.circumference = function () { return 2 * (this.width + this.height); };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () { return Math.pow(this.radius, 2) * Circle.PI; };
    Circle.prototype.circumference = function () { return 2 * this.radius * Circle.PI; };
    Circle.PI = 3.14;
    return Circle;
}());
// 然後再進行繼承的動作，變成 RectangularWindow 與 CircularWindow：
var RectangularWindow = /** @class */ (function (_super) {
    __extends(RectangularWindow, _super);
    function RectangularWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shape = 'Rectangle';
        return _this;
    }
    return RectangularWindow;
}(Rectangle));
var CircularWindow = /** @class */ (function (_super) {
    __extends(CircularWindow, _super);
    function CircularWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shape = 'Circle';
        return _this;
    }
    return CircularWindow;
}(Circle));
// 缺點:
// 1.要如何能夠只宣告一個 MyWindow 類別，但又能同時指定為 Rectangle 或者是 Circle 形狀的視窗呢？
// 2.就算指定了幾何形狀，因為長方形跟圓形計算面積或周長的過程也都不ㄧ樣， 一個是需要長度 width 與寬度 height；另一個則是半徑 radius 還有 Circle.PI 這個靜態成員。
// -----------------------------------
// 改用物件委任（Delegation）:
var MyWindow = /** @class */ (function () {
    function MyWindow(geometry) {
        this.geometry = geometry;
    }
    MyWindow.prototype.area = function () {
        return this.geometry.area();
    };
    MyWindow.prototype.circumference = function () {
        return this.geometry.circumference();
    };
    return MyWindow;
}());
var rectWindow = new MyWindow(new Rectangle(50, 100));
console.log("\u9577\u65B9\u5F62\u7684\u9762\u7A4D" + rectWindow.area());
console.log("\u9577\u65B9\u5F62\u7684\u908A\u9577" + rectWindow.circumference());
var circleWindow = new MyWindow(new Circle(10));
console.log("\u5713\u5F62\u7684\u9762\u7A4D" + circleWindow.area());
console.log("\u5713\u5F62\u7684\u5468\u9577" + circleWindow.circumference());
