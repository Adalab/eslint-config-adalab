'use strict';

const assert = require('assert');
const eslint = require('eslint');
const fs = require('fs');
const path = require('path');

const repoRootPath = path.resolve(__dirname, '../');
const testFile = path.join(__dirname, 'fixtures', 'sample.js');

function getEslintrcFiles() {
  return fs.readdirSync(repoRootPath)
  .filter(file => path.extname(file) === '.js');
}

function testEslintrcFile(eslinrcFile) {
  const options = {
    envs: ['node', 'es6'],
    useEslintrc: false,
    configFile: path.resolve(__dirname, '..', eslinrcFile)
  };

  const report = new eslint.CLIEngine(options).executeOnFiles([testFile]);

  assert.equal(report.errorCount, 0);
  assert.equal(report.warningCount, 0);
  assert(report.results[0].filePath.endsWith(testFile));
}

getEslintrcFiles().forEach(file => testEslintrcFile(file));
