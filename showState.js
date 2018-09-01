const {propOr, compose, composeK} = require('crocks/helpers');
const map = require('crocks/pointfree/map');
const chain = require('crocks/pointfree/chain');
const getStateFromResponseBody = require('./getStateFromResponseBody.js');
const visualizeState = require('./visualizeState.js');
const readConfigFile = require('./readConfigFile.js');
const fetchStateFromNovaTime = require('./fetchStateFromNovaTime.js');
const parseConfigFile = require('./parseConfigFile.js');
const {ask} = require('./AsyncReader.js');

/**
 * Takes the response object from the network calls and returns the state of the user (present/absent)
 * @type {function(Response): boolean}
 */
const processState = compose(
    getStateFromResponseBody,
    propOr('', 'body')
);

/**
 * Reads the configuration file in the home directory, parses it and tries to fetch the state of the user from the
 * time tracking system
 * @type {function(AsyncReader): AsyncReader}
 */
const readConfigAndFetchStateFromNovaTime = composeK(
    fetchStateFromNovaTime,
    parseConfigFile,
    readConfigFile
);

/**
 * Reads the configuration file, parses it, does the network request and tries to determine the state of the user
 * @type {function(): AsyncReader}
 */
const getState = compose(
    map(processState),
    chain(readConfigAndFetchStateFromNovaTime),
    ask
);

/**
 * @typedef Object Environment
 * @property function(): string home The function to which should return the path of the home directory of the user
 * @property function(file: string, options: object, callback: Function) readFile The function which is used to read
 * the configuration file from the disk
 * @property function(url: string, options: object, callback: Function) request The function which is used to make the
 * network call to the time tracking server
 */

/**
 * Read the configuration file, parse it, does the network call, determines the state and visualizes it.
 * @type {function(env: Environment): AsyncReader}
 */
const showState = compose(
    visualizeState,
    env => getState().runWith(env)
);

module.exports = showState;
