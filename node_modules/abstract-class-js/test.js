
const AbstractClass = require("./abstract.js");

class Parent extends AbstractClass {

    constructor() {
        super(Parent, ["test"]);
    }

}

class Child extends Parent {
    constructor(){
        super();
    }
    test(){
        console.log("Hello, World!");
        console.log(`My superclass is: ${this.super()}`);
    }
}

var c = new Child();
c.test();
