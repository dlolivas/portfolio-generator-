// If you ever need to keep a sentence or multiple words together , we need to wrap them in quotes so that they stay together in process.argv
//var commandLineArgs = process.argv;// process is a global object that represents everything going on with a particular app. It is a gigantic obj holding data providing context to where the app was executed.
                                   // the argv is an array that holds exactly what was typed into the command line upon execution so that we can capture that data and use it in the app. 
//console.log(commandLineArgs);
// const stands for constant it is a new feature in JS that allows us to create variables that can't be reassigned a value( we can never reassign it)unless they are in a aquare or curly brace brakets because js has no idea what is happening between the brackets. For arrays and obj the content can be altered for strings and numbers the content cant be altered 
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = (profileDataArr) => {
    for ( let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);

    }
    
    console.log('================');

    // is the same as this
    //.foreach() is a newer type of method that accepts a function as an argument and executes that function on each element of the array, using the value of the element ar that iteration as its arguments.
    //the .foreach() is exactly the same thing as using for loop to iterate through an array, and using arrayName[i] syntax to access the array at that iteration, its just alot cleaner and meant specifically for arrays
    profileDataArr.forEach((profileItem) => console.log(profileItem));
};
// the let keyword behaves more like the var in the sense that we can reassign values with it 
//let and const are blocked-scoped variables and that is why we use them instead of var and const 
printProfileData(profileDataArgs);