// TODO: Create a function that returns a license badge based on which license is passed in
//LICENSE BADGES
//renderLicenseBadge()

// If there is no license, return an empty string
 function renderLicenseBadge(data.license) {
  
  if(data.license == 'Apache 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
  } else if (data.license == 'GPL v3'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]`
  } else if (data.license == 'GPL v2'){
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]`
  } else if (data.license == 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if (data.license == 'BSD 3'){
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`
  } else {
             `''` //need to figure out how to show empty response
  }

}
console.log(renderLicenseBadge('BSD 3'))

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data.license) {
  if(data.license == 'Apache 2.0'){
    return `(https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (data.license == 'GPL v3'){
    return `(http://www.gnu.org/licenses/gpl-3.0)`
  } else if (data.license == 'GPL v2'){
    return `(https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  } else if (data.license == 'MIT'){
    return `(https://opensource.org/licenses/MIT)`
  } else if (data.license == 'BSD 3'){
    return `(https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    `''`
  }
}

console.log(renderLicenseLink())

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

async function setLicense() {
  const badgeResponse = await renderLicenseBadge(data.license)
  console.log('Response Recieved')
  const linkResponse = await renderLicenseLink(data.license)
  console.log(`${badgeResponse} , ${linkResponse}`)
}

setLicense()



function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.username}/${data.title}
  ### Description
  ${data.licenseBadge} ${data.description}
  ### Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ### Installation
  Follow these commands/steps to properly install all of the project's dependencies. ${data.installations}
  ### Usage 
  Follow these steps to install project. ${data.usage}
  ### License 
  The project is licensed under ${badgeResponse} license. 
  ${linkResponse}
  ### Contributing
  Guidelines to contribute are as follows: ${data.contribute}
  ### Tests 
  Run these commands to perform tests. ${data.tests}
  ### Questions 
  If you have any questions regarding the project please contact ${data.name} at: ${data.email}


`;
}

module.exports = generateMarkdown;
