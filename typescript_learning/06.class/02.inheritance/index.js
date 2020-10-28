"use strict";
// 存取修飾子總共分為三種模式：public、private 以及 protected
// 若宣告某類別 C，則裡面的成員變數 P 或成員方法 M 被註記為：
// public 模式時：P 與 M 可以任意在類別內外以及繼承 C 的子類別使用
// private 模式時：P 與 M 僅僅只能在當前類別 C 內部使用
// protected 模式時： P 與 M 除了當前類別 C 內部使用外，繼承 C 的子類別也可以使用
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
var TransportTicketType;
(function (TransportTicketType) {
    TransportTicketType[TransportTicketType["Train"] = 0] = "Train";
    TransportTicketType[TransportTicketType["MRT"] = 1] = "MRT";
    TransportTicketType[TransportTicketType["Plane"] = 2] = "Plane";
    TransportTicketType[TransportTicketType["Bus"] = 3] = "Bus";
})(TransportTicketType || (TransportTicketType = {}));
var TicketSystem = /** @class */ (function () {
    function TicketSystem(type, startingPoint, destination, departureTime) {
        this.type = type;
        this.startingPoint = startingPoint;
        this.destination = destination;
        this.departureTime = departureTime;
    }
    TicketSystem.prototype.deriveDuration = function () {
        return [1, 0, 0];
    };
    TicketSystem.prototype.deriveArrivalTime = function () {
        var departureTime = this.departureTime;
        var _a = this.deriveDuration(), hours = _a[0], minutes = _a[1], seconds = _a[2];
        var durationSeconds = hours * 60 * 60 + minutes * 60 + seconds;
        var durationMilliseconds = durationSeconds * 1000;
        var arrivalMilliseconds = departureTime.getTime() + durationMilliseconds;
        return new Date(arrivalMilliseconds);
    };
    TicketSystem.prototype.getTickerInfo = function () {
        var ticketName = TransportTicketType[this.type];
        var arrivalTime = this.deriveArrivalTime();
        console.log("\n    Ticket Type:" + ticketName + "\n    Station:" + this.startingPoint + " - " + this.destination + "\n    Departure:" + this.departureTime + "\n    Arrival:" + arrivalTime + "\n    ");
    };
    return TicketSystem;
}());
var TrainTicket = /** @class */ (function (_super) {
    __extends(TrainTicket, _super);
    function TrainTicket(startingPoint, destination, departureTime) {
        var _this = _super.call(this, 
        // super之我流解釋:若class B 繼承自 class A ，在class B創造(new)的初始時，並未帶有class A的constructor屬性，會導致無法使用'this'的寫法，導致Error，故用super可以在constructor之前會先引入super(父層)的數值。
        TransportTicketType.Train, startingPoint, destination, departureTime) || this;
        _this.stops = [
            'pingtung',
            'Kaohsiung',
            'Tainan',
            'Taichung',
            'Hsinchu',
            'Taipei'
        ];
        _this.trainStationsDetail = [
            { name: 'pingtung', nextStop: 'Kaohsiung', duration: [2, 30, 0] },
            { name: 'Kaohsiung', nextStop: 'Tainan', duration: [1, 30, 0] },
            { name: 'Tainan', nextStop: 'Taichung', duration: [2, 15, 15] }
        ];
        return _this;
    }
    TrainTicket.prototype.isStopExist = function (stop) {
        for (var i = 0; i < this.stops.length; i++) {
            var existedStop = this.stops[i];
            if (existedStop === stop)
                return true;
        }
        return false;
    };
    TrainTicket.prototype.deriveDuration = function () {
        var _a = this, startingPoint = _a.startingPoint, destination = _a.destination;
        if (this.isStopExist(startingPoint) && this.isStopExist(destination)) {
            var time = [0, 0, 0];
            var stopFound = false;
            for (var i = 0; i < this.trainStationsDetail.length; i++) {
                var detail = this.trainStationsDetail[i];
                if (!stopFound && detail.name === startingPoint) {
                    stopFound = true;
                    time[0] += detail.duration[0];
                    time[1] += detail.duration[1];
                    time[2] += detail.duration[2];
                }
                else if (stopFound) {
                    time[0] += detail.duration[0];
                    time[1] += detail.duration[1];
                    time[2] += detail.duration[2];
                    if (detail.nextStop === destination)
                        break;
                }
            }
            var minutes = Math.floor(time[2] / 60);
            time[1] += minutes;
            time[2] += minutes * 60;
            var hours = Math.floor(time[1] / 60);
            time[0] += hours;
            time[1] -= hours * 60;
            return time;
        }
        throw new Error('Worng stop name,please check again');
    };
    return TrainTicket;
}(TicketSystem));
// 繼承
// class C {
//   public a:string='a';
//   private b:string='b';
//   protected c:string='c';
//   public d(value:string){console.log('object')};
//   private e(value:string){console.log('object')};
//   protected f(value:string){console.log('object')} ;
// }
// class D extends C {}
// let E = new D 
// console.log(E.a);
// console.log(E.b);
// console.log(E.c);
// E.d('a')
// E.e('a')
// E.f('a')
var trainTicker = new TrainTicket('Tainan', 'Hsinchu', new Date(2020, 10, 28, 9, 0, 0));
trainTicker.getTickerInfo();
