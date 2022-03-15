const person = {
    name: "sushil"
    

};
const person1 = {
    ...person,
    age: 21

    

};
console.log(person1);

// Rest operator

const filter = (...args) => {
    return args.filter(el => el=== 1);
}
console.log(filter(1,2,3,4,5)); 






