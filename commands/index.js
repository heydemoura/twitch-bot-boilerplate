const fs = require('fs');
const path = require('path');

const moduleList = fs.readdirSync(path.resolve(__dirname), 'utf-8');

const moduleMap = {};

moduleList.forEach((module, index) => {
  if(!/index\.js$/.test(module)) {
    const command = require(path.resolve(__dirname, module.split('.js')[0]));
    moduleMap[command.command] = command;
  };
});

module.exports = moduleMap
