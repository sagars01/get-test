const { RecordsController } = require('../src/controllers/records.controller');
const { recordService } = require('../src/services/records/records.service');

describe(("Controllers: Record Controller Test Suite"), () => {

    test(("should return true"), (done) => {
        const p = Promise.resolve();
        const mockReq = {
            body: {
                "startDate": "2016-01-26",
                "endDate": "2018-02-02",
                "minCount": 100,
                "maxCount": 200
            }
        }
        const funcBSpy = jest.fn().mockReturnValue(Promise.resolve({ success: true }));
        recordService(mockReq.body).getRecords = (funcBSpy)
        RecordsController(mockReq, {})
        await p
        expect(funcBSpy).toHaveBeenCalled()
    })
})