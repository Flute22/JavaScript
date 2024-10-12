// Write a function to swap two numbers.
// function swapTwoNumber(num1, num2) {
//     let num3
//     num3 = num1
//     num1 = num2
//     num2 = num3
//     console.log(num1, num2)
// }


function swapTwoNumber(num1, num2) {
    [num1, num2] = [num2, num1]
    return `${num1}, ${num2}`
}

// console.log(swapTwoNumber(3, 4))



// ------------------------------------------------ Que2 ----------------------------------------



// Write a function to convert Celsius to Fahrenheit.
function celsiusToFarenheit(c) {
    return (c * 9/5) + 32
}

// console.log(celsiusToFarenheit(32));



// ------------------------------------------------ Que3 ----------------------------------------



// Write a function to calculate the area of a rectangle.
function areaOfrectangle(length, width) {
    return length * width
}

// console.log(areaOfrectangle(3, 4))



// ------------------------------------------------ Que4 ----------------------------------------



// Write a function to check if a number is positive, negative, or zero.
function checkNumber(num) {
    if(num > 0) {
        return `${num} is a positive number.`
    }else if (num < 0) {
        return `${num} is a negative number.`
    }else {
        return "This number is zero."
    }
}

// console.log(checkNumber(-12));



// ------------------------------------------------ Que5 ----------------------------------------



// Write a function to compute the sum of all digits in a number.
function sumOfDigits(number) {
    let num = 0
    while(number > 0){
        num += number%10
        number = Math.floor(number/10)
    }
    return num
}

// console.log(sumOfDigits(666));



// ------------------------------------------------ Que6 ----------------------------------------



// Write a function to check if a number is prime.
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
function isPrime(num) {
    if (num < 2) {
        return "Please type number greater or equal to 2"
    }

    for(let i=2; i < num; i++) {
        if (num % i === 0) {
            return `${num} is not a Prime number.`
        }
    }
    return `${num} is a Prime number.`
}

// console.log(isPrime(7))



// ------------------------------------------------ Que7 ----------------------------------------



// Write a function to find the largest of three numbers.
function findLargestNum(num1, num2, num3) {

    if(num1 > num2 && num1 > num3) {
        return `${num1} is greater.`
    }else if (num2 > num3) {
        return `${num2} is greater.`
    }else {
        return `${num3} is greater.`
    }
}

// console.log(findLargestNum(9, 6, 13))



// ------------------------------------------------ Que8 ----------------------------------------



// Write a function that returns the factorial of a number.
function calcfactorial(num) {
    let fact = 1;
    for(let i = num; i > 0; i--) {
        fact *= i;
    }
    return fact;
}

// console.log(calcfactorial(10));



// ------------------------------------------------ Que9 ----------------------------------------



// Write a function to check if a number is divisible by 3 or 5.
function isDivisible(num) {
    if (num % 3 === 0 || num % 5 === 0) {
        return `${num} is divisible by 3 or 5`
    }else {
        return `${num} is not divisible by 3 or 5`
    }
}

// console.log(isDivisible(662))



// ------------------------------------------------ Que10 ----------------------------------------



// Write a function that takes a string and returns its length.
function lengthOfString(str) {
    // str = Array.from(str)
    // let len;
    // for(let char in str) {
    //     len = Number(char)
    // }
    // return len+1

    console.log([...str].reduce(a => a+1, 0))
}

// lengthOfString("Khushal Sinhmar");



// ------------------------------------------------ Que11 ----------------------------------------



// Write a function to reverse a string.
function reverseStr(str) {
    // let newStr = []
    // for (const char of [...str]) {
    //     newStr.unshift(char)
    // }
    // return String(newStr)


    // let newStr = ""
    // for(let i = str.length-1; i >= 0; i--) {
    //     newStr += str[i]
    // }
    // return newStr


    let newStr1 = str.split("").reverse().join()
    return newStr1
    
}

// console.log(reverseStr("Hello World!"));



// ------------------------------------------------ Que12 ----------------------------------------



// Write a function to count the number of vowels in a string.
function vowelsInString(str) {
    let count = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (const char of str.toLowerCase()) {
        // vowels.forEach(e => {if(char == e) count ++})   
        if(vowels.includes(char)){count++}     
    }
    return count
}
// console.log(vowelsInString("Khushal Sinhmar"));



// ------------------------------------------------ Que13 ----------------------------------------



// Write a function to check if a string is a palindrome.
function isPalindrome(str) {
    let clearStr = str.toLowerCase().replace(/[^a-z0-9]/g, "")

    let reverseStr = clearStr.split("").reverse().join("")
    
    if(clearStr == reverseStr) {
        return `${str} is a PALINDROME.`
    }else {
        return `${str} is not a Palindrome.`
    }
}

// console.log(isPalindrome("A man, a plan, a canal, Panama"))



// ------------------------------------------------ Que14 ----------------------------------------



// Write a function to find the most frequent character in a string.
function frequentChar(str) {
       
}

console.log(frequentChar("Hello"))
