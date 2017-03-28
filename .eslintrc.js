module.exports = {
  "extends": "google",
  "env": {
    "browser": true,
    "es6": true
  },
  "require-jsdoc": ["error", {
    "require": {
      "ClassDeclaration": false,
      "FunctionDeclaration": false,
      "MethodDefinition": false,
      "ArrowFunctionExpression": false
  }
  }],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  }
};
