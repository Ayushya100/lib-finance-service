'use strict';

import mongoose from 'mongoose';

// User Expenditure Details Schema
const userExpenseDetailSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserWalletCategory'
        },
        cardToken: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        },
        detail: {
            type: String,
            required: false
        },
        transactionDate: {
            type: Date,
            default: Date.now(),
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

// User Expenditure Details Model
const UserExpenseDetailsModel = mongoose.model('USER_EXPENSE', userExpenseDetailSchema);

export default UserExpenseDetailsModel;
