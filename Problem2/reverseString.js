var string = "1 2 3 4 5";

var empty = "";

function reverseString(string){

    for(let i =0; i<string.length;i++){

        var char = string[i];

        empty = char + empty;
    }
    return empty;
}

console.log(reverseString(string));