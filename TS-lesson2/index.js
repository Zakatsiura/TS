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
        this.bonus = 'additional equipment is available';
    }
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi() {
        var _this = _super.call(this, 'Audi') || this;
        _this.discount = -500;
        _this.bonus = 'none';
        return _this;
    }
    Audi.prototype.model = function () {
        console.log(this.name);
    };
    return Audi;
}(Car));
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW() {
        var _this = _super.call(this, 'BMW') || this;
        _this.discount = -800;
        return _this;
    }
    BMW.prototype.model = function () {
        console.log(this.name);
    };
    return BMW;
}(Car));
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        var _this = _super.call(this, 'Mercedes') || this;
        _this.discount = -700;
        return _this;
    }
    Mercedes.prototype.model = function () {
        console.log(this.name);
    };
    return Mercedes;
}(Car));
var audiA6 = new Audi();
audiA6.model();
audiA6.price = 10000;
audiA6.type = 'Audi A6';
audiA6.power = 350;
console.log(audiA6);
var audiA8 = new Audi();
audiA8.model();
audiA8.price = 15000;
audiA8.type = 'Audi A8';
audiA6.power = 380;
console.log(audiA8);
var bmw750 = new BMW();
bmw750.model();
bmw750.price = 18000;
bmw750.type = 'BMW 750';
bmw750.power = 410;
console.log(bmw750);
var bmw530 = new BMW();
bmw530.model();
bmw530.price = 14500;
bmw530.type = 'BMW 530';
bmw530.power = 260;
console.log(bmw530);
var mercedes550 = new Mercedes();
mercedes550.model();
mercedes550.price = 25500;
mercedes550.type = 'S 550';
mercedes550.power = 480;
console.log(mercedes550);
var mercedes600 = new Mercedes();
mercedes600.model();
mercedes600.price = 29500;
mercedes600.type = 'S 600';
mercedes600.power = 520;
console.log(mercedes600);
