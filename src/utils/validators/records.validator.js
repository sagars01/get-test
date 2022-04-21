const moment = require('moment');
const AppError = require('../errorHandlers/AppError');

module.exports = {

    recordPayloadValidation: function (req, res, next) {


        const { startDate, endDate } = req.body;

        let validationErr = [];
        if (startDate == undefined || startDate == null || startDate == '' || endDate == undefined || endDate == null || endDate == '') {
            validationErr.push({ 'error': `Bad request startDate & endDate are mandatory` });
        }
        if (startDate && endDate) {
            let stDate = moment(startDate, 'YYYY-MM-DD', true).isValid();
            let eDate = moment(endDate, 'YYYY-MM-DD', true).isValid();
            if (!stDate || !eDate) {
                validationErr.push({ 'error': `Bad request startDate & endDate should be in 'YYYY-MM-DD' formate` });
            }
        }


        if (validationErr.length > 0) {
            throw { status: 409, message: validationErr };
        } else {
            next()
        }

    }
};