'use strict';

import httpContext from 'express-http-context';
import { createNamespace } from 'cls-hooked';
import { v4 as uuidv4 } from 'uuid';
import { logger } from '../utils/index.js';

const header = 'middleware: user-context';
const log = logger(header);

const setContext = (req, res, next) => {
    log.http(`Original URL : ${req.originalUrl}`);
    log.http(`Base URL : ${req.baseUrl || null}`);
    log.http(`Method : ${req.method}`);
    log.http(`Protocol : ${req.protocol}`)
    log.verbose(`Access Token : ${req.cookies?.accessToken}`);
    log.verbose(`Refresh Token : ${req.cookies?.refreshToken}`);
    log.verbose(`Request Time : ${new Date(Date.now())}`);
    log.verbose(`Request Rate Limit : ${req.rateLimit?.limit}`);
    log.verbose(`Request Rate Used : ${req.rateLimit?.used}`);
    log.verbose(`Request Rate Remaining : ${req.rateLimit?.remaining}`);
    log.verbose(`Request Rate Reset Time : ${req.rateLimit?.resetTime}`);
    log.verbose(`Raw Headers : ${req.rawHeaders}`);

    const userNamespace = createNamespace('userNamespace');

    try {
        log.info('User Context build started');

        userNamespace.run(() => {
            const logSessionId = 'LSI' + uuidv4();
            const userId =
                req.params.userId === null || req.params.userId === undefined
                ? req.params.userId
                : req.body.userId === null || req.body.userId === undefined
                ? req.body.userId
                : null;
            const userPayload = {...req.body};

            httpContext.set('method', req.method);
            httpContext.set('url', req.originalUrl);
            httpContext.set('userId', userId);
            httpContext.set('headers', req.params);
            httpContext.set('body', userPayload);
            httpContext.set('logSessionId', logSessionId);
        });
    } catch (err) {
        log.error('Could not set user context for the current request');
        httpContext.set('method', null);
        httpContext.set('url', null);
        httpContext.set('userId', null);
        httpContext.set('headers', null);
        httpContext.set('body', null);
        httpContext.set('logSessionId', null);
    } finally {
        log.info('User Context build completed');
        next();
    }
}

const setUserContext = (app) => {
    app.use(httpContext.middleware);
    app.use(setContext);
}

export default setUserContext;
