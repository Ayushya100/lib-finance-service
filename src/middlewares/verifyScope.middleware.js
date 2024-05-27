'use strict';

import { logger } from '../utils/index.js';

const header = 'middleware: verify-scope';
const log = logger(header);

const verifyScope = (scope) => async(req, res, next) => {
    try {
        log.info('Scope verification for user started');
        const userId = req.user.userId;
        const userRole = req.user.userRole;
        const userScopes = req.user.userScopes;

        if (!userScopes.includes(scope)) {
            log.error('User does not contain required scope');
            return next({
                resType: 'UNAUTHORIZED',
                resMsg: 'UNAUTHORIZED ACCESS - SCOPE NOT FOUND',
                isValid: false
            });
        }

        log.info('Scope verification for user completed successfully');
        next();
    } catch (err) {
        next({
            resType: 'UNAUTHORIZED',
            resMsg: 'UNAUTHORIZED ACCESS - SCOPE NOT FOUND',
            stack: err.stack,
            isValid: false
        });
    }
}

export default verifyScope;
