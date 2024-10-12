// Filter map and reduce in javascript

const coding = ['JavaScript', 'Python', 'HTML', 'CSS', 'Java', 'C']
// coding.forEach((items) => {console.log(items);})


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// There is some way to use filter
// --> First way: 

// const num = numbers.filter((nums) => nums < 5)


// --> Second way: 
const num = numbers.filter((nums) => {
    return nums < 5
})
// console.log(num);



// ---> Map function 
const newNumbers = numbers.map((number) => number + 10)
console.log(newNumbers);