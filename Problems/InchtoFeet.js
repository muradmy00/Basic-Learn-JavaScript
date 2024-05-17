var inch = 133;
var foot =inch/12;
console.log(inch+" inch is equal to "+foot.toFixed(0)+" foot");


function inchToFeet(inch){
    var feet = inch/12;
    return feet;

}


console.log(inchToFeet(120));


var value = inchToFeet(120);
console.log(value);



// Multiple data Access

var friends = [120,122,223];


var xfriend = inchToFeet(friends[0]);
console.log(xfriend.toFixed(0));

var yfriend = inchToFeet(friends[1]);
console.log(yfriend.toFixed(0));

var zfriend = inchToFeet(friends[2]);
console.log(zfriend.toFixed(0));


console.log(inchToFeet(friends[0]).toFixed(0));
console.log(inchToFeet(friends[1]).toFixed(0));
console.log(inchToFeet(friends[2]).toFixed(0));





