'use strict';

import mongoose from 'mongoose';

// Payment Methods Schema
const paymentMethodsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER'
        },
        accountId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER_ACCOUNT'
        },
        token: {
            type: String,
            required: true,
            unique: true
        },
        paymentNumber: {
            type: String,
            unique: true
        },
        paymentType: {
            type: String,
            enum: ['CASH', 'UPI', 'INTERNET-BANKING', 'MOBILE-BANKING', 'CHEQUE', 'DEMAND-DRAFT'],
            required: true
        },
        balance: {
            type: Number,
            default: 0
        },
        isActive: {
            type: Boolean,
            default: true,
            required: true
        },
        createdOn: {
            type: Date,
            default: Date.now()
        },
        createdBy: {
            type: String,
            default: 'SYSTEM',
            trim: true
        },
        modifiedOn: {
            type: Date,
            default: Date.now()
        },
        modifiedBy: {
            type: String,
            default: 'SYSTEM',
            trim: true
        },
        isDeleted: {
            type: Boolean,
            required: true,
            default: false
        }
    }
);

// Payment Methods Model
const PaymentMethodsModel = mongoose.model('PAYMENT_METHOD', paymentMethodsSchema);

export default PaymentMethodsModel;
