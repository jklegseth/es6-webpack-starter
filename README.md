# es6-to-es5-quickstart-webpack
Very simple quickstart using [Webpack](https://webpack.github.io/) and [Buble](buble.surge.sh) for ES6 to ES5 compilation with support for module bundling.

## Installation
`npm install`

## Configuration
The default setup using `src/main.js` and the ES6 entry and outputs to `dist/bundle.js`. These paths, and other Webpack settings, can be configued in `webpack.config.js`;

## Commands
`npm run build` will bundle modules and compile to ES5. This command is defined in `package.json` and is aliased to `./node_modules/.bin/webpack`.

`npm run watch` will run `webpack` (i.e., `npm run build`) and then rerun it on file change.
