const Calendar = require('../models/calendar')

const addNewCalendar = async ctx => {
	console.log('addNewCalendar')

	const calendar = ctx.body
	try {
		const savedCalendar = await Calendar.create(calendar)
		ctx.res.send(savedCalendar)
	} catch (err) {
		ctx.res.status(500).send(err)
	}
}

const fetchCalendars = async ctx => {
	console.log('fetchCalendars')

	try {
		const calendars = await Calendar.find()
		ctx.res.send(calendars)
	} catch (err) {
		ctx.res.status(500).send(err)
	}
}

const removeCalendar = async ctx => {
	console.log('removeCalendar')

	const { id } = ctx.params
	try {
		const calendars = await Calendar.deleteOne({ _id: id })
		if (calendars.deletedCount) {
			ctx.res.send({ _id: id })
		} else {
			ctx.res.status(500).send({ error: 'Calendar not deleted' })
		}
	} catch (err) {
		ctx.res.status(500).send(err)
	}
}

const editCalendar = async ctx => {
	console.log('editCalendar')

	const calendar = ctx.body
	const { id } = ctx.params
	try {
		const updatedCalendar = await Calendar.findByIdAndUpdate({ _id: id }, calendar, { new: true })
		console.log('calendar', updatedCalendar)
		ctx.res.send(updatedCalendar)
	} catch (err) {
		console.log('error edit calendar', err)
		ctx.res.status(500).send(err)
	}
}

module.exports = {
	addNewCalendar,
	fetchCalendars,
	removeCalendar,
	editCalendar,
}
