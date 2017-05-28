'use strict';

const off = 0;
const warning = 1;
const error = 2;

module.exports = {
  env: {
    es6: true,
    browser: true
  },

  plugins: [
    'promise'
  ],

  rules: {
    // Possible errors
    'no-cond-assign': error,
    'no-constant-condition': [error, {checkLoops: false}],
    'no-dupe-args': error,
    'no-dupe-keys': error,
    'no-duplicate-case': error,
    'no-empty': error,
    'no-ex-assign': error,
    'no-extra-boolean-cast': error,
    'no-extra-parens': [error, 'all', {'conditionalAssign': false, 'returnAssign': false}],
    'no-extra-semi': error,
    'no-func-assign': error,
    'no-inner-declarations': error,
    'no-invalid-regexp': error,
    'no-irregular-whitespace': error,
    'no-obj-calls': error,
    'no-regex-spaces': error,
    'no-sparse-arrays': error,
    'no-template-curly-in-string': error,
    'no-unexpected-multiline': error,
    'no-unreachable': error,
    'no-unsafe-finally': error,
    'no-unsafe-negation': error,
    'use-isnan': error,
    'valid-typeof': error,

    // Best practices
    'array-callback-return': error,
    'block-scoped-var': error,
    'complexity': [warning, 8],
    'consistent-return': error,
    'curly': [error, 'multi-line', 'consistent'],
    'default-case': error,
    'eqeqeq': ['error', 'smart'],
    'no-caller': error,
    'no-case-declarations': error,
    'no-extra-bind': error,
    'no-extra-label': error,
    'no-fallthrough': [error, { 'commentPattern': 'break[\\s\\w]*omitted' }],
    'no-invalid-this': error,
    'no-iterator': error,
    'no-labels': error,
    'no-lone-blocks': error,
    'no-loop-func': error,
    'no-multi-spaces': error,
    'no-multi-str': error,
    'no-new-func': error,
    'no-new-wrappers': error,
    'no-new': error,
    'no-octal': error,
    'no-proto': error,
    'no-redeclare': error,
    'no-return-assign': error,
    'no-self-assign': error,
    'no-self-compare': error,
    'no-sequences': error,
    'no-throw-literal': error,
    'no-useless-call': error,
    'no-useless-concat': error,
    'no-useless-escape': error,
    'no-useless-return': error,
    'no-with': error,
    'wrap-iife': error,
    'yoda': error,

    // Strict mode
    'strict': [error, 'global'],

    // Variables
    'no-delete-var': error,
    'no-shadow-restricted-names': error,
    'no-undef-init': error,
    'no-undef': error,
    'no-undefined': error,
    'no-unused-vars': error,
    'no-use-before-define': ['error', {'functions': false}],

    // Stylistic Issues
    'eol-last': error,
    'func-name-matching': error,
    'func-names': [off, 'as-needed'],
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'max-depth': [error, 6],
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'max-lines': ['error', {
      max: 512,
      skipBlankLines: true,
      skipComments: true
    }],
    'max-nested-callbacks': [error, 6],
    'max-params': [error, 4],
    'max-statements-per-line': error,
    'no-array-constructor': error,
    'no-lonely-if': error,
    'no-mixed-spaces-and-tabs': [error, 'smart-tabs'],
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'no-negated-condition': error,
    'no-new-object': error,
    'no-plusplus': [error, { allowForLoopAfterthoughts: true }],
    'no-tabs': error,
    'no-trailing-spaces': error,
    'no-unneeded-ternary': error,
    'quote-props': ['error', 'as-needed', {unnecessary: false, numbers: true}],
    'semi': [error, 'always'],

    // ECMAScript 6
    'no-empty-pattern': error,
    'class-methods-use-this': error,
    'no-class-assign': error,
    'no-const-assign': error,

    'constructor-super': error,
    'no-dupe-class-members': error,
    'no-duplicate-imports': error,
    'no-new-symbol': error,
    'no-this-before-super': error,
    'no-useless-computed-key': error,
    'no-useless-constructor': error,
    'no-useless-rename': error,
    'require-yield': error,
    'symbol-description': error,

    // Promises
    'promise/catch-or-return': error,
    'promise/always-return': error,
    'promise/param-names': error
  }
};
