"use strict";
var horseColor;
(function (horseColor) {
    horseColor[horseColor["White"] = 0] = "White";
    horseColor[horseColor["Black"] = 1] = "Black";
    horseColor[horseColor["Brown"] = 2] = "Brown";
    horseColor[horseColor["Grey"] = 3] = "Grey";
    horseColor[horseColor["Rainbow"] = 4] = "Rainbow";
})(horseColor || (horseColor = {}));
;
var Horse = /** @class */ (function () {
    function Horse(name, color, type, noise) {
        if (noise === void 0) { noise = 'meeeeeeeeEeeeeeeee~'; }
        this.name = name;
        this.color = color;
        this.type = type;
        this.noise = noise;
    }
    Horse.prototype.makeNoise = function () {
        console.log(this.noise);
    };
    Horse.prototype.infoText = function () {
        return "It's " + this.name + ", the " + horseColor[this.color] + this.type;
    };
    Horse.prototype.info = function () {
        console.log(this.infoText());
    };
    return Horse;
}());
var horse = new Horse("Martin", horseColor.Black, '短腿馬');
console.log(horse.info());
var xhorse = new Horse('Martin', horseColor.Grey, '小隻馬');
// xhorse.color = 'red' !類型錯誤
// xhorse.isPet = true !新增屬性
// xhorse = null !直接複寫錯誤的值
