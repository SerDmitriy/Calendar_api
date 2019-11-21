const ctrl = require('../controllers/calendarController.js')
const Router = require('koa-router')
const router = new Router({ prefix: '/calendars' })

router.get('/', ctx => (ctx.body = `calendars get`))
router.post('/', ctx => (ctx.body = `calendars post`))
router.put('/:id', ctx => (ctx.body = `calendars put`))
router.delete('/:id', ctx => (ctx.body = `calendars delete`))

// router.get('/', ctrl.fetchCalendars)
// router.post('/', ctrl.addNewCalendar)
// router.put('/:id', ctrl.editCalendar)
// router.delete('/:id', ctrl.removeCalendar)

module.exports = router
