const {
  firstLetterToLowerCase,
  transformToCamelCase
} = require('../lib/helpers');

function getControllerContent(params) {
  const camelCaseName = transformToCamelCase(params.name);
  return (
    `import angular from angular;

    export class ${camelCaseName}Controller implements angular.IController {
      static $inject = [];

      constructor() {}
    }`
  );
}

function getComponentContent(params) {
  const camelCaseName = transformToCamelCase(params.name);
  const component = `${camelCaseName}Component`;
  return (
    `import angular from angular;
    import ${camelCaseName}Controller from './${params.name}.controller'

    export const ${component}: angular.IComponentOptions = {
      bindings: {},
      controller: ${camelCaseName}Controller,
      controllerAs: 'vm',
      templateUrl: ${params.path}
    }

    angular
      .module(${params.module})
      .component('${firstLetterToLowerCase(camelCaseName)}', ${component});
    `
  );
}

module.exports = {
  getComponentContent,
  getControllerContent
};
