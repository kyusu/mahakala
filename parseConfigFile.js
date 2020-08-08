const tryCatch = require('crocks/Result/tryCatch');
const {unary} = require('crocks/helpers');
const resultToAsync = require('crocks/Async/resultToAsync');
const {liftFn} = require('./AsyncReader.js');

/**
 * Takes a string and tries to parse it. Wraps the result into Result instance. When parsing fails, the error is wrapped
 * in a Result.Err instance, when the parsing succeeds the result is wrapped in a Result.Ok instance
 * @type(function(string): Result)
 */
const safeJSONParse = tryCatch(unary(JSON.parse));

/**
 * Takes the configuration files as string (inside a AsyncReader instance) and tries to parse it. Failed attempts are
 * returned as a rejected AsyncReader instance containing the error and successful attempts are returned as a resolved
 * AsyncReader instance containing the object
 * @type(function(AsyncReader.<string>): AsyncReader.<object>)
 */
const parseConfigFile = liftFn(resultToAsync(safeJSONParse));

module.exports = parseConfigFile;

