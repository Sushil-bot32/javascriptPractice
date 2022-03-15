var names = ["Hole-in-one!", "Eagle", "Brindie", "par", "Bogey","Double Bogey", "Go Home"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];

    } else if (strokes <= par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par+1) {
        return names[4];
    } else if (strokes == pa+2) {
        return names[5];
    } else if (strokes == par-1) {
        return names[6];
    }
    return "choose Me";
}
console.log(golfScore(5,4));

// use of switch case statement

function caseInSwitch(val) {
    answer = "";
    switch(val) {
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gama";
            break;
        case 4:
            anser = "Delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(2));

// return boolean values(true/false):

function isLessThan(a, b) {
    return a <= b;
}
console.log(isLessThan(5,3))

//counting cards:

function cc(cards) {
    var count = 0;
    switch(cards) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'k':
        case 'Q':
        case 'j':
        case 'A':
            count--;
            break;
    }
    var holdbet = 'Hold';
    if(count > 0) {
        holdbet = 'Bet'
    }
    return count + " " + holdbet;

}
cc(2); cc('k'); cc(10); cc('k'); cc('A');
console.log(cc(5));

// creating objectoperation;
testObj = {
    "color": "black",
    "food": "Apple",
    "the drink": "Water"
};
testObj.color = "Red";      // updating object properties
var colorValue = testObj.color;
var foodValue = testObj.food;
var theDrink = testObj['the drink'];

console.log(colorValue);
console.log(theDrink);
// 
/*function checkObj(checkProp) {
    if(testObj.hasOwnProperty(checkProp)) {
        return testObj[checkProp];
    }
    else {
        return "Not found";
    }
    }
console.log(testObj("color"));
*/
// negative looping

var ourArray = [];
for(var i = 10;i>0; i -= 2) {
    ourArray.push(i);
}
console.log(ourArray);








