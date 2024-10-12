const balance = 1000
if (balance > 500) console.log("✌️");

// ---> falsy values 
// falsy values are values that are considered false in a boolean context
// false, 0, -0, BigInt 0n, "", null, undefined, and NaN. 

// ---> truthy values
// all the values which are not falsy values are truthy values but here are some important one's give below: 
// "0", "false", " ", [], {}, and funtion(){}


// Detect object is empty or not
const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty.");
}

console.log("Hello");


/*
---> Some interview questions 
1. false == 0 output is true
2. false == "" output is true
3. 0 == "" output is true
*/


// ---> Nullish (null) Coalescing Operator (??)
// The nullish coalescing operator (??) is a new operator in JavaScript that returns the  first operand if it is not null or undefined; otherwise, it returns the second operand. It is similar to the OR operator (||), but it only returns the second operand if the first operand is null or undefined.

let val1; 
let a;

val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = a ?? 10

console.log(val1);



// ---> Terniary Operator
// condition ?  value_if_true : value_if_false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


