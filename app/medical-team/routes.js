var express = require('express'),
    router = express.Router(),
    ctrlDoctors = require('./controller');

router.post('/doctors', ctrlDoctors.doctorCreate);

module.exports = router;