const ctrl = require('../controllers/calendarController.js')
const Router = require('koa-router')
const router = new Router()

router.get('/calendars', ctrl.fetchCalendars)
router.post('/calendar', ctrl.addNewCalendar)
router.put('/todo/:id', ctrl.editCalendar)
router.delete('/todo/:id', ctrl.removeCalendar)

module.exports = router
