const {constant} = require('crocks/combinators');
const {bimap} = require('crocks/pointfree');

/**
 * Takes an Async instance (either Rejected or Resolved) and maps the content to a nice little emoticon
 * @type(function(Async): Async)
 */
const visualizeState = bimap(
    constant('💥'),
    state => state ? '💓' : '💔'
);

module.exports = visualizeState;