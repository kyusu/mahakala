const {homedir} = require('os');
const {readFile} = require('fs');
const {post} = require('request');
const showState = require('./showState.js');
const {error, log} = console;

showState({home: homedir, read: readFile, request: post}).fork(error, log); /* eslint-disable-line fp/no-unused-expression */
