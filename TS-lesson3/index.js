// Создать словарь собственных определений, используя Generic function. Внутри должно быть
// определение для 3 свойств – ключ, значение, описание (различных типов данных). Для получения или
// записи использовать get/set реализацию доступа. Также для полей нужно использовать модификаторы
// доступа (на Ваш выбор). В итоге должен получится словарь терминов, принимающий на входящий
// параметр различные типы данных для реализации.
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MyPowerDictionary = /** @class */ (function () {
    function MyPowerDictionary() {
        this._data = [];
    }
    Object.defineProperty(MyPowerDictionary.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            if (value == null || value == undefined) {
                throw new Error('Значение value не может быть пустым.');
            }
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyPowerDictionary.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (value == null || value == undefined) {
                throw new Error('Значение value не может быть пустым.');
            }
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyPowerDictionary.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            if (value == null || value == undefined) {
                throw new Error('Значение value не может быть пустым.');
            }
            this._description = value;
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
// Создайте экземпляр класса, в конструктор которого пользователь будет передавать строковые значения.
// Установите в классе метод для определения функции генератора, которая на каждом значении в
// свойствах класса устанавливает yield. При вызове данной функции из класса проверьте все значения,
// введенные пользователем и остановите перебор – в случае если пользователь ввел числовое значение.
// Ошибку выведите в консоль.
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.value = [];
        this.value[0] = 'String1';
        this.value[1] = 'String2';
        this.value[2] = 'String3';
    }
    MyClass.prototype.getValue = function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < this.value.length)) return [3 /*break*/, 5];
                    if (!(this.value[i] !== 'string')) return [3 /*break*/, 2];
                    throw 'Error';
                case 2: return [4 /*yield*/, this.value[i]];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    };
    return MyClass;
}());
var firstClass = new MyClass().getValue();
var result = '';
for (var _i = 0, firstClass_1 = firstClass; _i < firstClass_1.length; _i++) {
    var subClass = firstClass_1[_i];
    result += subClass;
}
console.log(result);
console.log(firstClass);
