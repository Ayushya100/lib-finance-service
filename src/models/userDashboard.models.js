'use strict';

import mongoose from 'mongoose';
import { Schema } from 'mongoose';

// User dashboard Schema
const userDashboardSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER'
        },
        settingId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'DASHBOARD_SETTINGS'
        },
        type: {
            type: String,
            required: true,
            default: 'Boolean'
        },
        value: {
            type: Schema.Types.Mixed,
            required: true
        },
        createdOn: {
            type: Date,
            required: true,
            default: Date.now()
        },
        createdBy: {
            type: String,
            required: false,
            trim: true,
            default: 'SYSTEM'
        },
        modifiedOn: {
            type: Date,
            required: true,
            default: Date.now()
        },
        modifiedBy: {
            type: String,
            required: true,
            trim: true,
            default: 'SYSTEM'
        },
        isDeleted: {
            type: Boolean,
            default: false,
            required: false
        }
    }
);

// User dashboard Model
const UserDashboardModel = mongoose.model('USER_DASHBOARD', userDashboardSchema);

export default UserDashboardModel;
