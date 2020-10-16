"use strict";
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
var Adam = {
    name: 'Adam',
    gender: gender.male,
    hasMarry: false,
    childrenCount: 0,
    age: 17,
};
var Eve = {
    name: 'Eve',
    gender: gender.female,
    hasMarry: false,
    childrenCount: 0,
    age: 15,
};
var world = [Eve, Adam];
var TimeFlow = setInterval(function () {
    var random = function (ground) { return Math.floor(Math.random() * 100 + ground); };
    var pair;
    world.map(function (person) {
        person.age++;
        if (person.age > 18 && person.gender == gender.male) {
            console.log(person);
        }
    });
}, 1000);
