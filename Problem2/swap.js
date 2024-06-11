// first way

var a =10;
var b = 9;

console.log("Before swap a equal to " + a + " b equal to "+ b );

temp = a;
a=b;
b=temp;

console.log("After swap a equal to " + a + " b equal to "+ b );


// Second way

var x=4;
var y=3;

console.log("Before swap x equal to " , x , " y equal to " , y );

x=x+y;
y=x-y;
x=x-y;

console.log("After swap x equal to " , x , " y equal to " , y );


// Esaiest way

var p=2;
var q=1;

console.log("Before swap p equal to " , p , " q equal to " , q );

[p,q]=[q,p];

console.log("Before swap p equal to " , p , " q equal to " , q );