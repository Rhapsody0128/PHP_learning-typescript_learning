"use strict";
var SinglotonPerson = /** @class */ (function () {
    function SinglotonPerson(name, age, haspet) {
        this.name = name;
        this.age = age;
        this.haspet = haspet;
    }
    SinglotonPerson.getInstance = function () { return this.Instance; };
    SinglotonPerson.Instance = new SinglotonPerson('Gary', 20, false);
    return SinglotonPerson;
}());
var person = SinglotonPerson.getInstance();
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.haspet);
var SingletonC = /** @class */ (function () {
    function SingletonC() {
    }
    SingletonC.getInstance = function () { return this.Instance; };
    SingletonC.Instance = new SingletonC();
    return SingletonC;
}());
var LazySingletonPerson = /** @class */ (function () {
    function LazySingletonPerson(name, age, haspet) {
        this.name = name;
        this.age = age;
        this.haspet = haspet;
    }
    LazySingletonPerson.getInstance = function () {
        if (this.Instance === null) {
            this.Instance = new LazySingletonPerson('gary', 20, false);
        }
        return this.Instance;
    };
    LazySingletonPerson.Instance = null;
    return LazySingletonPerson;
}());
console.log(LazySingletonPerson.getInstance());
