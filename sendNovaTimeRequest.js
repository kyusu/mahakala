const {fromNode} = require('crocks/Async');
const partial = require('crocks/helpers/partial');
const getRequestOptions = require('./getRequestOptions.js');

/**
 * Returns a function which when invoked does the actually request to the time tracking system
 * @param {string} url The URL of the time tracking system
 * @param {string} userName The user name who's state we want to check
 * @param {string} password Her password
 * @param {function (url: string, requestOptions: object, callback: function(Error, object))} requestFn A node.js
 * callback style function which is going to be used to do the actually network request
 * (e.g. https://www.npmjs.com/package/request)
 * @return {AsyncReader.<string>}
 */
const sendNovaTimeRequest = ({url, userName, password, requestFn}) => fromNode(partial(requestFn, url, getRequestOptions({
    userName,
    password
})));

module.exports = sendNovaTimeRequest;
