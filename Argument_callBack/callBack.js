// function er vitore ar ekta function call korbo eitai callBack function


function callBack(name,age,task){
    console.log(name);
    console.log(age);
    task();
}

function learnJS(){
    console.log("You have to Learn Javascript");
}


function learnPython(){
    console.log("You have to Learn Python");
}

function learnC(){
    console.log("You have to Learn C");
}


callBack("Murad",23,learnJS);
callBack("Miraj",22,learnPython);
callBack("Mohiuddin",20,learnC);

