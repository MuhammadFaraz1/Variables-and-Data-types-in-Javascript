// To create pop-up window:
 alert("Welcome to my website!");

// To create message in a console window with the help of "log".
 console.log("Muhammad faraz!");

// Variables in JS:
// Variables are containers to store some values in a variable:

my_Name="Muhammad Faraz"; //String value
my_Age=21;//Number value
nationality_Muslims=true;//Boolean Value
ill_LegalAction=null;//Null value
Job=undefined;//Undefined value

// Rules for Variables;

// 1)Case sensitive
// 2)only Numbers,letters,hyphen(_)and dollars AbortSignal($) are allowed.
// 3)First character should be (_),$and letter.
// 4)Reserved words are also not allowed.
// e.g: myname,my_name,_myname,$myname. this are legal name.
// e.g: 123myname, myname,my name,myname@ . this are illegal name.

// Cases of variables:

// myName(Camel case)This case will be used in tech industries.
// my-name(snake case)
// my_name(kabab case)
// MyName(Pascal case)

// var,let and const with the help of these we can assign variables because this is the right ways to declared variables.

var age=19;//Variables can  redeclared and update.Global scope variable.
var age=21;
console.log(age);//output is 21

let myName="Muhammad Faraz";//Variables can not redeclared but can update.Block scope variable
let myName="Anus";
console.log(myName);//output=(Syntax Error) Identifier myName is already declared.

let firstName="Muhammad Faraz";
firstName="Anus";
console.log(myName);//output is Anus

const age=21;// Variables can not redeclared and update.Block scope variable.
console.log(age);// o/p 21

//  block scope (it is a collection of key values)e.g.

object={
    name:"Faraz",
    sex:"male",
    age:21
}

// Data types in Variables:

// Number,sting,boolean,null,undefined,bigInt and symbol. these are primitive datatype and it is seven.
// e.g.

let name="faraz";
console.log(name);
console.log(typeof name);// o/p=faraz;String

let a=BigInt("123");
console.log(a);
console.log(typeof a);// o/p=123n ;bigint

let b=Symbol("Areeb");
console.log(b);
console.log(typeof b);//symbol(Areeb);symbol

// Non-Primitive Datatype;

// Object(it is a collection of key values)(function,arrays);

const object={
    Name:"Faraz",
    Sec:"B",
    rollNo:20037,
    isPass:true
}
object["rollNo"]=object["rollNo"]+3
object.Name="Anus"
console.log(object);
console.log(object.Sec);
console.log(typeof(object));
console.log(typeof(object.Name));

// TASK (1);
//Q1 Create a const object called "product" to store information shown in the picture.
const product={
    Name:"Ball-pen",
    Rating:4,
    Price:270,
    isDeal:true
}
console.log(product);

// Small project(2);
// Q2 Create a const object called "profile" to store information shown in the picture.
const profile={
    Name:"Shrada Khapra",
    posts:195,
    followers:569000,
    following:4,
    isFollow:true
}
console.log(profile);
