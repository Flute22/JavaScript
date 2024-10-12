// Object Literals


// --> Creating Symbol
let mySym = Symbol("Key1")


let user = {
    name: "Khushal",
    [mySym]: "mykey1",
    age: 20,
    address: "India",
    email: "khushal@google.com",
    isLoggedIn: false, 
    skills: ["HTML", "CSS", "JavaScript", "Python"]
}

// console.log(user);

// There are two way two access the data from object literals 

// --> First way: 
// console.log(user.name);
// console.log(user.skills);

// --> Second way: (This is good way)
// console.log(user["name"]);
// console.log(user["skills"]);
// console.log(user[mySym]);


// Here we do some changes in object values
user.email = "khushal@chatgpt"
Object.freeze(user)
user.email = "khushal123@chatgpt.com"
// console.log(user);


let obj1 = {1: 'a', 2: 'b'}
let obj2 = {3: 'a', 4: 'b'}
 
// let obj3 = Object.assign({}, obj1, obj2)
let obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(user)) 
// console.log(Object.values(user))
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty("age"));


// console.log(...Object.keys(user), ...Object.values(user));




// ---> De-structure
let course = {
    courseName: "JS Bootcamp",
    price: 1000,
    courseInstructor: "Khushal"
}

let {courseInstructor} = course

// Here we can also the name like: 
let {courseInstructor: teacher} = course

console.log(courseInstructor);
console.log(teacher);

