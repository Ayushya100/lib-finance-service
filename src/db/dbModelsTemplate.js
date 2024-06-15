'use strict';

import { baseDBTemplate } from './index.js';
import {
    DashboardSettingsModel,
    RoleScopeModel,
    ServiceRoutesModel,
    UserDashboardModel,
    UserFinanceModel,
    UserModel,
    UserRoleModel
} from '../models/index.js';

class dashboardSettingTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'categoryName categoryDescription categoryType subCategory type isPeriodic duration default';
        super(DashboardSettingsModel, fields);
    }
}

class serviceRoutesTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'path microservice port method validations isDeleted';
        super(ServiceRoutesModel, fields);
    }
}

class userRoleTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'roleCode roleName isActive isDefault isDeleted';
        super(UserRoleModel, fields);
    }
}

class roleScopeTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'roleId scope scopeDesc';
        super(RoleScopeModel, fields);
    };
}

class userDashboardTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'userId settingId type value';
        super(UserDashboardModel, fields);
    }
}

class userTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'roleId firstName lastName userName emailId profileImageURL lastLogin loginCount isVerified isDeleted';
        super(UserModel, fields);
    }
}

class financeTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'userId availableFunds lifeTimeIncome lifeTimeInvestment lifeTimeExpenditure';
        super(UserFinanceModel, fields);
    }
}

export {
    dashboardSettingTemplate,
    serviceRoutesTemplate,
    userRoleTemplate,
    roleScopeTemplate,
    userDashboardTemplate,
    userTemplate,
    financeTemplate
};
