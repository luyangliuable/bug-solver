const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
    how: String,
    person: String,
    solution: String,
}, { timestamps: true });


module.exports = bugSchema;
