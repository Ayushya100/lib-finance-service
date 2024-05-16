'use strict';

import { registerLog } from '../db/dbQueries.js';
import { responseCodes, responseMessage } from '../assets/response/response-codes.js';
import logger from './logger.js';
import { getUserContext } from './userContext.js';

const getCurrentDateTime = () => {
    let dateNow = new Date();
    dateNow.setDate(dateNow.getDate());

    let date = ('0' + dateNow.getDate()).slice(-2);
    let month = ('0' + (dateNow.getMonth() + 1)).slice(-2);
    let year = dateNow.getFullYear();
    let hour = ('0' + dateNow.getHours()).slice(-2);
    let minutes = ('0' + dateNow.getMinutes()).slice(-2);
    let seconds = ('0' + dateNow.getSeconds()).slice(-2);
    let milliSeconds = ('0' + dateNow.getMilliseconds()).slice(-3);

    let todayDate = year + '-' + month + '-' + date + ' ' + hour + ':' + minutes + ':' + seconds + ':' + milliSeconds;
    return todayDate;
}

const buildResponse = (response) => {
    if (response) {
        return {
            statusCode: responseCodes[response.resType],
            statusMsg: response.resMsg + ' - ' + responseMessage[response.resType],
            response: response.data
        };
    }

    return null;
}

const buildPayload = (source, msg, toBeRemoved, level, response, additionalInfo) => {
    const userContext = getUserContext();
    if (toBeRemoved) {
        for (let field of toBeRemoved) {
            userContext.body[field] = null;
        };
    }

    let logPayload = {
        logSessionId: userContext.logSessionId,
        userId: userContext.userId,
        message: msg,
        level: level,
        timeStamp: getCurrentDateTime(),
        source: source || 'route',
        requestData: {
            method: userContext.method,
            url: userContext.url,
            headers: userContext.headers,
            body: userContext.body
        },
        responseData: buildResponse(response),
        additionalInfo: additionalInfo
    }

    return logPayload;
}

const buildCustomPayload = (source, userId, msg, level, response, additionalInfo, headers, body) => {
    const userContext = getUserContext();
    let logPayload = {
        logSessionId: userContext.logSessionId,
        userId: userId || userContext.userId,
        message: msg,
        level: level,
        timeStamp: getCurrentDateTime(),
        source: source || 'route',
        requestData: {
            method: userContext.method,
            url: userContext.url,
            headers: headers,
            body: body
        },
        responseData: buildResponse(response),
        additionalInfo: additionalInfo
    }

    return logPayload;
}

const createNewLog = (source) => {
    return {
        createInfoLog: async(msg = '', toBeRemoved = null, response = null, additionalInfo = '') => {
            const buildLogPayload = buildPayload(source, msg, toBeRemoved, 'info', response, additionalInfo);
            await registerLog(buildLogPayload);
        },
        createDebugLog: async(msg = '', toBeRemoved = null, response = null, additionalInfo = '') => {
            const buildLogPayload = buildPayload(source, msg, toBeRemoved, 'debug', response, additionalInfo);
            await registerLog(buildLogPayload);
        },
        createWarnLog: async(msg = '', toBeRemoved = null, response = null, additionalInfo = '') => {
            const buildLogPayload = buildPayload(source, msg, toBeRemoved, 'warn', response, additionalInfo);
            await registerLog(buildLogPayload);
        },
        createErrorLog: async(msg = '', toBeRemoved = null, response = null, additionalInfo = '') => {
            const buildLogPayload = buildPayload(source, msg, toBeRemoved, 'error', response, additionalInfo);
            await registerLog(buildLogPayload);
        },
        createCustomLog: async(userId = null, msg = '', toBeRemoved = null, level, response = null, additionalInfo = '') => {
            const buildLogPayload = buildCustomPayload(source, userId, msg, toBeRemoved, level, response, additionalInfo, headers = {}, body = {});
            await registerLog(buildLogPayload);
        }
    }
}

const logDBQueryRes = (dbQuery) => {
    const log = logger('db');
    log.debug('Started DB Query build');
    log.debug(`Query: ${JSON.stringify(dbQuery.getQuery(), null, 2)}`);
}

const logDBAggregationRes = (dbAggregation) => {
    const log = logger('db');
    log.debug('Started DB Aggregation Query build');
    log.debug(`Query: ${JSON.stringify(dbAggregation.pipeline(), null, 2)}`);
}

export {
    createNewLog,
    logDBQueryRes,
    logDBAggregationRes
};