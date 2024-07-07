function budgetCalculator(watch,phone,laptop){
    if(watch==-1||phone==-1||laptop==-1){
        return "Invalid Input";
    }
    else{
        var watchPrice= watch*50;
        var phonePrice= phone*100;
        var laptopPrice=laptop*500;
        var budget=watchPrice+phonePrice+laptopPrice;  
    }
    return budget;
}



console.log(budgetCalculator(0,10,0));