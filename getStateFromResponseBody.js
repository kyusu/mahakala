/**
 * Takes the request body and determines whether the time tracking system considers the user being absent or present.
 * @param {string} body The request body (an HTML page in our case)
 * @return {boolean} Whether the systems considers the user being present or absent
 */
const getStateFromResponseBody = body => (/var antw3str="Anwesend";/mg).test(body); /* Yes, we are using a regular
expression to check the value of JavaScript variable inside an HTML page. I'm screaming too! */

module.exports = getStateFromResponseBody;