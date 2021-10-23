// Question 1
let question1: (string|boolean)[];
question1 = ["question 1", true];
console.log(question1)

// Question 2
let question2: [boolean, string, number];
question2 = [true, "This is a tuple!", 3];
console.log(question2);

// Question 3

function getFullName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

// Question 4

interface people {
  name: string;
  age: number;
  jobTitle?: string;
}
function generateWorker(Worker: people) {
}
generateWorker({ name: "bert", age: 35, jobTitle: "He works"})

// Question 5
enum Sallary {
  Paid,
  Unpaid,
  Unknown,
}

// Question 6
class Person {
  id: number;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  displayName() {
    return "My name is " + this.name;
  }
}

// Question 7

type strBol = string | boolean;
type numStr = number | string;
type Details = {id: numStr; status: strBol};

function getDetails(  
  name: strBol,  
  details: Details) 
  {
}
