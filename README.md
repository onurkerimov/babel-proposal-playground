# babel-proposal-playground

This is a starter project with Babel and Webpack, with experimental Babel plugins enabled: [`@babel/plugin-proposal-decorators` (more info)](https://babeljs.io/docs/en/babel-plugin-proposal-decorators), [`@babel/plugin-proposal-class-properties` (more info)](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties).

## Features


- Suitable for library authoring (by modifying `@my-library` and `my-library` folders under `./src/node_modules`)
- Prettier, set to `{ "semi": false, "singleQuote": true}`
    - This configuration removes semicolons and uses single quotes instead of double quotes in strings.
    -  Advised to use with Prettier plugin in VSCode to automatically format on save.

* :white_check_mark: Babel (Core) `v7.4.4`
    - Experimental decorators support (`@babel/plugin-proposal-decorators`)
    - Experimental class properties support (`@babel/plugin-proposal-class-properties`)
    - ES2015+ syntax support (`@babel/preset-env`)


- :white_check_mark: Webpack `v4.31.0`
    - Two build settings: `dev` & `prod`
    - Separate config files under `./webpack` folder (Adapted from [this repository](https://github.com/piecioshka/boilerplate-babel-webpack))
    - `webpack-dev-server` is used in `dev` setting
    - `copy-webpack-plugin` copies files from `./src/copy` 
    - `html-webpack-plugin` runs from the template `./src/markup/index.html`


## Usage

### development

```bash
npm run dev
```

### production

```bash
npm run build
```

## Example

With this configuration, the following code is valid.

```js
import { Component } from 'my-library'
import { decorator, anotherDecorator, decoratorThatTakesArguments } from '@my-library/decorators'

@decoratorThatTakesArguments(12, 24) // decorator before class
class MyComponent extends Component {
  @decorator // nested decorators example
  @anotherDecorator
  className = 'my-component' // this line is possible thanks to @babel/plugin-proposal-class-properties

  @decoratorThatTakesArguments('click', 'handler') // decorator before method
  clickHandler() {}

  @decorator // decorator before method
  render() {}
}
```
