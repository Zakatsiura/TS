// Создать словарь собственных определений, используя Generic function. Внутри должно быть
// определение для 3 свойств – ключ, значение, описание (различных типов данных). Для получения или
// записи использовать get/set реализацию доступа. Также для полей нужно использовать модификаторы
// доступа (на Ваш выбор). В итоге должен получится словарь терминов, принимающий на входящий
// параметр различные типы данных для реализации.

class MyPowerDictionary<TKey, TValue, TDescription> {
  private _data: MyPowerDictionary<TKey, TValue, TDescription>[] = [];

  private _key: TKey;

  public set key(value: TKey) {
    if (value == null || value == undefined) {
      throw new Error('Значение value не может быть пустым.');
    }
    this._key = value;
  }
  public get key(): TKey {
    return this._key;
  }
  private _value: TValue;

  public set value(value: TValue) {
    if (value == null || value == undefined) {
      throw new Error('Значение value не может быть пустым.');
    }
    this._value = value;
  }
  public get value(): TValue {
    return this._value;
  }

  private _description: TDescription;

  public set description(value: TDescription) {
    if (value == null || value == undefined) {
      throw new Error('Значение value не может быть пустым.');
    }
    this._description = value;
  }
  public get description(): TDescription {
    return this._description;
  }

  public add(key: TKey, value: TValue, description: TDescription) {
    let entry = new MyPowerDictionary<TKey, TValue, TDescription>();
    entry._key = key;
    entry._value = value;
    entry._description = description;
    this._data.push(entry);
  }
  public getValue(key: TKey): TValue | null {
    for (let i = 0; i < this._data.length; i++) {
      if (this._data[i]._key == key) {
        return this._data[i]._value;
      }
    }
    return null;
  }
}

let dictionary = new MyPowerDictionary<string, string, string>();
dictionary.add('hello', 'привет', 'приветствие');
dictionary.add('book', 'книга', 'бумажный носитель информации');
dictionary.add('apple', 'яблоко', 'фрукт');

// Создайте экземпляр класса, в конструктор которого пользователь будет передавать строковые значения.
// Установите в классе метод для определения функции генератора, которая на каждом значении в
// свойствах класса устанавливает yield. При вызове данной функции из класса проверьте все значения,
// введенные пользователем и остановите перебор – в случае если пользователь ввел числовое значение.
// Ошибку выведите в консоль.

class MyClass {
  private value: string[] = [];
  constructor() {
    this.value[0] = 'String1';
    this.value[1] = 'String2';
    this.value[2] = 'String3';
  }
  *getValue() {
    for (let i = 0; i < this.value.length; i++) {
      if (this.value[i] !== 'string') {
        throw 'Error';
      } else {
        yield this.value[i];
      }
    }
  }
}

let firstClass = new MyClass().getValue();
let result = '';

for (const subClass of firstClass) {
  result += subClass;
}

console.log(result);
console.log(firstClass);
