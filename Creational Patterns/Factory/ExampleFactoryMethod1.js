const AbstractClass = require("abstract-class-js");

class KnifeStore extends AbstractClass {
    orderKnife (knifeType) {
        const knife = this.createKnife(knifeType);

        knife.sharpen();
        knife.polish();
        knife.package();

        return knife;
    }
    createKnife(knifeType) { // factory method
        throw new Error('You have to implement the method doSomething!');
    }

};

class BudgetKnifeStore extends KnifeStore {
    createKnife(knifeType) {
        if (knifeType === 'steak') {
            knife = new BudgetSteakKnife();
        }
        else if (knifeType === 'chefs') {
            knife = new BudgetChefsKnife();
        }
        else if (knifeType === 'bread') {
            knife = new BudgetBreadKnife();
        }
        else if (knifeType === 'paring') {
            knife = new BudgetParingKnife();
        }
    }
}


class BudgetSteakKnife extends Knife {

}

class Knife {

}