// Arguments holo array like Object

function add(num1){

    // console.log(arguments);
    var sum = 0;
    for(let i=0;i<arguments.length;i++){
        var num = arguments[i];
        sum+=num;
    }
    return sum;

}

// [Argument] {'0':12, '1':8, '2':10,  '3':10}
var result = add(12,8,10,10);
console.log(result);