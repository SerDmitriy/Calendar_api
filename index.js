const Koa = require('koa')
const KoaRouter = require('koa-router')
const json = require('koa-json')
const path = require('path')
const render = require('koa-ejs')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')

const publicRouter = require('./routes')
const app = new Koa()
const router = new KoaRouter()
router.use('/we', ctx => (ctx.body = `router.use('/we'`))
router.use('/qw', ctx => (ctx.body = `router.use('/qw'`))

const calendars = ['Birth days', "Party's", 'Religion']

mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true })
app.use(json())
app.use(bodyParser())
// app.use(responseTime)
// app.use(router)

// router.get('/', (ctx, next) => {
// 	console.log('router grab path "/"')
// ctx.router available
// })

app.use(router.routes()).use(router.allowedMethods())

router.all('/users/:id', (ctx, next) => {
	ctx.body = 'method all from router'
	console.log(ctx)
})

// app.use(async (ctx, next) => {
// 	ctx.status = 200
// 	console.log('Setting status')
// 	await next()
// })
// app.use(async ctx => {
// 	await new Promise(resolve => setTimeout(resolve, 1500))
// 	for (let i = 0; i < 10000000; i++) {
// 		let y = i * i + 2
// 	}
// 	console.log('Setting body')
// 	ctx.body = 'Hello from Koa'
// })

app.context.name = 'Bob'

render(app, {
	root: path.join(__dirname, 'views'),
	layout: 'layout',
	viewExt: 'html',
	cache: false,
	debug: false,
})

router.get('/', index)
// router.get('/time', responseTime)
router.get('/add', showAdd)
router.post('/add', add)

// async function responseTime(ctx, next) {
// 	console.log('Started tracking response time')
// 	const started = Date.now()
// 	await next()
// 	// once all middleware below completes, this continues
// 	const ellapsed = Date.now() - started + 'ms'
// 	console.log('Response time is:', ellapsed)
// 	ctx.set('X-ResponseTime', ellapsed)
// }

async function index(ctx) {
	await ctx.render('index', {
		title: 'Calendar',
		calendars: calendars,
	})
}

async function showAdd(ctx) {
	await ctx.render('add')
}

async function add(ctx) {
	const body = ctx.request.body
	calendars.push(body.calendar)
	ctx.redirect('/')
}

router.get('/test', ctx => (ctx.body = `/test get`))
router.get('/test2/:name', ctx => (ctx.body = `/test get + ${ctx.params.name}`))

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => console.log('Server started...'))
