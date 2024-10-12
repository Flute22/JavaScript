let user = {
    username: "Flute",
    age: 20,
    rollNo: 21,

    welcome: function() {
        console.log(`${this.username}, welcome to website.`);
        // console.log(this);
        
    }
}

// user.welcome()
// user.username = "Khushal"
// user.welcome()



// ---> Arow function 
// Arow function is a type of function that is defined with the keyword '=>' and is used to define small functions. It is a shorthand for a function expression. It is used to define functions that take one argument. It is used to define functions that return a value. It is used to define functions that are used as arguments to higher-order functions.

// Here are the some ways to write arrow function
let sum = (num1, num2) => {
    return num1 + num2
}

console.log(sum(21, 22))


let add = (num1, num2) => num1 + num2
console.log(add(21, 22))


let addition = (num1, num2) => (num1 + num2)
console.log(addition(21, 22))