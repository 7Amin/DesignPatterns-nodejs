# abstract-js

Abstract class enforcement in JS

## Getting Started

Simply import the module as a class. To create an abstract class, use the imported module as its superclass.


```javascript
const AbstractClass = require("abstract-class-js");

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
    }
}
```

To add 'required' implementations, simply construct the class with an arugment after the class name itself.


```javascript

class Parent extends AbstractClass {

    constructor() {
        super(Parent, ["required", "methods", "go", "here"]);
    }

}
```

This library also provides a convinience method called ``super()`` for all ``Object`` types. This allows you to check if a class belongs to an abstract class.

## Errors

An attempt to initiate an abstract class will result an error.
```
Error: Abstract class Parent cannot be cannot be instantiated without a subclass implementation.
```


An incomplete implementation of a class will result an error as well.
```
Error: Classes extending abstract class Parent must implement test
```
