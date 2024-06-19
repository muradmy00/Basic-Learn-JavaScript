console.log([ ,,, ].length);    
// 3


console.log(parseInt(0.0000009));
// 9


//0.5=0
// 0.05=0 
// 0.005,0.0005,0.00005 = 0
// 0.000005 = 0;
// 0.0000005 = 5

const numbers = [33,2,8];
numbers.sort();
console.log(numbers);
console.log(numbers[1]);

// 33


let x = [1,2,3];
let y = [...x];
// console.log(y); ---> 1,2,3
y.push(4);
console.log(x);

// 1,2,3


var a = true;
var b = false;
var c = null;
var result = (x==null);
console.log(a==result);

// false



