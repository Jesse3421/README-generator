// TODO: Create a function that returns a license badge based on which license is passed in
//LICENSE BADGES
/* licenseArr = [
  {
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]
  },
  {
  [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]
  },
  {
    [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]  
  },
  {
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
  },
  {
    [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]
  },
  {
    none: ''
  }
]


// If there is no license, return an empty string
function renderLicenseBadge(licenseAnswer) {
  if(licenseAnswer == 'Apache 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
  } else if (licenseAnswer == 'GPL v3'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]`
  } else if (licenseAnswer == 'GPL v2'){
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]`
  } else if (licenseAnswer == 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if (licenseAnswer == 'BSD 3'){
    `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`
  } else {
    ''
  }

  
  




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

*/

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
  The project is licensed under ${data.license} license. 
  ![Github License] (https://img.shields.io/badge/license-MIT-blue.svg)
  ### Contributing
  Guidelines to contribute are as follows: ${data.contribute}
  ### Tests 
  Run these commands to perform tests. ${data.tests}
  ### Questions 
  If you have any questions regarding the project please contact ${data.name} at: ${data.email}


`;
}

module.exports = generateMarkdown;
