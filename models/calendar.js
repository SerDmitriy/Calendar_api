const mongoose = require('mongoose')
const Schema = mongoose.Schema

const calendarSchema = new Schema({
	value: { type: String, default: '' },
	checked: { type: Boolean, default: false },
})

module.exports = mongoose.model('Calendar', calendarSchema)
