const Router = require('koa-router');
const router = new Router();
const service = require('./service');

router.get('/', service.getSample);
router.get('/chatbot', service.getChatbot);
router.post('/chatbot', service.postChatbot);

module.exports = router;