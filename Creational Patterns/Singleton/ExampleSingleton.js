class ExampleSingleton {
    uniqueInstance;
    constructor() {
        this.id = 1;
    }

    static getInstance() {
        if (this.uniqueInstance === undefined)
            this.uniqueInstance = new ExampleSingleton();
        return this.uniqueInstance;
    }
}

export default {
    ExampleSingleton
};