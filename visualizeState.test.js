const Async = require('crocks/Async');
const visualizeState = require('./visualizeState.js');

describe('visualizeState', () => {
    it('visualizes being present in as 💓', () =>
        visualizeState(Async.of(true)).toPromise().then(result => expect(result).toEqual('💓')));

    it('visualizes being absent out as 💔', () =>
        visualizeState(Async.of(false)).toPromise().then(result => expect(result).toEqual('💔')));

    it('visualizes an error as 💥', () =>
        visualizeState(Async.Rejected(new Error('Error!'))).toPromise().catch(result => expect(result).toEqual('💥')));
});