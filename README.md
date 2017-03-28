# es6-to-es5-quickstart-webpack
Very simple quickstart using [Webpack](https://webpack.github.io/) and [Bable](http://babeljs.io/) for ES6 to ES5 compilation with support for module bundling. Incluces `eslint` using Google's [config](https://github.com/google/eslint-config-google) as a starting point.

## Installation
`npm install`

## Configuration
The default setup uses `src/main.js` as the ES6 entry path and `dist/bundle.js` as the output path. These paths, and other Webpack settings, can be configued in `webpack.config.js`;

## Commands
`npm run build` bundles modules and compiles to ES5. This command is defined in `package.json` and is aliased to `./node_modules/.bin/webpack`.

`npm run watch` will run `webpack` (i.e., `npm run build`) and then rerun it on file change. This command is defined in `package.json` and is aliased to `./node_modules/.bin/webpack -w`.

`npm run lint` will run `eslint` against all files in `src`.