
 var word = "Murad is a good boy";
 
 var count = 0;

 for(var i=0;i<word.length;i++){
    var char = word[i];
    if(char==" "&& word[i-1]!=" "){
        count++;
    }
 }
 count++;
 console.log(count);

 

// *********

 var word2 = "This is a book";

 console.log(word2.length);
 console.log(word2[1]);