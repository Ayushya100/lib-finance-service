'use strict';

import mongoose from 'mongoose';

// User Cards Schema
const userCardsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER',
            required: true
        },
        accountId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER_ACCOUNT'
        },
        token: {
            type: String,
            unique: true,
            required: true
        },
        cardNumber: {
            type: String,
            required: true,
            unique: true
        },
        cardType: {
            type: String,
            required: true
        },
        expirationDate: {
            type: String,
            required: true
        },
        holderName: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: false
        },
        balance: {
            type: Number,
            default: 0
        },
        isActive: {
            type: Boolean,
            required: true,
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

// User Card Model
const UserCardModel = mongoose.model('USER_CARD', userCardsSchema);

export default UserCardModel;
