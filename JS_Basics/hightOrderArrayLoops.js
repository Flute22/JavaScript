const arr = [4, 21, 22, 43, 47]

// this is the shorthand to iterate an array
// arr.forEach((val) => console.log(val));


for (const num of arr) {
    // console.log(num);
}


const obj = {
    name: "Khushal",
    age: 20,
    rollNo: 22
}

for (const key in obj) {
    // console.log(key, obj[key])    
}


// Map 
const map = new Map()
map.set('name', 'Khushal')
map.set('age', 20)
map.set('rollNO', 22)
map.set('In', 'India')
map.set('In', 'India')
map.set('AE', 'Dubai')

// console.log(map);

for (const key of map) {
    // console.log(key);    
}

for (const [key, value] of map) {
    // console.log(key, ':', value);    
}



// ---> for in loop on array
for (const index in arr) {
    // console.log(index);
}

for (const index in arr) {
    // console.log(arr[index]);
}