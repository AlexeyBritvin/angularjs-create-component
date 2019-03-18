/* eslint-disable indent*/

const {
  firstLetterToLowerCase,
  transformToCamelCase
} = require('../lib/helpers');

function getControllerContent(params) {
  const camelCaseName = transformToCamelCase(params.name);
  return (
`import * as angular from 'angular';

export class ${camelCaseName}Controller implements angular.IController {
  static $inject = [];

  constructor() {}
}`
  );
}

function getComponentContent(params) {
  const {name, normalizePath, module} = params;
  const camelCaseName = transformToCamelCase(name);
  const component = `${camelCaseName}Component`;
  return (
`import * as angular from 'angular';
import { ${camelCaseName}Controller } from './${name}.controller';

export const ${component}: angular.IComponentOptions = {
  bindings: {},
  controller: ${camelCaseName}Controller,
  controllerAs: 'vm',
  templateUrl: '${normalizePath}/${name}/${name}.html'
};

angular
  .module('${module}')
  .component('${firstLetterToLowerCase(camelCaseName)}', ${component});
`
  );
}

function getViewContent(params) {
  return (
    `<div class='${params.name}'></div>`
  );
}

module.exports = {
  getComponentContent,
  getControllerContent,
  getViewContent
};
