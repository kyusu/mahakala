const ReaderT = require('crocks/Reader/ReaderT');
const Async = require('crocks/Async');

const AsyncReader = ReaderT(Async);
const {ask, liftFn} = AsyncReader;

module.exports = {AsyncReader, ask, liftFn};

