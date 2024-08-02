/*
  Activity 5: Private Fields (Optional) :-
      Task 9: Define a class 'Account' with private fields for 'balance' and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
      Task 10: Create an instance of the 'Account' class and test the deposit and withdraw methods, logging the balance after each operation.
*/

class Account {
  #balance;
  constructor(initialMoney) {
    this.#balance = initialMoney;
  }

  deposit(money) {
    if(money>0) {
      this.#balance += money;
      console.log(`${this.#balance} money deposited`);
    } else {
      console.log(`cant deposit the money`);
    }
  }
  withdraw(money) {
    if(this.#balance >= money) {
      this.#balance -= money;
      console.log(`${money} money withdrawed`);
    } else {
      console.log(`cant withdraw the money money is grater then the balance`);
    }
  }
  display() {
    return this.#balance;
  }
}

const obj = new Account(0);
console.log(`balance = ${obj.display()}`);
obj.deposit(200);
console.log(`balance = ${obj.display()}`);
obj.deposit(500);
console.log(`balance = ${obj.display()}`);
obj.deposit(1000);
console.log(`balance = ${obj.display()}`);
obj.withdraw(550);
console.log(`balance = ${obj.display()}`);