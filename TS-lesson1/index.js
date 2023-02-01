var icecream = {
    smallSize: 10,
    bigSize: 25,
    chokolade: 5,
    caramel: 6,
    berry: 10,
    marsh: 5
};
var totalPrice = 0;
var fn = function () {
    var option1 = prompt('Which size would you like: enter S for small or B for big?');
    switch (option1) {
        case 'S':
            totalPrice = icecream.smallSize;
            break;
        case 'B':
            totalPrice = icecream.bigSize;
            break;
        default:
            alert('Incorrect input');
    }
    var option2 = prompt('What would you like: enter C for chocolate, R for caramel or Y for berry?');
    switch (option2) {
        case 'C':
            totalPrice += icecream.chokolade;
            break;
        case 'R':
            totalPrice += icecream.caramel;
            break;
        case 'Y':
            totalPrice += icecream.berry;
            break;
        default:
            alert('Incorrect input');
    }
    var option3 = prompt('Would you like marshmallow? input Y or N');
    switch (option3) {
        case 'Y':
            totalPrice += icecream.berry;
            break;
        case 'N':
            totalPrice += 0;
            break;
        default:
            alert('Incorrect input');
    }
    alert("Total price is - ".concat(totalPrice));
};
fn();
