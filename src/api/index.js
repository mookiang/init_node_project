const Router = require('koa-router');
const api = new Router();
const sample = require('./sample');

api.use('/sample', sample.routes());

module.exports = api;