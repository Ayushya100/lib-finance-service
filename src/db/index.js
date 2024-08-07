'use strict';

import dbConnection from './dbConnection.js';
import {
    executeQuery,
    executeAggregation,
    getUserLang
} from './dbQueries.js';
import { baseDBTemplate } from './baseDBTemplate.js';
import {
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
} from './dbModelsTemplate.js';

export {
    dbConnection,
    executeQuery,
    executeAggregation,
    getUserLang,
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
};
