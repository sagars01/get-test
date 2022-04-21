let express = require('express');
const { RecordsController } = require('../controllers/records.controller');
const recordsValidator = require('../utils/validators/records.validator');
let router = express.Router();

/**
 * @method GET
 * @description check if the server is up
 * @returns OK 
 */


router.get('/', function (req, res, next) {
  res.json({
    message: "OK"
  })
});

router.post('/records', recordsValidator.recordPayloadValidation, RecordsController)


module.exports = router;
