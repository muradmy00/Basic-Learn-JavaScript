var Student1 = {
    
    Name:"Murad",
    Id:123,
    Dept:"CSE",
    CGPA:3.50
};

var Student2 = {
    Nmae:"Miraj",
    Id:123,
    Dept:"BBA",
    CGPA:3.44
};


console.log(Student1);
console.log(Student2);


// Specific Data
console.log(Student1.CGPA , Student1.Id);



// One Rule
Cgpa = Student1.CGPA;
console.log(Cgpa);


// Another Rule
var Id = Student1["Id"];
console.log(Id);


// New Properties Add

// One Rule
Student1.Address = "Dhaka";
Student2.Address = "Bogura";



// Another Rule
// camelCase using -> (favPerson) uth er moto

Student1["favPerson"] = "Ma";
Student2["favPerson"] = "Ma";

console.log(Student1);
console.log(Student2);

