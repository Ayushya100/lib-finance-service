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
    ServiceRoutesModel,
    UserRoleModel,
    RoleScopeModel,
    DashboardSettingsModel,
    UserModel,
    UserDashboardModel,
    UserFinanceModel,
    UserAccountModel,
    UserCardModel,
    PaymentMethodsModel,
    UserTagsModel,
    UserWalletCategoryModel,
    UserExpenseDetailsModel,
    UserIncomeDetailsModel,
    UserInvestmentDetailsModel,
    UserCreditExpenseDetailModel,
    MetadataModel,
    LogsModel,
    TaskAccountModel,
    ServiceConfigModel
} from './src/models/index.js';
import {
    errorHandler,
    setUserContext,
    verifyToken,
    verifyScope
} from './src/middlewares/index.js';
import {
    dbConnection,
    executeQuery,
    executeAggregation,
    baseDBTemplate,
    dashboardSettingTemplate,
    serviceRoutesTemplate,
    serviceConfigTemplate,
    userRoleTemplate,
    roleScopeTemplate,
    userDashboardTemplate,
    userTemplate,
    financeTemplate,
    userAccountTemplate,
    taskAccountTemplate,
    paymentMethodsTemplate,
    cardMethodsTemplate
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
    ServiceRoutesModel,
    UserRoleModel,
    RoleScopeModel,
    DashboardSettingsModel,
    UserModel,
    UserDashboardModel,
    UserFinanceModel,
    UserAccountModel,
    UserCardModel,
    PaymentMethodsModel,
    UserTagsModel,
    UserWalletCategoryModel,
    UserExpenseDetailsModel,
    UserIncomeDetailsModel,
    UserInvestmentDetailsModel,
    UserCreditExpenseDetailModel,
    MetadataModel,
    LogsModel,
    TaskAccountModel,
    ServiceConfigModel,
    errorHandler,
    dbConnection,
    executeQuery,
    executeAggregation,
    baseDBTemplate,
    setUserContext,
    verifyToken,
    verifyScope,
    getUserContext,
    clearUserContext,
    dashboardSettingTemplate,
    serviceRoutesTemplate,
    serviceConfigTemplate,
    userRoleTemplate,
    roleScopeTemplate,
    userDashboardTemplate,
    userTemplate,
    financeTemplate,
    userAccountTemplate,
    taskAccountTemplate,
    paymentMethodsTemplate,
    cardMethodsTemplate
};
