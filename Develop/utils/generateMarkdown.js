 function renderLicenseBadge(data) {

  
  if(data.license == 'Apache 2.0'){
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (data.license == 'GPL v3'){
    return `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`
  } else if (data.license == 'GPL v2'){
    return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  } else if (data.license == 'MIT'){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (data.license == 'BSD 3'){
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
  } else if (data.license == 'NONE'){
    return `(No License applied.)`
  }
}

function renderLicenseLink(data) {
  if(data.license == 'Apache 2.0'){
    return `(http://www.apache.org/licenses/LICENSE-2.0)`
  } else if (data.license == 'GPL v3'){
    return `(https://www.gnu.org/licenses/gpl-3.0)`
  } else if (data.license == 'GPL v2'){
    return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else if (data.license == 'MIT'){
    return `(https://opensource.org/licenses/MIT)`
  } else if (data.license == 'BSD 3'){
    return `(https://opensource.org/licenses/BSD-3-Clause)`
  } else if (data.license == 'NONE'){
    return `N/A`
  }
}

module.exports = generateMarkdown;


function generateMarkdown(data) {

  
  
  return `# ${data.title}  ${renderLicenseBadge(data)}
  https://github.com/${data.username}/${data.title}
  ### Description
  ${data.description}
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
  The project is licensed under ${renderLicenseBadge(data)}. Find more information about this license at  ${renderLicenseLink(data)}
  ### Contributing
  Guidelines to contribute are as follows: ${data.contribute}
  ### Tests 
  Run these commands to perform tests. ${data.tests}
  ### Questions 
  If you have any questions regarding the project please contact ${data.name} at: ${data.email}


`;
}

