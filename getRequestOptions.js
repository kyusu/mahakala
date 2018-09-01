/**
 * Returns the form request object which is expected by the time tracking system.
 * Transforms the more readable user name and password to the less readable format expected by the time tracking system.
 * @param {string} userName The user name who's state we want to check
 * @param {string} password Her password
 * @return {{form: {Ident1: string, Ident2: string, CmndTaste: string}}}
 */
const getRequestOptions = ({userName, password}) => ({
    form: {
        Ident1: userName,
        Ident2: password,
        CmndTaste: 'C5' // Indicates that the user wants to know her presence/absence state from the time tracking system
    }
});

module.exports = getRequestOptions;
