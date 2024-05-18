//Improtant Note

//  "=" --> assign --> x=5
// "==" --> Check --> x==5
// "===" --> Typr Check --> x===5




function primeNumber(n){
    if(n==1){
        return "Not a Prime Number";
    }
    else if(n==2){
        return "Prime Number";
    }
    else{
        for(var i=2;i<n;i++){
            if(n%i==0){
                return "Not a Prime Number";
            }

        }
        return "Prime Number";
    }
}


console.log(primeNumber(33));