'use strict';

import mongoose from 'mongoose';

// User Wallet Category Schema
const userWalletCategorySchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER'
        },
        categoryType: {
            type: String,
            required: true,
            trim: true
        },
        categoryName: {
            type: String,
            required: true
        },
        categoryDescription: {
            type: String
        },
        icon: {
            type: String
        },
        color: {
            type: String
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

// User Credit Card Model
const UserWalletCategoryModel = mongoose.model('WALLET_CATEGORY', userWalletCategorySchema);

export default UserWalletCategoryModel;
