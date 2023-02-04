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
