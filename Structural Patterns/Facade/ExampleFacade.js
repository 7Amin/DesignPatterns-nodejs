
class IAccount {
    deposit(amount) {
        throw new Error('You have to implement the method doSomething!');
    };

    withdraw(amount) {
        throw new Error('You have to implement the method doSomething!');
    };

    transfer(to, amount) {
        throw new Error('You have to implement the method doSomething!');
    };

    getAccountNumber() {
        throw new Error('You have to implement the method doSomething!');
    };
};

class Chequing extends IAccount {
    constructor(initAmount) {
        this.initAmount = initAmount;
    }

    getAccountNumber() {
        if (!this.accountNumber)
            this.accountNumber = 10;
        return this.accountNumber;
    }
};

class Saving extends IAccount {
    constructor(initAmount) {
        this.initAmount = initAmount;
    }

    getAccountNumber() {
        if (!this.accountNumber)
            this.accountNumber = 100;
        return this.accountNumber;
    }
};

class Investment extends IAccount {
    constructor(initAmount) {
        this.initAmount = initAmount;
    }

    getAccountNumber() {
        if (!this.accountNumber)
            this.accountNumber = 1000;
        return this.accountNumber;
    }
};

class BankService {
    bankAccounts = {};

    static createNewAccount(type, initAmount) {
        let newAccount = new IAccount();
        if (type === 'chequing') {
            newAccount = new Chequing(initAmount);
        }
        else if (type === 'saving') {
            newAccount = new Saving(initAmount);
        }
        else if (type === 'investment') {
            newAccount = new Investment(initAmount);
        }
        else {
            throw new Error('Wrong Type!');
        }
        this.bankAccounts[newAccount.getAccountNumber()] = newAccount;

        return newAccount.getAccountNumber();
    }

    static transferMoney(to, from, amount) {
        toAccount = new IAccount();
        fromAccount = new IAccount();
        if (this.bankAccounts[to] === undefined || this.bankAccounts[from] === undefined){
            throw new Error('Can not Find Accounts');
        }

        toAccount = this.bankAccounts[to];
        fromAccount = this.bankAccounts[from];
        fromAccount.transfer(toAccount, amount);

    }
};

class Customer {

    constructor(saveMoney,  investMoney) {
        this.mySaving = BankService.createNewAccount('saving', saveMoney);
        this.myInvestment = BankService.createNewAccount('investment', investMoney);
    }
    doFunction (){
        BankService.transfer(this.mySaving, this.myInvestment, 100);
    }

};

