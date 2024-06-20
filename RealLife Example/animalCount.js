var animal =0;

function animalCount(distance){
    if(distance<=10){
        animal = distance * 5;
    }
    else if(distance <= 20){
        var firstpartanimal = 10*5;
        var remaindistance = distance -10;
        var secondpartanimal = remaindistance * 10;
        animal = firstpartanimal + secondpartanimal;
    }
    else{
        var firstpartanimal = 10*5;
        var secondpartanimal = 20 *10;
        var remaindistance = distance -20;
        var thirdpartanimal = remaindistance * 15;
        animal = firstpartanimal + secondpartanimal+thirdpartanimal;
    }

    return animal;

}

console.log(animalCount(12));