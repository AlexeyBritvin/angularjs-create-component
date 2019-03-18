# angularjs-create-component

This script creates component's folder with files in it:

```
my-super-component
  my-super-component.component.ts
  my-super-component.controller.ts
  my-super-component.html
  my-super-component.scss
```

## Install

npm i angularjs-create-component -g

## Usage

`create-component -- my-super-component --path=./src/js`

## Params

`--basePath=./src/js` - add it if you don't want to repeat the whole path every time, script concatenates basePath and path params

`--path=./concrete-module` - path to your desired location

`--module=app` - in which module component will be created

`--name=my-super-component` - name of your folder, you can use it without `--name` flag
