"use strict";
var TransortTicketType;
(function (TransortTicketType) {
    TransortTicketType[TransortTicketType["Train"] = 0] = "Train";
    TransortTicketType[TransortTicketType["MRT"] = 1] = "MRT";
    TransortTicketType[TransortTicketType["Plane"] = 2] = "Plane";
    TransortTicketType[TransortTicketType["Bus"] = 3] = "Bus";
})(TransortTicketType || (TransortTicketType = {}));
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
        var ticketName = TransortTicketType[this.type];
        var arrivalTime = this.deriveArrivalTime();
        console.log("\n    Ticket Type:" + ticketName + "\n    Station:" + this.startingPoint + " - " + this.destination + "\n    Departure:" + this.departureTime + "\n    Arrival:" + arrivalTime + "\n    ");
    };
    return TicketSystem;
}());
var TI = new TicketSystem(TransortTicketType.Bus, 'Taipei', 'Sinjou', new Date(2020, 10, 27, 0, 0));
TI.getTickerInfo();
// console.log(TI);
