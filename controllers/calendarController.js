const Calendar = require('../models/calendar')

const addNewCalendar = async ctx => {
	const calendar = ctx.body
	try {
		const savedCalendar = await Calendar.create(calendar)
		ctx.res.send(savedCalendar)
	} catch (err) {
		throw err
	}
}

const fetchCalendars = async ctx => {
	try {
		const calendars = await Calendar.find()
		ctx.res.send(calendars)
	} catch (err) {
		throw err
	}
}

const removeCalendar = async ctx => {
	const { id } = ctx.params
	try {
		const calendars = await Calendar.deleteOne({ _id: id })
		if (calendars.deletedCount) {
			ctx.res.send({ _id: id })
		} else {
			ctx.res.status(500).send({ error: 'Calendar not deleted' })
		}
	} catch (err) {
		throw err
	}
}

const editCalendar = async ctx => {
	const calendar = ctx.body
	const { id } = ctx.params
	try {
		const updatedCalendar = await Calendar.findByIdAndUpdate({ _id: id }, calendar, { new: true })
		console.log('calendar', updatedCalendar)
		ctx.body = updatedCalendar
	} catch (err) {
		throw err
	}
}

module.exports = {
	addNewCalendar,
	fetchCalendars,
	removeCalendar,
	editCalendar,
}
