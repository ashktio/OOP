class User {
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }

    makeDeposit(amount) {
        this.accountBalance += amount

        return this;
    }
    makeWithdrawal(amount) {
        this.accountBalance >= amount? this.accountBalance -= amount : this.accountBalance -= amount +5

        return this;
    }

    displayBalance(){
        return this.name + ' has a remaining balance of ' + this.accountBalance + '.';
    }
}

const guido = new User('Guido Van Rossum', 'guido@python.com')
guido.makeDeposit(500).makeDeposit(700).makeDeposit(980).makeWithdrawal(630)
const kitty = new User('Kitty Katty', 'kitty@meow.com')
kitty.makeDeposit(4590).makeDeposit(342).makeWithdrawal(680).makeWithdrawal(152.68)
const brokey = new User('Brokey Broke', 'brokey@broke.com')
brokey.makeDeposit(428.63).makeWithdrawal(80).makeWithdrawal(368).makeWithdrawal(112.58)
console.log(guido.displayBalance())
console.log(kitty.displayBalance())
console.log(brokey.displayBalance())

const Transfer = (user1, user2, amount) => {
    user1.accountBalance -= amount
    user2.accountBalance += amount
    return (
        console.log(user1.name, ' transferred ', amount, 'to', user2.name,'.',  `${user1.displayBalance()} ${user2.displayBalance()}`)
    )
}
Transfer(guido, brokey, 1000)
