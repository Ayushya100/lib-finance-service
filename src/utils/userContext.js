'use strict';

import httpContext from 'express-http-context';

let userLanguage = 'eng';

const setUserLanguage = (userLang) => {
    userLanguage = userLang;
}

const getUserContext = () => {
    const userId = httpContext.get('userId');
    const method = httpContext.get('method');
    const url = httpContext.get('url');
    const headers = httpContext.get('headers');
    const body = httpContext.get('body');
    const logSessionId = httpContext.get('logSessionId');
    const userLang = userLanguage;

    return {
        userId,
        method,
        url,
        headers,
        body,
        logSessionId,
        userLang
    };
}

const clearUserContext = () => {
    httpContext.clear();
}

export {
    setUserLanguage,
    getUserContext,
    clearUserContext
};
