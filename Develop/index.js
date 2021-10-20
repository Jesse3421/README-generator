const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util') //Not sure if I need this???

const generateMarkdown = require('./utils/generateMarkdown')

let questions = [
    {
      type: 'input',
      name: 'name', 
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if(nameInput) {
          return true
        } else { console.log('Please enter your name!')
          return false
        }
      }   
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username? (Required)',
      validate: usernameInput => {
        if(usernameInput) {
          return true
        } else { console.log('Please enter your GitHub username!')
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: emailInput => {
        if(emailInput) {
          return true
        } else { console.log('Please enter your email address!')
          return false
        }
      }
    },
    {
      type: 'input', 
      name: 'title',
      message: 'What is the title of your project?',
      validate: titleInput => {
        if(titleInput) {
          return true
        }else{ console.log('Please enter the title of your project!')
          return false
        }
      }
    },
    {
     type: 'input',
     name: 'description',
     message: 'Please write a description of your project:',
     validate: descriptionInput => {
      if(descriptionInput) {
        return true
      }else{ console.log('Please enter your name!')
        return false
      }
     }
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to assign to you project?',
      choices: ['Apache 2.0', 'GPL v3', 'MIT', 'GPL v2', 'BSD 3', 'none'],
      validate: licenseInput => {
        if(licenseInput) {
          return true
        }else{ console.log('Please choose one of the licenses from the list or choose NONE')
          return false
        }
      } 
    },
    {
      type: 'input',
      name: 'installations',
      message: 'Please list any commands or steps that are required to install project dependencies'
    },
    {
      tpye: 'input',
      name: 'tests',
      message: 'What command shoud be entered to run tests?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What other instructions should be included for use?'
    },
    {
      type: 'input',
      name: 'contribute',
      messager: 'Please include any guidelines for the user to contribute to your project'
    }

  ];
  
  var inquirer = require('inquirer');
  
  const promptUser = (questions) => {
  return inquirer.prompt([questions])
  }

  promptUser()
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile('README.md', generateMarkdown(), err => {
  if(err) throw err
  console.log('Your README file is complete. Go view the README.md file to see your new README document')
})
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const printReadMeData = readMeDataArr => {
    console.log(readMeDataArr);
}