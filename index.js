'use strict';

import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
});

import { responseCodes, responseMessage } from './src/assets/response/response-codes.js';
import {
    ApiError,
    ApiResponse,
    buildApiError,
    buildApiResponse,
    logger,
    createNewLog,
    logDBQueryRes,
    logDBAggregationRes
} from './src/utils/index.js';
import {
    UserModel,
    CardInfoModel,
    InvestmentAccountInfoModel,
    UserWalletCategoryModel,
    CreditCardExpenseModel,
    DashboardSettingsModel,
    UserDashboardModel,
    UserExpenseDetailsModel,
    UserFinanceModel,
    UserIncomeDetailsModel,
    UserInvestmentDetailsModel,
    MetadataModel,
    LogsModel,
    ServiceRoutesModel
} from './src/models/index.js';
import {
    errorHandler,
    registerUser
} from './src/middlewares/index.js';
import dbConnection from './src/db/dbConnection.js';
import { executeQuery, executeAggregation } from './src/db/dbQueries.js';
import { dbOperations } from './src/db/baseDBQueries.js';

export {
    ApiError,
    ApiResponse,
    responseCodes,
    responseMessage,
    buildApiError,
    buildApiResponse,
    logger,
    createNewLog,
    logDBQueryRes,
    logDBAggregationRes,
    UserModel,
    CardInfoModel,
    InvestmentAccountInfoModel,
    UserWalletCategoryModel,
    CreditCardExpenseModel,
    DashboardSettingsModel,
    UserDashboardModel,
    UserExpenseDetailsModel,
    UserFinanceModel,
    UserIncomeDetailsModel,
    UserInvestmentDetailsModel,
    MetadataModel,
    LogsModel,
    ServiceRoutesModel,
    errorHandler,
    registerUser,
    dbConnection,
    executeQuery,
    executeAggregation,
    dbOperations
};