'use strict';

import { executeQuery } from './dbQueries.js';

class dbOperations {
    constructor(model) {
        this.model = model;
    }

    find = async(query, fields) => {
        const resourceQuery = this.model.find(query);
        if (fields) {
            resourceQuery.select(fields);
        }

        return await executeQuery(resourceQuery);
    }

    findOne = async(query, fields) => {
        const resourceQuery = this.model.findOne(query);
        if (fields) {
            resourceQuery.select(fields);
        }

        return await executeQuery(resourceQuery);
    }

    create = async(payload) => {
        return await this.model.create(payload);
    }
}

export {
    dbOperations
};
