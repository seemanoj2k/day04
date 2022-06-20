//Task 1: Simple Programs todo for variables 
//Declare four variables without assigning values and print them in console 
var a,b,c,d;
console.log(a,b,c,d); 
//How to get value of the variable myvar as output
var myvar= 1;
console.log(myvar); 
//Declare variables to store your first name, last name, marital status, country and age in multiple lines 
var firstname="Mirnali";
var lastname="Ashok";
var martialstatus="unmarried";
var country="India";
var age=22; 
//Declare variables to store your first name, last name, marital status, country and age in a single line 
var firstname="Mirnali",lastname="Ashok",martialstatus="unmarried",country="India",age=22; 
// Declare variables and assign string, boolean, undefined and null data types 
var str="I am 25 years old";
const myFalse = new Boolean(false);
const g = Boolean(myFalse); 
var x; 
typeof(null)=== 'object' 
//Convert the string to integer parseInt() Number() Plus sign(+) 
var a="23";
console.log(parseInt(a));
console.log(Number(a));
console.log(+a); 
//Write 6 statement which provide truthy & falsey values. 
//if (3.14)
//if (-3.14)
//if (true)
//if (false)
//if (null)
//if (undefined)  
//Task 2: Simple Programs todo for Operators 
//Square of a number 
var a=2;
console.log(Math.sqrt(a)); 
//Swapping 2 numbers 
var a=2,b=3;
[a,b]=[b,a];
console.log(a,b); 
//Addition of 3 numbers 
var a=2,b=3,c=2;
console.log(a+b+c); 
//Celsius to Fahrenheit conversion 
var c=20;
var f = (c * 1.8) + 32
console.log(f); 
//Meter to miles 
var meter=20;
var mile=meter/1609.344;
console.log(mile);
//Pounds to kg
var pounds=5;
var res=pounds*0.45359237;
console.log(res); 
//Calculate Batting Average 
var hits=50;
var AtBats=300;
console.log(hits/AtBats); 
//Calculate five test scores and print their average 
var a=12,b=12,c=3,d=2,e=4;
console.log((a+b+c+d+e)/5); 
//Power of any number x ^ y 
var a=4,b=2;
console.log(Math.pow(a,b)); 
//Calculate Simple Interest 
var p, t, r, SI;
p = 15;
t = 12;
r = 12;
SI = (p * t * r) / 100;
console.log(SI); 
//Calculate area of an equilateral triangle 
const a = 5;
const equilateral_triangle_area = Math.sqrt(3) / 4 * (a * a);  
console.log(equilateral_triangle_area);  
//Area Of Isosceles Triangle 
var b=22;
var h=2;
var res=(b*h)/2;
console.log(res); 
//Volume Of Sphere 
var radius=2;
radius = Math.abs(radius);
var volume = (4/3) * Math.PI * Math.pow(radius, 3); 
console.log(volume); 
//Volume Of Prism 
var b=2;
var h=2;
console.log(b*h); 
// Find area of a triangle.
var b=22;
var h=2;
var res=(b*h)/2;
console.log(res); 
// Give the Actual cost and Sold cost, Calculate Discount Of Product 
var act=20;
var sell=30;
var dis=(act-sell)/act*100;
console.log(dis); 
//Given their radius of a circle and find its diameter, circumference and area. 
var r=2;
var d=2*r;
var a=Math.PI*r*r;
var c=2*Math.PI*r;
console.log(d,c,a); 
//Given two numbers and perform all arithmetic operations. 
var a=2,b=2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b); 
//Display the asterisk pattern as shown below(No loop needed):
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****"); 
//Task 3: Simple Programs todo for Condition , Looping and Arrays 
//Write a loop that makes seven calls to console.log to output the following triangle: 
var p = '';

for (var i = 0; i < 7; i++) {
    p = p + '#';
    console.log(p);
} 
//Iterate through the string array and print it contents 
var strArray= ["Jazz","Blues","New Age","Classical","Opera"]
for(var i=0;i<strArray.length;i++){
  console.log(strArray[i]);
}