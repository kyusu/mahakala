const {constant} = require('crocks/combinators');
const {ask} = require('./AsyncReader.js');
const readConfigFile = require('./readConfigFile.js');

const error = new Error('💀');

const positiveMockEnv = {
    home: constant('/Users/GyörgyLukács/'),
    read: (fileName, encoding, callback) => callback(null, '☭')
};

const negativeMockEnv = {
    home: constant('/Users/RobertNikolausMaximilianFreiherrvonUngern-Sternberg/'),
    read: (fileName, encoding, callback) => callback(error)
};

describe('readConfigFile', () => {
    it('returns the content of the file, wrapped in a resolved Async instance, given an existing file path', () => ask()
        .chain(readConfigFile)
        .runWith(positiveMockEnv)
        .toPromise()
        .then(result => expect(result).toEqual('☭')));

    it('returns the error, wrapped in a rejected Async instance, given a wrong file path', () => ask()
        .chain(readConfigFile)
        .runWith(negativeMockEnv)
        .toPromise()
        .catch(err => expect(err).toEqual(error)));
});