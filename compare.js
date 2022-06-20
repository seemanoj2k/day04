// How to compare two Json have the same properties without order?

//false
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
console.log(JSON.stringify(obj1)==JSON.stringify(obj2)); 

//true 
var obj3={ name: "Person 1", age:5 };
var obj4={ name: "Person 1", age:5 };
console.log(JSON.stringify(obj3)==JSON.stringify(obj4));


