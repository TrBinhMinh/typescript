"use strict";
var add = function (n1, n2) { return n1 + n2; };
var Person = (function () {
    function Person(n) {
        this.age = 26;
        if (n)
            this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        if (this.name)
            console.log(phrase + " " + this.name);
        else
            console.log("Hi!");
    };
    return Person;
}());
var user1 = new Person();
user1.greet("Hello the notorious");
//# sourceMappingURL=app.js.map