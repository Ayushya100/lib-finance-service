'use strict';

import { executeQuery } from './dbQueries.js';

class baseDBTemplate {
    constructor(model, fields) {
        this.model = model;
        this.fields = fields;
    }

    find = async(query, customFields) => {
        const resourceQuery = this.model.find(query);
        const requestedFields = customFields || this.fields;
        if (requestedFields) {
            resourceQuery.select(requestedFields);
        }

        return await executeQuery(resourceQuery);
    }

    findOne = async(query, customFields) => {
        const resourceQuery = this.model.findOne(query);
        const requestedFields = customFields || this.fields;
        if (requestedFields) {
            resourceQuery.select(requestedFields);
        }

        return await executeQuery(resourceQuery);
    }

    create = async(payload) => {
        return await this.model.create(payload);
    }

    findByIdAndUpdate = async(userId, condition, newValues, customFields) => {
        const resourceQuery = this.model.findByIdAndUpdate(
            condition,
            {
                $set: {
                    ...newValues,
                    modifiedOn: Date.now(),
                    modifiedBy: userId
                }
            },
            {
                new: true
            }
        );
        const requestedFields = customFields || this.fields;
        
        if (requestedFields) {
            resourceQuery.select(requestedFields);
        }
        return await executeQuery(resourceQuery);
    }
}

export {
    baseDBTemplate
};
