/**
 * Checkbox list examples
 */

import inquirer from 'inquirer'

const { region } = await inquirer
  .prompt([{
    type: 'list',
    message: 'Select region',
    name: 'region',
    choices: [
      { name: 'spmt' },
      { name: 'heat' },
      { name: 'niac' },
    ],
  }])

const { environment } = await inquirer
  .prompt([{
    type: 'list',
    message: 'Select environment',
    name: 'environment',
    choices: [
      { name: 'local' },
      { name: 'test' },
      { name: 'staging' },
    ],
  }])

console.log(JSON.stringify({
  region, environment,
}, null, '  '))
