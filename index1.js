var sushil = "Ada"
firstLetterOfFirstName = sushil[1]
console.log(firstLetterOfFirstName)

// string immutability

var firstName = "sushil hello"

var firstName = "umesh hello"

console.log(firstName)

// Applying function:

function fun1(adj, verb, Noun, Preposition){
    var result = "The" +" " + adj +" " + verb + " "+ Noun + " " + Preposition + "in my legs";
    return result;

}

console.log(fun1("dog", "big", "He","literal"));

// Acessing data in array

var ourData = [45, 56, 67, 78];
ourData[2] = 84;    // Modifying the data in an array  
ourData[0] = 53;
console.log(ourData[0])
console.log(ourData[1])
console.log(ourData[2])

// Acessing multiple data in multidimensional array

var array2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[3,4,5], 67, 23]]
console.log(array2[3][1]);

var array3 = [1,2,3];
var addingElement = array3.push([4,5,6]);   // Push Function
console.log(array3)
var DeletingElement = array3.pop()          // Pop Function
console.log(array3)

// use of shift/unshift function

var array4 = [["java","Python"],["mySql", "NoSQL"]]
var shifting = array4.shift();      // shifting Function
console.log(array4)
var unshift = array4.unshift(["computerNetwork", "DataStructure"])
console.log(array4)

// InLine Function

function nextInline(arr, item) {

    arr.push(item);

    return(arr.shift());
}

var testArr = [1,2,3,4,5];

console.log("Before:" +JSON.stringify(testArr));
console.log(nextInline(testArr,6));
console.log("After:" +JSON.stringify(testArr));

// Boolean return values

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue) {
     return "yes, that is absolutely true";

    }
    return "No, that is no true";

}
console.log(trueOrFalse(true));

// Strict Equality Operator

function strictEquality(val) {
    if(val === 10)
    {
        return "Equal";

    }
    return "Not Equal";
}
console.log(strictEquality(10));

function nestedIf(val) {
    if(val < 10 && val > 0) {
        return " it is valid item";

    }
    return "it is not valid item";
}

console.log(nestedIf(5));

function testLogicalOr(val) {
    if(val < 10 ) {
        return " it is inside";

    }
    if(val > 10)
    return "it is outside";
}

console.log(testLogicalOr(5));
