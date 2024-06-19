let number = [1,2,3,4,5,5,4,3,2,1,3,4,5,2,1];
var empty = [];


// console.log(number.length);
// console.log(empty.length);

for(let i=0;i<number.length;i++){
    let element = number[i];
    let index = empty.indexOf(element);
    if(index==-1){
        empty.push(element);
    }
}

console.log(empty);

