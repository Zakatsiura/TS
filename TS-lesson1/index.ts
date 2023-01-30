console.log('Hello');

let message: string = 'Hello';

function var2() {
  for (var i: number = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
      1000;
    });
  }
}
var2();
