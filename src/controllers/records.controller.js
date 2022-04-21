/**
 * 
 * @param {*} req request for the API
 * @param {*} res response to be send
 * @param {*} next (optional) middleware
 */

const recordsModel = require('../models/records/records.models');
const dbInstance = require('../models/db.connection');
const { recordService } = require('../services/records/records.service');

async function RecordsController(req, res, next) {

    await dbInstance.DBConnection.open();
    const conditions = {
        startDate,
        endDate,
        minCount,
        maxCount
    } = req.body

    await recordService(recordsModel).getRecords(conditions)
        .then((records) => {
            res.json({
                code: 0,
                msg: "Success",
                records
            })
        })
        .catch((e) => {
            res.status(500).send({
                code: e.code,
                message: e.message
            })
        });

}

module.exports = {
    RecordsController
}