switch(number=10){
    case 8:
        console.log("Eight");
        break;
    case 5:
        console.log("Five");
        break;
    default:
        console.log("Ten");
}



switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";        

}

console.log(day);

switch(new Date().getDay()){
    case 0:
        day = "Worked Day";
        break;
    case 1:
        day = "Worked Day";
        break;  
    case 2:
        day = "Worked Day";
        break;
    case 3:
        day = "Worked Day";
        break;
    case 4:
        day = "Worked Day";
        break;
    default:
        day = "Weekend Day";
}

console.log(day);