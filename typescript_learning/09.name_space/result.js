"use strict";
var OwnMath;
(function (OwnMath) {
    // 可以將 namespace 視為 JSON 物件的感覺（但 Namespaces 不是 JSON 物件！），使用點（.）呼叫出命名空間內部的屬性與方法。不過，如果你想要呼叫出 MyMath.PI 的話還是會出現錯誤！
    // 如果想要讓命名空間提供各種功能的話，必須使用 export 關鍵字
    OwnMath.PI = 3.14;
    function AreaOfCircle(radius) {
        return OwnMath.PI * Math.pow(radius, 2);
    }
    OwnMath.AreaOfCircle = AreaOfCircle;
    function AreaOfRectangle(width, height) {
        return width * height;
    }
    function CircumferenceOfCircle(radius) {
        return 2 * OwnMath.PI * radius;
    }
    function CircumferenceOfRectangle(width, height) {
        return 2 * (width + height);
    }
})(OwnMath || (OwnMath = {}));
console.log(OwnMath.AreaOfCircle(15));
var Misc;
(function (Misc) {
    var Vehicle = /** @class */ (function () {
        function Vehicle(type, wheels, color) {
            this.type = type;
            this.wheels = wheels;
            this.color = color;
        }
        Vehicle.prototype.getInfo = function () {
            console.log("The " + this.color + " " + this.type + " has " + this.wheels + " wheels");
        };
        return Vehicle;
    }());
    Misc.Vehicle = Vehicle;
})(Misc || (Misc = {}));
var dict = {
    hello: 'World',
};
var Gary = {
    name: "Gary",
    age: 26,
    hasPet: false
};
var truck = new Misc.Vehicle('truck', 4, 'blue');
// truck.getInfo()
// 命名空間可以輸出的功能 Exportable Utilities From Namespaces
// 只要是變數（Variables）、函式（Functions）、型別（Types，也包含 列舉型別 Enumerated Type）、介面（Interfaces）、類別（Classes）與命名空間（Namespaces）都是可以在命名空間裡使用 export 進行輸出。
// 唯一不能輸出的是值（Value）本身。（例如：你不能在命名空間直接 export 123;，這樣會出現警告）
var sameName;
(function (sameName) {
    var SecrectNum = 123;
    function introduce() {
        console.log("Hi I'm clone No.1");
        console.log(SecrectNum);
        return 'already introduce';
    }
    sameName.introduce = introduce;
})(sameName || (sameName = {}));
(function (sameName) {
    // export function introduce(){
    //   console.log('error');
    // } ! 輸出的函式在同命名空間內export，會被警告報錯
    function introduce() {
        console.log("Hi I'm fake clone No.1 ");
    }
    // 內用的同名function可以存在，但因為沒有輸出，呼叫不出來因此也不會有覆蓋的問題
    function introduceSec() {
        // 但如果用introduceSec來呼叫intorduce()，則會得到兩個輸出，先前被覆蓋掉的introduce = undefinded ，和後來在內部宣稱沒有export的introduce
        console.log(introduce());
        // console.log(SecrectNum) ! 雖然在同名命名空間內，但沒辦法使用沒有export的變數
        console.log("Hi I'm clone No.2");
    }
    sameName.introduceSec = introduceSec;
})(sameName || (sameName = {}));
sameName.introduce();
sameName.introduceSec();
// 介面宣告的是規格；命名空間則是一系列功能的包裝，主要意義在於防止全域的污染
// 兩者皆可以動態擴充，然而擴充的意義不同 —— 介面擴充的意義就是規格的擴充；命名空間則是包含介面，任何功能的擴充（如：變數、函式、類別等等的宣告）
// 介面可以進行函式的超載；然而，命名空間因為單純只是對實際的功能進行輸出的動作，因此函式自然根本不會有什麼超載或者是很神奇的功能（不過這個應該是廢話）
// 命名空間裡面可以包含介面的宣告與輸出，反之則不行（這應該也是廢話，誰會在介面裡面宣告 Namespace？）
// !!! 未解:目前這區還沒辦法使用
// Triple Slash Directive
// / <reference path="<path-to-file>" />
/// <reference path="./myMath/circle.ts" />
/// <reference path="./myMath/rectangle.ts" />
console.log(MyMath.Circle.PI);
console.log(MyMath.Circle.area(10));
console.log(MyMath.Circle.circumference(20));
console.log(MyMath.Rectangle.circumference(20, 30));
console.log(MyMath.Rectangle.area(20, 50));
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        Circle.PI = 3.14;
        function area(radius) {
            return Circle.PI * (Math.pow(radius, 2));
        }
        Circle.area = area;
        function circumference(radius) {
            return 2 * Circle.PI * radius;
        }
        Circle.circumference = circumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    var Rectangle;
    (function (Rectangle) {
        function area(width, height) {
            return width * height;
        }
        Rectangle.area = area;
        function circumference(width, height) {
            return 2 * (width + height);
        }
        Rectangle.circumference = circumference;
    })(Rectangle = MyMath.Rectangle || (MyMath.Rectangle = {}));
})(MyMath || (MyMath = {}));
