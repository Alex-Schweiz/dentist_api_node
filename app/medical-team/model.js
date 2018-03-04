var mongoose = require('mongoose');

var doctorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    honours: {type: String, required: true},
    description: {type: String, required: true},
    certifications: [String]
});

module.exports = mongoose.model('Doctor', doctorSchema);