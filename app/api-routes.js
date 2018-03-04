var express = require('express'),
    router = express.Router();

var ctrlDoctors = require('./medical-team/controller');

router.get('/doctors', ctrlDoctors.doctorList);
router.post('/doctors', ctrlDoctors.doctorCreate);

module.exports = router;