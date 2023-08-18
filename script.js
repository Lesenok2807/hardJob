const num = 266219;
let product = num.toString().split('').reduce((a, b) => a * b);
console.log(product);
let pow = product ** 3;
console.log(pow);
let res = pow.toString().substr(0, 2);
console.log(res);
