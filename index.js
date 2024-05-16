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
    logDBAggregationRes,
    getUserContext,
    clearUserContext
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
    ServiceRoutesModel,
    RoleScopeModel,
    UserRoleModel
} from './src/models/index.js';
import {
    errorHandler,
    setUserContext,
    verifyToken
} from './src/middlewares/index.js';
import {
    dbConnection,
    executeQuery,
    executeAggregation,
    baseDBTemplate,
    dashboardSettingTemplate,
    serviceRoutesTemplate,
    userRoleTemplate
} from './src/db/index.js';

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
    RoleScopeModel,
    UserRoleModel,
    errorHandler,
    dbConnection,
    executeQuery,
    executeAggregation,
    baseDBTemplate,
    setUserContext,
    verifyToken,
    getUserContext,
    clearUserContext,
    dashboardSettingTemplate,
    serviceRoutesTemplate,
    userRoleTemplate
};
