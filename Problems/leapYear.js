function leapYear(year){
    if(year%4==0 && year%100!=0|| year%400==0 ){
        console.log(year+" is a Leap Year");
    }
    else{
        console.log(year+" is a Not Leap Year");
    }
}

leapYear(2003);