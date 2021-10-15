class BankAccount {
    constructor(balance = 0, intRate = 0.01) {
        this.balance = balance
        this.intRate = intRate
    }

    deposit (amount) {
        this.balance += amount
        return this
    }

    withdrawal (amount) {
        this.balance >= amount
        ? this.balance -=amount 
        : (this.balance -= 5) + console.log('insufficient funds charging 5 bucks')
        return this
    }

    displayAccountInfo() {
        console.log("Here is your account balance ", this.balance)
        return this
    }

    yieldInterest() {
        this.balance > 0 && (this.balance += this.balance * this.intRate)
        const totalYield = this.balance * this.intRate
        console.log('total interest yielded is ', totalYield)
        return this
    }
}

const ab = new BankAccount()
ab.deposit(100).deposit(700).deposit(653).withdrawal(80).yieldInterest().displayAccountInfo()

const cd = new BankAccount()
cd.deposit(300).deposit(900).withdrawal(600).withdrawal(330).withdrawal(760).withdrawal(378).yieldInterest().displayAccountInfo()