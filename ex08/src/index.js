// Lodash
const _ = require('lodash');
// Only change code below this line
// users nested array with four objects starts here

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
]

// users nested array with four objects ends here
// getUsers function - list of users starts here

function getUsers(){
    var output ="";
    for (i = 0; i < users.length; i++){
        output = users[i];
        console.log(output);
    }
    return output;
}

// getUsers function - list of users ends here

// findUser(lastName, gender) function starts here
function findUser(lastName, gender){
    try {
        var user = _.first(characters, "lastName");
        var iFindUser = "${firstName} ${lastName} is ${age}, ${gender}"
        return iFindUser;
    }
    catch (error){
        console.log("Cannot read property 'firstName' of undefined"); // change this line
        return "Cannot read property 'firstName' of undefined";
    }
}

// findUser(lastName, gender) function ends here
// Only change code above this line
getUsers();
findUser("Doe", "male"); // Change this line

module.exports = findUser;