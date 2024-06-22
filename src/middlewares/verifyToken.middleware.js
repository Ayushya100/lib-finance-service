'use strict';

import jwt from 'jsonwebtoken';
import { logger } from '../utils/index.js';
import { getUserLang } from '../db/index.js';
import { setUserLanguage } from '../utils/index.js';

const header = 'middleware: verify-token';
const log = logger(header);

const verifyToken = (tokenKey) => async(req, res, next) => {
    try {
        log.info('Token verification for user started');
        const accessToken = req.cookies?.accessToken || req.header('Authorization')?.replace('Bearer ', '');

        if (!accessToken) {
            log.error('Token not received for the requested user');
            return next({
                resType: 'BAD_REQUEST',
                resMsg: 'TOKEN NOT FOUND',
                isValid: false
            });
        }

        log.info('Successfully retrieved user token');
        const decodedToken = jwt.verify(accessToken, tokenKey);
        if ((req.params.userId) && (req.params.userId !== decodedToken._id)) {
            log.error('User mismatched');
            return next({
                resType: 'UNAUTHORIZED',
                resMsg: 'UNAUTHORIZED ACCESS - USER MISMATCHED',
                isValid: false
            });
        }

        let userLanguage = await getUserLang(decodedToken._id);
        userLanguage = userLanguage[0];
        setUserLanguage(userLanguage.value);

        req.user = {
            userId: decodedToken._id,
            userRole: decodedToken.userRole,
            userScopes: decodedToken.userScopes
        };
        log.info('Token verification completed successfully');
        next();
    } catch (err) {
        next({
            resType: 'UNAUTHORIZED',
            resMsg: 'UNAUTHORIZED ACCESS - TOKEN EXPIRED',
            stack: err.stack,
            isValid: false
        });
    }
}

export default verifyToken;
