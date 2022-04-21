let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let RecordSchema = new Schema({
    key: String,
    count: [Number],
    value: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Record', RecordSchema);;