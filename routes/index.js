const router = new KoaRouter()

const router = publicRouter => {
	publicRouter.use('/api', ctx => (ctx.body = `Hello ${ctx.name}`))
	// publicRouter.use('/test', require('./test'))
}

module.exports = { router }
