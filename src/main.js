const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');
const api = require('./api');
const PORT = 3000;

router.use('', api.routes());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
    console.log(`Koa server is listening to port ${PORT}`);
});
