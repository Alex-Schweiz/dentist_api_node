var mongoose = require('mongoose'),
    Doctor = require('./model');
    doctorItem = mongoose.model('Doctor');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.doctorCreate = function(req, res) {

    doctorItem.create({
        name: req.body.name,
        honours: req.body.honours,
        description: req.body.description,
        certifications: req.body.certifications
    }, function(err, doctor) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, { message: 'Doctor created!' });
        }
    });
};