'use strict';
class MyPowerDictionary {
  constructor() {
    this._data = [];
  }
  set key(value) {
    if (value == null || value == undefined) {
      throw new Error('Значение value не может быть пустым.');
    }
    this._key = value;
  }
  get key() {
    return this._key;
  }
  set value(value) {
    if (value == null || value == undefined) {
      throw new Error('Значение value не может быть пустым.');
    }
    this._value = value;
  }
  get value() {
    return this._value;
  }
  set description(value) {
    if (value == null || value == undefined) {
      throw new Error('Значение value не может быть пустым.');
    }
    this._description = value;
  }
  get description() {
    return this._description;
  }
  add(key, value, description) {
    let entry = new MyPowerDictionary();
    entry._key = key;
    entry._value = value;
    entry._description = description;
    this._data.push(entry);
  }
  getValue(key) {
    for (let i = 0; i < this._data.length; i++) {
      if (this._data[i]._key == key) {
        return this._data[i]._value;
      }
    }
    return null;
  }
}
let dictionary = new MyPowerDictionary();
dictionary.add('hello', 'привет', 'приветствие');
dictionary.add('book', 'книга', 'бумажный носитель информации');
dictionary.add('apple', 'яблоко', 'фрукт');
