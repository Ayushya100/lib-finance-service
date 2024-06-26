'use strict';

import mongoose from 'mongoose';

// User Account Schema
const userAccountSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER',
            required: true
        },
        token: {
            type: String,
            unique: true,
            required: true
        },
        accountName: {
            type: String,
            required: true
        },
        accountNumber: {
            type: String,
            required: true,
            unique: true
        },
        accountType: {
            type: String,
            required: true
        },
        accountDate: {
            type: String,
            required: true
        },
        holderName: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            default: 0,
            required: false
        },
        isActive: {
            type: Boolean,
            default: true,
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

// user Account Model
const UserAccountModel = mongoose.model('USER_ACCOUNT', userAccountSchema);

export default UserAccountModel;
