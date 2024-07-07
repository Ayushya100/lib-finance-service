'use strict';

import mongoose from 'mongoose';

// Service Config Schema
const serviceConfigSchema = new mongoose.Schema(
    {
        microservice: {
            type: String,
            required: true
        },
        environment: {
            type: String,
            required: true
        },
        protocol: {
            type: String,
            required: true
        },
        port: {
            type: Number,
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

// Service Config model
const ServiceConfigModel = mongoose.model('SERVICE_CONFIGS', serviceConfigSchema);

export default ServiceConfigModel;
