var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.price = function () {
        console.log(this.price + '$');
    };
    Car.prototype.engPower = function () {
        console.log(this.engPower + 'h.p.');
    };
    return Car;
}());
var Sport = /** @class */ (function (_super) {
    __extends(Sport, _super);
    function Sport() {
        return _super.call(this, 'Sport Car') || this;
    }
    Sport.prototype.carClass = function () {
        console.log('Sport car');
    };
    Sport.prototype.price = function () {
        console.log(1000);
    };
    Sport.prototype.engPower = function () {
        console.log(500);
    };
    return Sport;
}(Car));
var ferrari = new Sport();
ferrari.carClass();
ferrari.price();
ferrari.engPower();
