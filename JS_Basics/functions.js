function saymyname() {
    // console.log("Khushal Sinhmar");
}

function add(num1, num2) {
    console.log(num1 + num2);
}

// add(21, 22)

function sum(num1, num2) {
    let addition = num1 + num2
    return addition
}

let result = sum(21, 22)
// console.log(`Result: ${result}`); 


// ---> Functions with object and array
function calculateCartPrice(...num) {
    return num
}

// console.log(calculateCartPrice(4, 21, 22, 43, 47));


let user = {
    name: "Flute",
    age: 20, 
    rollNo: 21,
    degree: "BCA", 
}

function handleObject(anyobject) {
    console.log(`User name is: ${anyobject.name}, Age is: ${anyobject.age} and Roll Number: ${anyobject.rollNo}`);
}

// handleObject(user)


// ----> Immediately Invoked Function Expressions (IIFE)
(function chai() {
    console.log("Hello, IIFE");
})();


( () => {
    console.log("DB CONNECTED");
}) ()


