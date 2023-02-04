var Cat = /** @class */ (function () {
    function Cat() {
        this.name = 'Description';
    }
    Cat.prototype.walk = function () {
        return true;
    };
    Cat.prototype.fly = function () {
        return false;
    };
    Cat.prototype.swim = function () {
        return false;
    };
    Cat.prototype.sound = function () {
        return 'Miau';
    };
    Cat.prototype.nightVision = function () {
        return true;
    };
    Cat.prototype.legs = function () {
        return 4;
    };
    Cat.prototype.tail = function () {
        return true;
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.name = 'Description';
    }
    Bird.prototype.walk = function () {
        return false;
    };
    Bird.prototype.fly = function () {
        return true;
    };
    Bird.prototype.swim = function () {
        return false;
    };
    Bird.prototype.sound = function () {
        return 'Different types';
    };
    Bird.prototype.tail = function () {
        return true;
    };
    Bird.prototype.wings = function () {
        return true;
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
        this.name = 'Description';
    }
    Fish.prototype.walk = function () {
        return false;
    };
    Fish.prototype.fly = function () {
        return false;
    };
    Fish.prototype.swim = function () {
        return true;
    };
    Fish.prototype.sound = function () {
        return 'Special sounds';
    };
    Fish.prototype.tail = function () {
        return true;
    };
    Fish.prototype.wings = function () {
        return false;
    };
    Fish.prototype.fins = function () {
        return true;
    };
    return Fish;
}());
console.log(Fish);
