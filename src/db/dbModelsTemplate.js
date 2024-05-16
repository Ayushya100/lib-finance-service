'use strict';

import { baseDBTemplate } from './index.js';
import {
    DashboardSettingsModel,
    ServiceRoutesModel,
    UserRoleModel
} from '../models/index.js';

class dashboardSettingTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'categoryName categoryDescription categoryType subCategory type isPeriodic duration';
        super(DashboardSettingsModel, fields);
    }
}

class serviceRoutesTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'path microservice port method validations';
        super(ServiceRoutesModel, fields);
    }
}

class userRoleTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'roleCode roleName isActive';
        super(UserRoleModel, fields);
    }
}

export {
    dashboardSettingTemplate,
    serviceRoutesTemplate,
    userRoleTemplate
};
