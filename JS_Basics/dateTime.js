// ---> Date and Time
let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// // console.log(myDate.toISOString());
// // console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

let createDate = new Date(2024, 7, 9)
// console.log(createDate.toDateString());

let createDate2 = new Date(2024, 6, 9, 1, 41)
// console.log(createDate2.toLocaleString());

let createDate3 = new Date("07, 9, 2024")
// console.log(createDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(createDate2.getTime());

console.log(myDate.getDate() + 1)
console.log(myDate.getMonth())
console.log(myDate.getDay())
