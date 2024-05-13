'use strict';

import mongoose from 'mongoose';

// Role Scope Schema
const roleScopeSchema = new mongoose.Schema(
    {
        roleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER_ROLE'
        },
        scope: {
            type: String,
            trim: true,
            required: true
        },
        scopeDesc: {
            type: String,
            required: true
        },
        createdOn: {
            type: Date,
            required: true,
            default: Date.now()
        },
        createdBy: {
            type: String,
            default: 'SYSTEM',
            required: false,
            trim: true
        },
        modifiedOn: {
            type: Date,
            required: true,
            default: Date.now()
        },
        modifiedBy: {
            type: String,
            default: 'SYSTEM',
            required: false,
            trim: true
        },
        isDeleted: {
            type: Boolean,
            required: true,
            default: false
        }
    }
);

// Role Scope Model
const RoleScopeModel = mongoose.model('ROLE_SCOPE', roleScopeSchema);

export default RoleScopeModel;
