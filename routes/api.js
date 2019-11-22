const ctrl = require('../controllers/calendarController.js')
const Router = require('koa-router')
const router = new Router({ prefix: '/api' })

router.get('/', ctx => (ctx.body = ctx))
router.post('/', ctx => (ctx.body = ctx))
router.put('/:id', ctx => (ctx.body = ctx))
router.delete('/:id', ctx => (ctx.body = ctx))

// router.all('/:id', ctx => {
// 	console.log('ctx', ctx)
// 	ctx.body = ctx
// })

module.exports = router
