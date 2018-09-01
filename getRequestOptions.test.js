const getRequestOptions = require('./getRequestOptions.js');

describe('getRequestOptions', () => {
    it('returns a correctly filled form object given a user name and a password', () => {
        const result = getRequestOptions({
            userName: 'Donald Duck',
            password: 'Daisy'
        });
        expect(result).toEqual({
            form: {
                CmndTaste: 'C5',
                Ident1: 'Donald Duck',
                Ident2: 'Daisy'
            }
        });
    });
});