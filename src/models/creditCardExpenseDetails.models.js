'use strict';

import mongoose from 'mongoose';

// User Credit Card Expense Details Schema
const creditCardExpenseDetailsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER'
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER_WALLET_CATEGORY'
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
            required: true
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

// User Credit Card Expense Details Model
const CreditCardExpenseModel = mongoose.model('CREDIT_CARD_EXPENSE', creditCardExpenseDetailsSchema);

export default CreditCardExpenseModel;
