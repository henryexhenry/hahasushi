const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

const feedbackSchema = new Schema({
    firstname: {type:String, required:true},
    lastname: {type:String, required:true},
    tel: Number,
    email: String,
    feedback: { type: String, required: true }
})

var Feedbacks = mongoose.model('Feedback', feedbackSchema)
module.exports = Feedbacks;