/* eslint-disable indent*/

const {
  firstLetterToLowerCase,
  transformToCamelCase
} = require('../lib/helpers');

function getControllerContent(params) {
  const camelCaseName = transformToCamelCase(params.name);
  return (
`import { IController } from 'angular';

export class ${camelCaseName}Controller implements IController {
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
`import { IComponentOptions } from 'angular';
import { ${camelCaseName}Controller } from './${name}.controller';

export const ${component}: IComponentOptions = {
  bindings: {},
  controller: ${camelCaseName}Controller,
  controllerAs: 'vm',
  templateUrl: '${normalizePath}/${name}/${name}.html'
};

${module}
  .component('${firstLetterToLowerCase(camelCaseName)}', ${component});
`
  );
}

function getViewContent(params) {
  return (
    `<div class="${params.name}"></div>`
  );
}

module.exports = {
  getComponentContent,
  getControllerContent,
  getViewContent
};
