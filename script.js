'use strict';

const arr = ['42365', '72525', '321', '55555', '25441', '3212', '24587'];

let newArr = arr.filter((item) => item[0] == 4 || item[0] == 2);

console.log(newArr);


let num = 100;
 
nextPrime:
for (let i = 2; i <= num; i++) { 
 
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime; 
  }
 
  console.log("Делители этого числа: 1 и ", i);
}
