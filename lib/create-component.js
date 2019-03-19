const fs = require('fs');
const path = require('path');
const {
  getComponentContent,
  getControllerContent,
  getViewContent
} = require('./file-content');

const params = {
  name: '',
  basePath: '',
  path: '',
  module: '',
  normalizePath: ''
};

function getCommandParams() {
  const args = process.argv.slice(2);
  args.forEach((arg) => {
    if (arg.indexOf('=') >= 0) {
      const [name, value] = arg.split('=');
      setParamValue(name, value);
    } else {
      setParamValue('name', arg);
    }
  });
}

function setParamValue(paramName, value) {
  let param = paramName.replace('--', '');
  params[param] = value;
}

function createComponent() {
  getCommandParams();
  params.normalizePath = path.posix.join(params.basePath, params.path);
  process.chdir(path.resolve(params.basePath, params.path));
  fs.mkdir(params.name, createFiles);
}

function createFiles(err) {
  if (err) {
    throw err;
  } else {
    process.chdir(params.name);
    fs.writeFile(`${params.name}.controller.ts`, getControllerContent(params), onError);
    fs.writeFile(`${params.name}.component.ts`, getComponentContent(params), onError);
    fs.writeFile(`${params.name}.html`, getViewContent(params), onError);
    fs.writeFile(`${params.name}.less`, '', onError);
  }
}

function onError(err) {
  if (err) {
    throw err;
  }
}

exports.createComponent = createComponent;
