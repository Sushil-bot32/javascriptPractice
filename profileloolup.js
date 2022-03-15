var contacts = [
    {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "codding", "Brownie Points"]
    },
    {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["hogwarts", "Magic", "Hagrid"]

    },
    {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing cases", "violin"]

    },
    {
    "firstName": "Kristina",
    "lastName": "yadav",
    "number": "unknown",
    "likes": ["Javascript", "Gaming", "Foxes"]

   }
];
 function lookUpProfile(name, prop) {
     for(var i = 0; i < contacts.length; i++) {
         if(contacts[i].firstName === name) {
            return contacts[i][prop]  || "No such property found";
        }
    }
 return "No such contact";
 }

 var data = lookUpProfile("Harry", "likes");
 console.log(data);




