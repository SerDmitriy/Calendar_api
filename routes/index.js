const Router = require('koa-router')
const router = new Router()

const routerApi = require('./api.js')
const routerCalendar = require('./calendars.js')

router.use(routerApi.routes()).use(routerApi.allowedMethods())
router.use(routerCalendar.routes()).use(routerCalendar.allowedMethods())

module.exports = router
