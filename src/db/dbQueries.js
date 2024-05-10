'use strict';

// Add DB Model
import { LogsModel } from '../models/index.js';
import { logDBQueryRes, logDBAggregationRes } from '../utils/index.js';

const registerLog = async(logPayload) => {
    await LogsModel.create(logPayload);
}

const executeQuery = async(query) => {
    logDBQueryRes(query);
    return await query.exec();
}

const executeAggregation = async(aggregateQuery) => {
    logDBAggregationRes(aggregateQuery);
    return await aggregateQuery.exec();
}

export {
    registerLog,
    executeQuery,
    executeAggregation
};
