function hotalCost(day){
    if(day<0 || day==-0){
        return "Invalid Input";
    }
    else if(day<=10){
        cost = day*100;
    }
    else if(day<=20){
        var firstdaycost = 10*100;
        var remaindays = day -10;
        var seconddaycost = remaindays*80;
        var cost=firstdaycost+ seconddaycost;
    }
    else{
        var firstdaycost = 10*100;
        var seconddaycost = 10*80;
        var remaindays = day -20;
        var thirddaycost = remaindays*50;
        var cost=firstdaycost+ seconddaycost+thirddaycost;
    }
    return cost;

}

console.log(hotalCost(22));