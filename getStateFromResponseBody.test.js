const getStateFromResponseBody = require('./getStateFromResponseBody.js');

const loggedIn = '<!DOCTYPE html><head><script type="application/javascript">var antw3str="Anwesend";</script></head><body>test</body></html>';
const loggedOut = '<!DOCTYPE html><head><script type="application/javascript">var antw3str="Abwesend";</script></head><body>test</body></html>';

describe('getStateFromResponseBody', () => {
    it('returns true if response body indicates that the user is logged in', () => {
        expect(getStateFromResponseBody(loggedIn)).toEqual(true);
    });
    it('returns false if response body indicates that the user is logged out', () => {
        expect(getStateFromResponseBody(loggedOut)).toEqual(false);
    });
});