function sumNumber(num1,num2){

    return num1+num2;
}


console.log(sumNumber(22,22));




function sum(a,b,c){
    return a+b+c;
}

const numbers = [1,2,3];

console.log(sum(...numbers)); //Spread Operator

console.log(sum.apply(null, numbers));


const obj = {
    ...true,
    ..."test",
    ...10,
    ..."maxy"
};

console.log(obj);