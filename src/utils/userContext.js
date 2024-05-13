'use strict';

import httpContext from 'express-http-context';

const getUserContext = () => {
    const userId = httpContext.get('userId');
    const method = httpContext.get('method');
    const url = httpContext.get('url');
    const headers = httpContext.get('headers');
    const body = httpContext.get('body');
    const logSessionId = httpContext.get('logSessionId');

    return {
        userId,
        method,
        url,
        headers,
        body,
        logSessionId
    };
}

const clearUserContext = () => {
    httpContext.clear();
}

export {
    getUserContext,
    clearUserContext
};
