'use strict';

import { baseDBTemplate } from './index.js';
import {
    DashboardSettingsModel,
    PaymentMethodsModel,
    RoleScopeModel,
    ServiceConfigModel,
    ServiceRoutesModel,
    TaskAccountModel,
    UserAccountModel,
    UserCardModel,
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

class serviceConfigTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'microservice environment port isDeleted';
        super(ServiceConfigModel, fields);
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
        const fields = 'roleId scope scopeDescription';
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

class userAccountTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'userId token accountName accountNumber accountType accountDate holderName amount isActive';
        super(UserAccountModel, fields);
    }
}

class taskAccountTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'userId debitFrom creditTo taskType duration durationCount interestApplicable interestRate startDate endDate afterEndDepositTo nextDepositDate';
        super(TaskAccountModel, fields);
    }
}

class paymentMethodsTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'userId accountId token paymentName paymentNumber paymentType balance isActive';
        super(PaymentMethodsModel, fields);
    }
}

class cardMethodsTemplate extends baseDBTemplate {
    constructor() {
        const fields = 'userId accountId token cardNumber cardType holderName balance isActive';
        super(UserCardModel, fields);
    }
}

export {
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
