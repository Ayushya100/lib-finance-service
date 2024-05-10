'use strict';

import winston from 'winston';

const customLevels = {
    levels: {
        error: 0,
        warning: 1,
        info: 2,
        success: 3,
        http: 4,
        verbose: 5,
        debug: 6
    },
    colors: {
        error: 'red',
        warning: 'yellow',
        info: 'blue',
        success: 'green',
        http: 'magenta',
        verbose: 'cyan',
        debug: 'teal'
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
