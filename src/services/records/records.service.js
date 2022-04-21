class RecordService {

    constructor(recordModel) {
        this.recordModel = recordModel;
    }

    async getRecords(conditions) {
        try {
            let pip = [
                {
                    $match: {
                        createdAt: {
                            $gt: new Date(conditions.startDate),
                            $lt: new Date(conditions.endDate)
                        }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        key: 1,
                        createdAt: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                        totalCount: { $sum: "$counts" }
                    }
                },
                {
                    $match: {
                        totalCount: {
                            $gte: conditions.minCount,
                            $lte: conditions.maxCount
                        }
                    }
                }
            ]



            let matchingData = await this.recordModel.aggregate(pip);
            return matchingData;
        } catch (e) {
            throw { status: e.status || 500, message: e.message || e };
        }
    }

}

module.exports = {
    recordService: function (recordModel) {
        return new RecordService(recordModel)
    }
}