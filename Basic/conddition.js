var passmark = 80;

if(passmark>=33){
    console.log("Pass");
}
else{
    console.log("Fail");
}

let string = "33";
let number = 33;

// Different datatype but same value
// that's why it's true
console.log(string==number);


// check datatype not same
// that's why it's false
console.log(string===number);