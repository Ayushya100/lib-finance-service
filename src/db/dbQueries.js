'use strict';

// Add DB Model
import mongoose from 'mongoose';
import { LogsModel } from '../models/index.js';
import { logDBQueryRes, logDBAggregationRes } from '../utils/index.js';
import { userDashboardTemplate } from './dbModelsTemplate.js';

const registerLog = async(logPayload) => {
    await LogsModel.create(logPayload);
}

const getUserLang = async(userId) => {
    const matchQuery = {
        userId: new mongoose.mongoose.Types.ObjectId(userId),
        isDeleted: false
    };
    const lookupRecord = {
        from: 'dashboard_settings',
        localField: 'settingId',
        foreignField: '_id',
        as: 'dashboard'
    };
    const lookupQuery = {
        'dashboard.categoryName': 'user-language',
        'dashboard.isDeleted': false
    };
    const lookupFields = {
        'categoryName': {
            $arrayElemAt: ['$dashboard.categoryName', 0]
        },
        'categoryDescription': {
            $arrayElemAt: ['$dashboard.categoryDescription', 0]
        },
        'categoryType': {
            $arrayElemAt: ['$dashboard.categoryType', 0]
        },
        'subCategory': {
            $arrayElemAt: ['$dashboard.subCategory', 0]
        }
    };
    const projectionFields = {
        'categoryName': 1,
        'categoryDescription': 1,
        'categoryType': 1,
        'subCategory': 1,
        'type': 1,
        'value': 1
    };

    const dashboardDB = new userDashboardTemplate();
    return await dashboardDB.aggregate(matchQuery, lookupRecord, lookupQuery, lookupFields, projectionFields);
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
    getUserLang,
    executeQuery,
    executeAggregation
};
