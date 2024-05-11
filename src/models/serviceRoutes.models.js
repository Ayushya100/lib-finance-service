'use strict';

import mongoose from 'mongoose';

// Service Routes Schema
const serviceRoutesSchema = new mongoose.Schema(
    {
        path: {
            type: String,
            required: true
        },
        microservice: {
            type: String,
            required: true
        },
        port: {
            type: Number,
            required: true
        },
        method: {
            type: String,
            enum: ['GET', 'POST', 'PUT', 'DELETE'],
            default: 'GET'
        },
        validations: [{
            type: String,
            required: false
        }],
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
        }
    }
);

// Service Routes model
const ServiceRoutesModel = mongoose.model('SERVICE_ROUTES', serviceRoutesSchema);

export default ServiceRoutesModel;
