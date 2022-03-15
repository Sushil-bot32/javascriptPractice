const numbers = [1,2,3,4];
[num1,num2] = numbers;
console.log(num1,num2);

const person = {
    name: "mona",
    age: 21
};
console.log(person.name)
console.log(person.age)

// primitive and refrence types

const newNumbers = [1, 2, 3, 4];
const newNumbers1 = newNumbers;
console.log(newNumbers1);

// object refrence types

const person1 = {
    name: "suraksha",
    age: 22
};
const person2 = {
    ...person1,
    gender: 'M'
};
person2.name = "surakshaPokhrel";
console.log(person2);

const person3 = person1;        
person3.name = "surakshaSingh";     // overriding the name in person1.
console.log(person3);
