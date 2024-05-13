'use strict';

import mongoose from 'mongoose';

// User Role Schema
const userRoleSchema = new mongoose.Schema(
    {
        roleCode: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            upperCase: true
        },
        roleName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        isActive: {
            type: Boolean,
            default: true
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

// User Role Model
const UserRoleModel = mongoose.model('USER_ROLE', userRoleSchema);

export default UserRoleModel;
