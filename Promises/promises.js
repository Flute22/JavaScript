const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async task is complete")
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise consumed")
})



new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async Task 2")
        resolve()
    },1000)
}).then(function() {
    console.log("Async 2 resolve")
})



const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Chai", email: "chai@chaiaurcode.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})



const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username: "Khushal", password: "123"})
        }else {
            reject("Error: Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username: "JS", fullname: "JavaScript"})
        }else {
            reject("Error: JS went wrong!")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data  = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))