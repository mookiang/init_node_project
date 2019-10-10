const Router = require('koa-router');
const router = new Router();
const service = require('./service');

router.get('/', service.getSample);

module.exports = router;