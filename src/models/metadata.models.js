'use strict';

import mongoose from 'mongoose';

// Metadata Schema
const metadataSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER'
        },
        type: {
            type: String,
            required: true
        },
        header: {
            type: String,
            required: true
        },
        values: {
            type: String,
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

// Metadata Model
const MetadataModel = mongoose.model('METADATA', metadataSchema);

export default MetadataModel;
