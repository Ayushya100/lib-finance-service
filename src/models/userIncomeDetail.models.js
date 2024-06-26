'use strict';

import mongoose from 'mongoose';

// User Income Details Schema
const userIncomeDetailSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER'
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'WALLET_CATEGORY'
        },
        accountType: {
            type: String,
            required: true
        },
        accountToken: {
            type: String,
            required: true
        },
        tags: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER_TAG'
        }],
        amount: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        },
        detail: {
            type: String
        },
        transactionDate: {
            type: Date,
            required: true,
            default: Date.now()
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

// User Income Details Model
const UserIncomeDetailsModel = mongoose.model('USER_INCOME', userIncomeDetailSchema);

export default UserIncomeDetailsModel;
