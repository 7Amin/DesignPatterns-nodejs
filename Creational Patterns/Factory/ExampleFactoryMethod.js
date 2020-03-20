const AbstractClass = require("abstract-class-js");

class KnifeFactory {
    createKnife(knifeType) {
        let knife;
        if (knifeType === 'steak') {
            knife = new SteakKnife();
        }
        else if (knifeType === 'chefs') {
            knife = new ChefsKnife();
        }
        else if (knifeType === 'bread') {
            knife = new BreadKnife();
        }
        else if (knifeType === 'paring') {
            knife = new ParingKnife();
        }

        return knife;
    }
};

class KnifeStore extends AbstractClass {
    orderKnife (knifeType) {
        const knife = this.createKnife(knifeType);

        knife.sharpen();
        knife.polish();
        knife.package();

        return knife;
    }
    createKnife(knifeType) {
        throw new Error('You have to implement the method doSomething!');
    }

};