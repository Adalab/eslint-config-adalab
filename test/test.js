'use strict'

var path = require('path')
var eslint = require('eslint')

var repoRootPath = path.resolve(__dirname, '..')
var eslintrcFile = path.join(repoRootPath, 'index.js')

function printError(error) {
  var errorInfo = error.name === 'ESLintError' ? error.message : error.stack

  console.log(errorInfo)
  process.exit(1)
}

function testEslintrcFile(file) {
  var options = {
    useEslintrc: false,
    configFile: file
  }

  var cli = new eslint.CLIEngine(options)
  var report = cli.executeOnText('// Sample file\n', file)
  var formatter = cli.getFormatter()
  var result = formatter(report.results)

  if (result.length !== 0) {
    var error = new Error(result)
    error.name = 'ESLintError'
    printError(error)
  }
}

testEslintrcFile(eslintrcFile)
