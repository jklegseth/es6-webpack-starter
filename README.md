# ES6 Webpack Starter
Meant to be a quick starter for an ES6 project using Webpack, Babel, etc. Trying to not be too opinionated here while still providing enough structure to get coding.

## Features
- Webpack, Babel, eslint
- supports `.env` files
- webpack-dev-server
- basic Node server included, great for deployment
- Jest
- Sass compilation

## Installation
`yarn install`

## Commands
- `yarn build` - production build
- `yarn build:dev` - dev build
- `yarn watch` - `webpack -w`
- `yarn lint` - lints `/src`
- `yarn dev-server` - dev server with reload
- `yarn test` - one time run of tests
- `yarn test:watch` - watches files and reruns tests related to changes
- `yarn test:watchAll` - watches files and reruns all tests on change
- `yarn start` - starts Node server on port `3000`

## .env

Currently the `.env` files are empty. For local development create a `.env.development` and `.env.test` file. These are great for storing database connection properties, API keys, etc.

For production create a `.env.production` file but obviously it will depend on the host. For example, with Heroku you will need to add these properties to the "Config Variables" under "Settings".
