// using For loop
function factorial(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact = fact*i;
    }
    return fact;
}

console.log(factorial(7));




//using While lopp
function factorialW(n){
    let fact=1;
    while(n){
        fact*=n;
        n--;
    }
    return fact;
}

console.log(factorialW(5));


// Using Recrsive 

function Rfactorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*Rfactorial(n-1);
    }
}

console.log(Rfactorial(2));  