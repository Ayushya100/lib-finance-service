'use strict';

import { baseDBTemplate } from './index.js';
import {
    DashboardSettingsModel,
    RoleScopeModel,
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
        const fields = 'roleCode roleName isActive isDefault';
        super(UserRoleModel, fields);
    }
}

class roleScopeTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'roleId scope scopeDesc';
        super(RoleScopeModel, fields);
    };
}

export {
    dashboardSettingTemplate,
    serviceRoutesTemplate,
    userRoleTemplate,
    roleScopeTemplate
};
