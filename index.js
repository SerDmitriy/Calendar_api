const Koa = require('koa')
const KoaRouter = require('koa-router')
const json = require('koa-json')
const path = require('path')
const render = require ('koa-ejs')

const app = new Koa()
const router = new KoaRouter()
const bodyParser = require('koa-bodyparser')

const calendars = ['Birth days', 'Partys', 'Religion']

app.use(json())
app.use(bodyParser())
// app.use(async ctx => (ctx.body = { msg: 'Hello World'}))

app.context.name = "Bob"

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: false,
})

router.get('/', index)
router.get('/add', showAdd)
router.post('/add', add)



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

router.get('/test', ctx => (ctx.body = `Hello ${ctx.name}`))
router.get('/test2/:name', ctx => (ctx.body = `Hello ${ctx.params.name}`))


app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => console.log('Server started...'))



// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const publicRouter = require('./routes');

// const app = express();
// mongoose.connect('mongodb://localhost:27017/admin',
//   { useNewUrlParser: true, useUnifiedTopology: true });

// app.use(cors());
// app.use(bodyParser());
// app.use(publicRouter);

// app.listen(9999, () => console.log('server alive'));
