const {constant} = require('crocks/combinators');
const Response = require('responselike');
const showState = require('./showState.js');

const url = 'https://shambhala.edu';
const responseIndicatingPresence = new Response(200, {}, Buffer.from('var antw3str="Anwesend";'), url);
const responseIndicatingAbsence = new Response(200, {}, Buffer.from('var antw3str="Abwesend";'), url);

const config = {url, userName: 'Gautama Buddha', password: 'ॐ मणिपद्मे हूँ'};
const validConfigString = JSON.stringify(config);
const invalidConfigString = JSON.stringify(config).substring(0, 4);

const home = constant('/Users/gautamabuddha/');
const requestWithPresence = (url, options, callback) => callback(null, responseIndicatingPresence);
const readWithValidConfig = (path, encoding, callback) => callback(null, validConfigString);

const mockEnvIndicatingPresence = {
    read: readWithValidConfig,
    request: requestWithPresence,
    home
};
const mockEnvIndicatingAbsence = {
    read: readWithValidConfig,
    request: (url, options, callback) => callback(null, responseIndicatingAbsence),
    home
};

const mockEnvWithInvalidConfig = {
    read: (path, encoding, callback) => callback(null, invalidConfigString),
    request: requestWithPresence,
    home
};

const mockEnvWithErrorResponse = {
    read: readWithValidConfig,
    request: (url, options, callback) => callback(new Error('तृष्णा')),
    home
};

describe('showState', () => {
    it('returns a 💓 if the user is considered being present by the time tracking system', () =>
        showState(mockEnvIndicatingPresence)
            .toPromise()
            .then(result => expect(result).toEqual('💓')));

    it('returns a 💔 if the is user is considered being absent by the time tracking system', () =>
        showState(mockEnvIndicatingAbsence)
            .toPromise()
            .then(result => expect(result).toEqual('💔')));

    it('returns a 💥 if the config file is not valid', () =>
        showState(mockEnvWithInvalidConfig)
            .toPromise()
            .catch(result => expect(result).toEqual('💥')));

    it('returns a 💥 if server returned an error', () =>
        showState(mockEnvWithErrorResponse)
            .toPromise()
            .catch(result => expect(result).toEqual('💥')));
});