var myself = ["MD",":","Mohiuddin","Murad","Miraj","Mohiuddin Murad"];

function bigName(myself){
    if(myself.length ==0){
        return "Invalid";
    }
    else{
        var longestWord = "";
        for(let i=0;i<myself.length;i++){
            if(longestWord.length<myself[i].length){
                longestWord = myself[i];
            }
        }
    }
    return longestWord;
}

console.log(bigName(myself));