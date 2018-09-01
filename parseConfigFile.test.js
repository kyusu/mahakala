const {AsyncReader} = require('./AsyncReader.js');
const parseConfigFile = require('./parseConfigFile.js');

const config = {url: 'https://shambhala.edu', userName: 'Gautama Buddha', password: 'ॐ मणिपद्मे हूँ'};
const syntaxError = new SyntaxError('Unexpected end of JSON input');

const validConfigString = JSON.stringify(config);
const invalidConfigString = JSON.stringify(config).substring(0, 4);

describe('parseConfigFile', () => {
    it('takes a (wrapped) valid JSON string and returns a (wrapped) object', () =>
        AsyncReader.of(validConfigString)
            .chain(parseConfigFile)
            .runWith()
            .toPromise()
            .then(result => expect(result).toEqual(config)));

    it('takes a (wrapped) invalid JSON and returns a (wrapped) error without crashing', () =>
        AsyncReader.of(invalidConfigString)
            .chain(parseConfigFile)
            .runWith()
            .toPromise()
            .catch(err => expect(err).toEqual(syntaxError)));
});