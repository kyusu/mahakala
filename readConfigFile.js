const {join} = require('path');
const {fromNode} = require('crocks/Async');
const {AsyncReader} = require('./AsyncReader.js');

/**
 * Reads the config file (.novaTime) which should reside in the home directory of the user. If it could be read
 * successfully, it returns a resolved AsyncReader instance containing the content of the file as string, if it could
 * not be read, it returns a rejected AsyncReader instance containing the error
 * @return {AsyncReader.<string>}
 */
const readConfigFile = () => AsyncReader(({home, read}) => fromNode(read)(join(home(), '.mahakala'), 'utf8'));

module.exports = readConfigFile;
