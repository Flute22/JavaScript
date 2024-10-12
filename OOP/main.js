function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    
    return this
}

const userOne = new User("Khushal", 22, true)
const userTwo = new User("Rahul", 1, false)
console.log(userOne)
console.log(userTwo)