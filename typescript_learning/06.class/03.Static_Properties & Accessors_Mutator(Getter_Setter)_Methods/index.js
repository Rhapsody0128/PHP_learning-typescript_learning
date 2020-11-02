"use strict";
var CircleGeometry = /** @class */ (function () {
    function CircleGeometry(radius) {
        this.radius = radius;
        this.PI = 3.14;
    }
    CircleGeometry.prototype.area = function () {
        return this.PI * (Math.pow(this.radius, 2));
    };
    CircleGeometry.prototype.circumference = function () {
        return 2 * this.PI * this.radius;
    };
    return CircleGeometry;
}());
var myCircle = new CircleGeometry(2);
console.log(myCircle.area());
console.log(myCircle.circumference());
var StaticCircleGeometry = /** @class */ (function () {
    function StaticCircleGeometry(radius) {
        this.radius = radius;
    }
    StaticCircleGeometry.area = function (radius) {
        return StaticCircleGeometry.PI * (Math.pow(radius, 2));
    };
    StaticCircleGeometry.circumference = function (radius) {
        return 2 * StaticCircleGeometry.PI * radius;
    };
    StaticCircleGeometry.PI = 3.14;
    return StaticCircleGeometry;
}());
var circleObj = new CircleGeometry(2);
var areaFromObj = circleObj.area();
var circumferenceFromObj = circleObj.circumference();
var areaFromStaticMethod = StaticCircleGeometry.area(2);
var circumferenceFromStaticMethod = StaticCircleGeometry.circumference(2);
console.log("\n  Using CircleGeometry Class calculate radius 2 case:\n  Area:         " + areaFromObj + "\n  Circumference:" + circumferenceFromObj + "\n\n  Using StaticCircleGeometry Class calculate radius 2 case:\n  Area:         " + areaFromStaticMethod + "\n  Circumference:" + circumferenceFromStaticMethod + "\n");
// class CircleGeometryV2{
//   private PI:number = 3.14;
//   public area: number
//   constructor(public radius:number){
//     this.area = this.PI * (radius**2)
//   }
//   public circumference():number{
//     return 2 * this.PI * this.radius
//   }
// }
// const randomCircle = new CircleGeometryV2(2);
// console.log(randomCircle.area);
// 我們可以直接用 randomCircle.area = 某數字 來強行覆寫掉面積的值，使得計算結果被破壞掉
// 因此會考慮使用Accessors:
// (儘管在 JS 裡將 Accessors 存取方法分別稱為 Getter/Setter Methods（取值/存值）；然而某部分語言會將 Accessors 代表取值方法，而 Mutators 則是代表存值方法 —— 因此不是用 Getter/Setter 名稱之分，而是以 Accessor/Mutator 這樣的名稱來分。)
var CircleGeometryV2 = /** @class */ (function () {
    function CircleGeometryV2(radius) {
        this.radius = radius;
        this.PI = 3.14;
    }
    Object.defineProperty(CircleGeometryV2.prototype, "area", {
        get: function () {
            return this.PI * (Math.pow(this.radius, 2));
        },
        set: function (value) {
            this.radius = Math.pow((value / this.PI), 0.5);
        },
        enumerable: false,
        configurable: true
    });
    CircleGeometryV2.prototype.circumference = function () {
        return 2 * this.PI * this.radius;
    };
    return CircleGeometryV2;
}());
var randomCircle = new CircleGeometryV2(2);
console.log(randomCircle.area);
// 用getter methods 的屬性是唯獨
// randomCircle.area = 151 !
randomCircle.radius = 3;
console.log(randomCircle.area);
var randomCircle2 = new CircleGeometryV2(2);
console.log(randomCircle2.radius);
console.log(randomCircle2.area);
randomCircle2.area = 3.14 * (Math.pow(9941, 2));
console.log(randomCircle2.radius);
