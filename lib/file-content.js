/* eslint-disable indent*/

const {
  firstLetterToLowerCase,
  transformToCamelCase
} = require('../lib/helpers');
const {
  PATH_TO_COMPONENTS,
  DEFAULT_MODULE
} = require('./constants');

function getControllerContent(name) {
  const camelCaseName = transformToCamelCase(name);
  return (
`import angular from angular;

export class ${camelCaseName}Controller implements angular.IController {
  static $inject = [];

  constructor() {}
}`
  );
}

function getComponentContent(name) {
  const camelCaseName = transformToCamelCase(name);
  const component = `${camelCaseName}Component`;
  return (
`import angular from angular;
import { ${camelCaseName}Controller } from './${name}.controller';

export const ${component}: angular.IComponentOptions = {
  bindings: {},
  controller: ${camelCaseName}Controller,
  controllerAs: 'vm',
  templateUrl: '${PATH_TO_COMPONENTS}/${name}/${name}.html'
};

angular
  .module('${DEFAULT_MODULE}')
  .component('${firstLetterToLowerCase(camelCaseName)}', ${component});`
  );
}

function getViewContent(name) {
  return (
    `<div class='${name}'></div>`
  );
}

module.exports = {
  getComponentContent,
  getControllerContent,
  getViewContent
};
