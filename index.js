console.log ("This worked");
// new string combining by two strings
// use + 

// Let
// if use same name, protection from shadowing, cannot have multiple copy for storage name
// working with existing storage for "myInstrument"


// Use parseInt()
// [1] A string to convert into a number
// [2] Convert a strings into an integer

let a = "10"; //string
let b = parseInt(a); //number
console.log (a);
console.log(Number(a));

let c = 4;



// Comparison Operators
// == === !=

4 == 4; // true
"a" == "a"; // true
5 == "5"; // true - because of type coercion

5 === 5; //true
"b" === "b"; // true
27 === "27"; //false

if (4 === 4){
    console.log("Math's seems to be working");
}

let myName = "Wolf";
if(myName === "Wolf"){
    console.log ("You're a Teacher");
}else{
    console.log("You're a Student");
}

const loggedIn = false;
if (loggedIn === true){
    console.log ("You can visit this site");
}else {
    console.log ("You will have to login first");
}



let myName2 = "Nurul";

if(myName2 === "Wolf"){
    console.log ("You're a Teacher");
}else if (myName2 === "Izzue"){
    console.log ("You're a Teaching Assistant");
}else if (myName2 === "Nicholas"){
    console.log("You're a Teaching Assistant");
}else{
    console.log("You're a Student");
}

// LOGICAL OPERATORS
// && - AND 

let validCreditCardDetails = true;
let balance = 120;
let itemCost = 45;

//ValidCreditCardDetails must be true
// AND
// balance must be over or equal to the itemCost

let canPurchase = validCreditCardDetails === true && balance >= itemCost;
// the process - let canPurchase = true === true && balance >= itemCost;

if (canPurchase){
    console.log("You can purchase this item!");
}else{
    console.log ("You can't buy this!");
}

// PSEUDOCODE
// IF

let correctEmail = true;
let correctPassword = true;

if (correctEmail && correctPassword){
    console.log ("You are logged in now");
}else{
    console.log ("Your email or password was incorrect");
}


if (correctEmail === true && correctPassword === true){
    console.log ("You are logged in now");
}else{
    console.log ("Your email or password was incorrect");
}

// || OR OPERATOR

let lang = "HTML";

let isFrontEnd = lang === "HTML" || lang === "CSS" || lang === "JS";
// let isFrontEnd = true || lang === "CSS" || lang === "JS";
// let isFrontEnd = true || false || lang === "JS";
// let isFrontEnd = true || false || true;


if (isFrontEnd){
    console.log ("You are talking about front-end language");
}else {
    console.log ("You are talking about back-end language");
}


let myName3 = "Wong";

if(myName3 === "Wolf"){
    console.log ("You're a Teacher");
}else if (myName3 === "Izzue" || myName3 === "Nicholas"){
    console.log ("You're a Teaching Assistant");
}else{
    console.log("You're a Student");
}

// ! NOT
let hasAccount = true;

if (!hasAccount){ // the opposite of true
    console.log ("You can create an account")
}else{
    console.log ("You already has an account");
}

// !! "string" - true
