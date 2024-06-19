//  Array Sum

 var totalTaka = [100,200,300,400,500,200,100,150,50];

 var count =0;

 for(var i =0;i<totalTaka.length;i++){
    count=count+totalTaka[i];
 }
 console.log("Total Amount is "+" "+count);



 
 let number=[100,300,400,100,100];

 function arrsum(number){
   let sum = 0;
   for(let i=0;i<number.length;i++){
      let element = number[i];
      sum = sum+element;
   }
   return sum;
 }

 console.log(arrsum(number));