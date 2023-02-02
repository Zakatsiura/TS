// Task 1

abstract class Car {
  constructor(public name: string) {}
  abstract model();
  protected bonus: string = 'additional equipment is available';
}

class Audi extends Car {
  constructor() {
    super('Audi');
  }
  model() {
    console.log(this.name);
  }
  public price: number;
  public type: string;
  public power: number;
  private discount: number = -500;
  bonus: string = 'none';
}

class BMW extends Car {
  constructor() {
    super('BMW');
  }
  model() {
    console.log(this.name);
  }
  public price: number;
  public type: string;
  public power: number;
  private discount: number = -800;
}

class Mercedes extends Car {
  constructor() {
    super('Mercedes');
  }
  model() {
    console.log(this.name);
  }
  public price: number;
  public type: string;
  public power: number;
  private discount: number = -700;
}

let audiA6: Audi = new Audi();
audiA6.model();
audiA6.price = 10000;
audiA6.type = 'Audi A6';
audiA6.power = 350;

console.log(audiA6);

let audiA8: Audi = new Audi();
audiA8.model();
audiA8.price = 15000;
audiA8.type = 'Audi A8';
audiA6.power = 380;

console.log(audiA8);

let bmw750: BMW = new BMW();
bmw750.model();
bmw750.price = 18000;
bmw750.type = 'BMW 750';
bmw750.power = 410;

console.log(bmw750);

let bmw530: BMW = new BMW();
bmw530.model();
bmw530.price = 14500;
bmw530.type = 'BMW 530';
bmw530.power = 260;

console.log(bmw530);

let mercedes550: Mercedes = new Mercedes();
mercedes550.model();
mercedes550.price = 25500;
mercedes550.type = 'S 550';
mercedes550.power = 480;

console.log(mercedes550);

let mercedes600: Mercedes = new Mercedes();
mercedes600.model();
mercedes600.price = 29500;
mercedes600.type = 'S 600';
mercedes600.power = 520;

console.log(mercedes600);

// Task 2
