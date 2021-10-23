// Question 1
var question1;
question1 = ["question 1", true];
console.log(question1);
// Question 2
var question2;
question2 = [true, "This is a tuple!", 3];
console.log(question2);
// Question 3
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
function generateWorker(Worker) {
}
generateWorker({ name: "bert", age: 35, jobTitle: "He works" });
// Question 5
var Sallary;
(function (Sallary) {
    Sallary[Sallary["Paid"] = 0] = "Paid";
    Sallary[Sallary["Unpaid"] = 1] = "Unpaid";
    Sallary[Sallary["Unknown"] = 2] = "Unknown";
})(Sallary || (Sallary = {}));
// Question 6
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.displayName = function () {
        return "My name is " + this.name;
    };
    return Person;
}());
function getDetails(name, details) {
}
