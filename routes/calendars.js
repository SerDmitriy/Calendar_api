const ctrl = require('../controllers/calendarController.js')
const Router = require('koa-router')
const router = new Router({ prefix: '/calendars' })

router.get('/', ctx => (ctx.body = `calendars get`))
router.post('/', ctx => (ctx.body = `calendars post`))
router.put('/:id', ctx => (ctx.body = `calendars put`))
router.delete('/:id', ctx => (ctx.body = `calendars delete`))

module.exports = router
