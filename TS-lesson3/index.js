var MyPowerDictionary = /** @class */ (function () {
    function MyPowerDictionary() {
        this._data = [];
    }
    Object.defineProperty(MyPowerDictionary.prototype, "_key", {
        set: function (value) {
            if (value == null || value == undefined) {
                throw new Error('Значение value не может быть пустым.');
            }
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyPowerDictionary.prototype, "key", {
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyPowerDictionary.prototype, "_value", {
        set: function (value) {
            if (value == null || value == undefined) {
                throw new Error('Значение value не может быть пустым.');
            }
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyPowerDictionary.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyPowerDictionary.prototype, "_description", {
        set: function (value) {
            if (value == null || value == undefined) {
                throw new Error('Значение value не может быть пустым.');
            }
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyPowerDictionary.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    MyPowerDictionary.prototype.add = function (key, value, description) {
        var entry = new MyPowerDictionary();
        entry._key = key;
        entry._value = value;
        entry._description = description;
        this._data.push(entry);
    };
    MyPowerDictionary.prototype.getValue = function (key) {
        for (var i = 0; i < this._data.length; i++) {
            if (this._data[i]._key == key) {
                return this._data[i]._value;
            }
        }
        return null;
    };
    return MyPowerDictionary;
}());
var dictionary = new MyPowerDictionary();
dictionary.add('hello', 'привет', 'приветствие');
dictionary.add('book', 'книга', 'бумажный носитель информации');
dictionary.add('apple', 'яблоко', 'фрукт');
