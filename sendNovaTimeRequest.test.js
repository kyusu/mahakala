const Response = require('responselike');
const {assoc} = require('crocks/helpers');
const sendNovaTimeRequest = require('./sendNovaTimeRequest.js');

const url = 'https://shambhala.edu';
const response = new Response(200, {}, Buffer.from('仏'), url);
const error = new Error('तृष्णा');

const mockEnv = {
    userName: 'Gautama Buddha',
    password: 'ॐ मणिपद्मे हूँ',
    url
};

const positiveMockEnv = assoc('requestFn', (url, options, callback) => callback(null, response), mockEnv);

const negativeMockEnv = assoc('requestFn', (url, options, callback) => callback(error), mockEnv);

describe('sendNovaTimeRequest', () => {
    it('returns a function which when invoked returns an Async instance ', () => {
        const asyncFn = sendNovaTimeRequest(positiveMockEnv);
        expect(typeof asyncFn).toEqual('function');
        expect(typeof asyncFn().fork).toEqual('function');
    });

    it('returns the response from  the server wrapped in a resolved Async instance', () =>
        sendNovaTimeRequest(positiveMockEnv)().toPromise().then(result => expect(result).toEqual(response)));

    it('returns the error from  the server wrapped in a rejected Async instance', () =>
        sendNovaTimeRequest(negativeMockEnv)().toPromise().catch(err => expect(err).toEqual(error)));
});