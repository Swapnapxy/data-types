function change(){
let name="Swapna";
let nam="Represents a sequence of characters, enclosed in single or double quotes.";
console.log(name);
    document.getElementById("string").textContent=name;
    document.getElementById("string1").textContent=nam;
}
function change6(){
    

let number=1234;
    let num="Represents both integer and floating-point numbers.";
    console.log(number);
    document.getElementById("number").textContent=number;
    document.getElementById("number1").textContent=num;
    }
function change1(){
let myBoolean=true;
    let bool="Represents a true or false value.";
console.log(myBoolean);
    document.getElementById("boolean").textContent=myBoolean;
    document.getElementById("boolean1").textContent=bool;
}
function change2(){
const myNull=null;
console.log(myNull??"Represents an intentional absence of any value");
    document.getElementById("null").textContent=myNull??"Represents an intentional absence of any value";
    
}
function change3(){
let myundefiedVariable;
console.log(myundefiedVariable===undefined?"Represents a variable that has been declared but hasn't been assigned a value yet":myundefiedVariable);
    document.getElementById("undefined").textContent=myundefiedVariable===undefined?"Represents a variable that has been declared but hasn't been assigned a value yet":myundefiedVariable;
}
function change4(){
    var obj="Represents a collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects.";
var info={
    name:'swapna',
    number:'1234',
    proffesion:'developer'
    
};

console.log(info.proffesion);
    document.getElementById("object").textContent=info.proffesion;
     document.getElementById("object1").textContent=obj;
}
function change5(){
var arr="Represents an ordered list of values, which can be of different data types.";
let myArray=["pinky","chinnary","laddu"];
console.log(myArray[2]);
    document.getElementById("array").textContent=myArray;
    document.getElementById("array1").textContent=arr;
    
    }
function change7(){
    var fun="In JavaScript, functions are also objects, allowing you to store and pass around executable code.";
    document.getElementById("function").textContent=fun;
}
    
