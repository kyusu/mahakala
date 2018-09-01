const sendNovaTimeRequest = require('./sendNovaTimeRequest.js');
const {AsyncReader} = require('./AsyncReader.js');

/**
 * Wraps the sendNovaTimeRequest so the request function is passed to it
 * @param {string} url The URL of the time tracking system
 * @param {string} userName The user name of the user who's state we want to check
 * @param {string} password Her password
 * @return {AsyncReader}
 */
const fetchStateFromNovaTime = ({url, userName, password}) => AsyncReader(({request}) =>
    sendNovaTimeRequest({url, userName, password, requestFn: request})());

module.exports = fetchStateFromNovaTime;

