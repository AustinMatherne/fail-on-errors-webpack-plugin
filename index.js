'use strict'

const defaultOptions = {
  failOnErrors: true,
  failOnWarnings: false,
}

class FailOnErrorsPlugin {
  constructor(options) {
    this.options = Object.assign({}, defaultOptions, options);
  }

  apply(compiler) {
    compiler.plugin('done', stats => {
      const errors = this.options.failOnErrors && stats.hasErrors();
      const warnings = this.options.failOnWarnings && stats.hasWarnings();

      if (errors || warnings) {
        process.on('beforeExit', () => {
          process.exit(1);
        });
      }
    });
  }
}

module.exports = FailOnErrorsPlugin;
