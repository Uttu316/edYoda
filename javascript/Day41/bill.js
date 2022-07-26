function Bill() {
  this.money = 0;
  this.users = [];
  this.transactions = [];

  this.totalBalance = function () {
    console.log(this.money);
    return this.money;
  };
  this.getCurrentBalance = function (userId) {
    const user = this.users.find((i) => i.id === userId);
    if (user) {
      console.log(user.balance);
      return user.balance;
    } else {
      console.log("Enter valid user id");
      return 0;
    }
  };
  this.addUser = function (name, initialBalance) {
    const user = {
      name: name,
      balance: initialBalance,
      id: this.users.length + 1,
    };
    this.money += initialBalance;
    this.users.push(user);
    this.addTransaction(user.id, initialBalance, "credit");
    return user.id;
  };
  this.addTransaction = function (userId, balance, type) {
    const transact = {
      id: this.transactions.length + 1,
      userId: userId,
      balance: balance,
      type: type,
    };
    this.transactions.push(transact);
    return transact.id;
  };

  this.deposit = function (userId, balance) {
    const userIndex = this.users.findIndex((i) => i.id === userId);
    if (userIndex !== -1) {
      const user = this.users[userIndex];
      this.users[userIndex] = { ...user, balance: user.balance + balance };
      this.money += balance;

      this.addTransaction(userId, balance, "credit");
      return this.money;
    } else {
      console.log("Enter valid user ID");
      return -1;
    }
  };
}

const manali = new Bill();

manali.addUser("Utkarsh", 1000);
manali.addUser("Anil", 2000);
manali.addUser("Manohar", 10000);

// manali.getCurrentBalance(1)

// manali.totalBalance()

manali.deposit(2, 5000);

console.log(manali);
