// ---> Array
let arr = [1, 2, 3, 4]
// console.log(arr);

let myArr = new Array(4, 19, 20, 21, 22, 43, 47, 34, 34 , 23, 3, 6, 7, 2)
// console.log(myArr);

let marvel_heros = ["Thor", "Ironman", "Spiderman"]
let dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heors);

// let new_arr = marvel_heros.concat(dc_heros)
// console.log(new_arr);

// ---> This is the better way to merge two strings
let all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);


// ---> This is the best way to deal with this type of array
let another_arr = [1, 2, 3, 4, [5, 6, 7, [4, 5]]]
let real_another_arr = another_arr.flat(Infinity)
// console.log(real_another_arr);
>

console.log(Array.isArray("Khushal"));
console.log(Array.from("Khushal Sinhmar"));

let score1 = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score1, score2, score3));