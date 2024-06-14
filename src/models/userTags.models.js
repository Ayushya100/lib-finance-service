'use strict';

import mongoose from 'mongoose';

// User Tags Schema
const userTagsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER'
        },
        tagName: {
            type: String,
            required: true
        },
        tagDescription: {
            type: String
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

// User Tags Model
const UserTagsModel = mongoose.model('USER_TAG', userTagsSchema);

export default UserTagsModel;
