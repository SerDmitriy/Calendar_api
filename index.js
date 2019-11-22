require('dotenv').config()

const Koa = require('koa')
const json = require('koa-json')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = require('./routes/index')

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
app.use(json())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => console.log('Server started...'))
