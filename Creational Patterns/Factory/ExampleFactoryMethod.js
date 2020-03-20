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

class KnifeStore {
    constructor(knifeFactory) {
        this.knifeFactory = KnifeFactory;
    }
    orderKnife (knifeType) {
        const knife = this.knifeFactory.createKnife(knifeType);

        knife.sharpen();
        knife.polish();
        knife.package();

        return knife;
    }
};