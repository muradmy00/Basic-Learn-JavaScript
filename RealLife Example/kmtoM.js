 function kilomtoM(km){
    if(km<0 || km==-0){
        return "Invalid Input";
    }
    else{
        var m = km*1000;
        return m;
    }
 }

 console.log(kilomtoM(5.96));