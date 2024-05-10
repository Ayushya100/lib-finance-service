'use strict';

import { v4 as uuidv4 } from 'uuid';
import { currentUserContext } from '../utils/index.js';
import { logger } from '../utils/index.js';

const header = 'middleware: user-context';
const log = logger(header);

const registerUser = (req, res, next) => {
    currentUserContext.method = req.method;
    currentUserContext.url = req.originalUrl;
    currentUserContext.userId = req.params?.userId;
    currentUserContext.headers = req.params;
    currentUserContext.body = {...req.body};
    currentUserContext.logSessionId = 'LSI' + uuidv4();

    log.http(`Original URL : ${req.originalUrl}`);
    log.http(`Base URL : ${req.baseUrl || null}`);
    log.http(`Method : ${req.method}`);
    log.verbose(`Access Token : ${req.cookies?.accessToken}`);
    log.verbose(`Refresh Token : ${req.cookies?.refreshToken}`);
    log.verbose(`Request Time : ${new Date(Date.now())}`);
    log.verbose(`Request Rate Limit : ${req.rateLimit.limit}`);
    log.verbose(`Request Rate Used : ${req.rateLimit.used}`);
    log.verbose(`Request Rate Remaining : ${req.rateLimit.remaining}`);
    log.verbose(`Request Rate Reset Time : ${req.rateLimit.resetTime}`);
    log.verbose(`Raw Headers : ${req.rawHeaders}`);

    next();
}

export default registerUser;
