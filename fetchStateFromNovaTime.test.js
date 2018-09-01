const Response = require('responselike');
const {AsyncReader} = require('./AsyncReader.js');
const fetchStateFromNovaTime = require('./fetchStateFromNovaTime.js');

const url = 'https://shambhala.edu';
const response = new Response(200, {}, Buffer.from('仏'), url);
const error = new Error('तृष्णा');


const positiveMockEnv = {
    request: (url, options, callback) => callback(null, response)
};
const negativeMockEnv = {
    request: (url, options, callback) => callback(error)
};

const config = {url, userName: 'Gautama Buddha', password: 'ॐ मणिपद्मे हूँ'};

describe('fetchStateFromNovaTime', () => {
    it('returns the state from the server, wrapped in a resolved Async, given a positive response from the server', () =>
        AsyncReader.of(config)
            .chain(fetchStateFromNovaTime)
            .runWith(positiveMockEnv)
            .toPromise()
            .then(result => expect(result).toEqual(response)));

    it('returns the error from the server, wrapped in a rejected Async, given no or a negative response from the server ', () =>
        AsyncReader.of(config)
            .chain(fetchStateFromNovaTime)
            .runWith(negativeMockEnv)
            .toPromise()
            .catch(err => expect(err).toEqual(error)));

});