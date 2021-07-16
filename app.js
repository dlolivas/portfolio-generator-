const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
    
    // const pageHTML = generatePage(portfolioData);
    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);
    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });
  });



//console.log(inquirer)// to verify that inquirer has been successfully imported into the script



//const pageHTML = generatePage(name, github);

//fs.writeFile('./index.html', pageHTML, err => {
 // if (err) throw err;

 // console.log('Portfolio complete! Check out index.html to see the output!');
//});










//Notes 
// If you ever need to keep a sentence or multiple words together , we need to wrap them in quotes so that they stay together in process.argv
//var commandLineArgs = process.argv;// process is a global object that represents everything going on with a particular app. It is a gigantic obj holding data providing context to where the app was executed.
 // the argv is an array that holds exactly what was typed into the command line upon execution so that we can capture that data and use it in the app. 
//console.log(commandLineArgs);
// const stands for constant it is a new feature in JS that allows us to create variables that can't be reassigned a value( we can never reassign it)unless they are in a aquare or curly brace brakets because js has no idea what is happening between the brackets. For arrays and obj the content can be altered for strings and numbers the content cant be altered 
//const printProfileData = (profileDataArr) => {
    //   for ( let i = 0; i < profileDataArr.length; i++) {
     //      console.log(profileDataArr[i]);
   
      // }
       
      // console.log('================');
   
       // is the same as this
       //.foreach() is a newer type of method that accepts a function as an argument and executes that function on each element of the array, using the value of the element ar that iteration as its arguments.
       //the .foreach() is exactly the same thing as using for loop to iterate through an array, and using arrayName[i] syntax to access the array at that iteration, its just alot cleaner and meant specifically for arrays
     //  profileDataArr.forEach((profileItem) => console.log(profileItem));
   //};
   // the let keyword behaves more like the var in the sense that we can reassign values with it 
   //let and const are blocked-scoped variables and that is why we use them instead of var and const 


// Multi-Line String
// enter a keyboard return in the template literal wherever you want a line break to occur, just as you would
// if you want a word processor
// ex:
// const generatePage = (userName, githubName) => {
// return `
// Name: ${userName}
// GitHub: ${githubName}
// `;
// };
/* ^ here we've returned the very same string as before but we added carriage returns manually within the template literal.
 We can use an ES6 feature called assignment destructing. In basic terms, it assigns elements of an array to a var names in a single expression as shown here:
 const [name, github] = profileDataArgs;

Generate the HTML file-----------------
fs.writeFile()- can create multiple file types including TXT,PDF,HTML,JSON an dmore.
the function def has 4 arguments.
1: is the name of the file that's being created
2nd: the data that will write onto the file ex( html string template)
3rd: is a callback function that will be used for error handling. 

 */


