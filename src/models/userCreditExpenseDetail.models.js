'use strict';

import mongoose from 'mongoose';

// User Credit Expense Details Schema
const userCreditExpenseDetailSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER'
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'WALLET_CATEGORY'
        },
        cardToken: {
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

// User Credit Expense Details Model
const UserCreditExpenseDetailModel = mongoose.model('USER_CREDIT_EXPENSE', userCreditExpenseDetailSchema);

export default UserCreditExpenseDetailModel;
