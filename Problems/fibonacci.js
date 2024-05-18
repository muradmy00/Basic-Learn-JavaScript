function fibonacci(n){
    if(n==0 || n==1){
        return 1;
    }
    else{
        return fibonacci(n-2)+fibonacci(n-1);
    }
}

for(let i=0;i<=5;i++){
    console.log(fibonacci(i));
}




// Normal way

function fibonacciN(num){
    let fibo=[0,1];
    for(let i=2;i<=num;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}

console.log(fibonacciN(5));
 

// push method


function fibonacci(n){
    if(n==0){
        return 0;
    }
    else if(n==1){
        return [0,1];
    }
    else{
        var fibo = fibonacci(n-1);
        var next = fibo[n-1]+fibo[n-2];
        fibo.push(next);
        return fibo;
    }
}
console.log(fibonacci(6));