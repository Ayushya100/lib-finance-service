'use strict';

import mongoose from 'mongoose';

// User Finance Schema
const userFinanceSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER'
        },
        availableFunds: {
            type: Number,
            required: true,
            default: 0
        },
        lifeTimeIncome: {
            type: Number,
            required: true,
            default: 0
        },
        lifeTimeInvestment: {
            type: Number,
            required: true,
            default: 0
        },
        lifeTimeExpenditure: {
            type: Number,
            required: true,
            default: 0
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

// User Finance Model
const UserFinanceModel = mongoose.model('USER_FINANCE_INFO', userFinanceSchema);

export default UserFinanceModel;
