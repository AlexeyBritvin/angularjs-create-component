const fs = require('fs');
const {PATH_TO_COMPONENTS} = require('./constants');
const {
  getComponentContent,
  getControllerContent,
  getViewContent
} = require('./file-content');

const componentName = process.argv[2];

function createComponent() {
  process.chdir(PATH_TO_COMPONENTS);
  fs.mkdir(componentName, createFiles);
}

function createFiles(err) {
  if (err) {
    throw err;
  } else {
    process.chdir(componentName);
    fs.writeFile(`${componentName}.controller.ts`, getControllerContent(componentName), onError);
    fs.writeFile(`${componentName}.component.ts`, getComponentContent(componentName), onError);
    fs.writeFile(`${componentName}.html`, getViewContent(componentName), onError);
  }
}

function onError(err) {
  if (err) {
    throw err;
  }
}

module.exports = {
  createComponent
};
