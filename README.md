# FailOnErrorsPlugin

[![Greenkeeper badge](https://badges.greenkeeper.io/AustinMatherne/fail-on-errors-webpack-plugin.svg)](https://greenkeeper.io/)

Webpack plugin that will make the process exit with status code 1 when it finishes with soft errors or warnings.

## Install

`npm install fail-on-errors-webpack-plugin`

## Usage

```javascript
var FailOnErrorsPlugin = require('fail-on-errors-webpack-plugin');

module.exports = {
  //config
  plugins: [
    new FailOnErrorsPlugin({
      failOnErrors: true,
      failOnWarnings: true,
    })
  ]
}
```

## Credits

Forked from [webpack-fail-plugin](https://github.com/TiddoLangerak/webpack-fail-plugin)
