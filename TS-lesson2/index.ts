abstract class Car {
  constructor(public name: string) {}
  abstract carClass();
  public price(): void {
    console.log(this.price + '$');
  }
  public engPower(): void {
    console.log(this.engPower + 'h.p.');
  }
}

class Sport extends Car {
  constructor() {
    super('Sport Car');
  }
  carClass() {
    console.log('Sport car');
  }
  price() {
    console.log(1000);
  }
  engPower() {
    console.log(500);
  }
}

let ferrari: Sport = new Sport();
ferrari.carClass();
ferrari.price();
ferrari.engPower();
