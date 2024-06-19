 var marks = [40,55,66,77,88,99,33,44,54,67,77];

 var max = marks[0]; 

 for(var i=0;i<marks.length;i++){
    var element = marks[i];
    if(element>max){
        max=element;
    }
 }
 console.log("Highest Mark is"+" "+ max);