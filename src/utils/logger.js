'use strict';

import winston from 'winston';

const customLevels = {
    levels: {
        error: 0,
        warning: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        success: 6
    },
    colors: {
        error: 'red',
        warning: 'yellow',
        info: 'green',
        http: 'magenta',
        verbose: 'cyan',
        debug: 'blue',
        success: 'green'
    }
};

const buildTransporter = () => {
    return [
        new winston.transports.Console()
    ];
}

const buildFormat = (label) => {
    return winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true }),
        winston.format.label({ label: label }),
        winston.format.printf(info => {
            return `${info.timestamp} - ${info.level} [${info.label}]: ${info.message}`;
        })
    );
}

const logger = (label = '') => {
    const format = buildFormat(label);
    const transport = buildTransporter();
    winston.addColors(customLevels.colors);

    return winston.createLogger({
        levels: customLevels.levels,
        level: 'debug',
        format: format,
        transports: transport
    });
}

export default logger;
