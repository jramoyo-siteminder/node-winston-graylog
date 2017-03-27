'use strict';

var moment = require('moment');
var winston = require('winston');
var WinstonGraylog2 = require('winston-graylog2');
var logger = new (winston.Logger)({
    exitOnError: false,
    transports: [
        new (winston.transports.Console)({
            level: 'debug',
            timestamp: function () {
                return moment().format('YYYY-MM-DD HH:mm:ss.SSSS');
            }
        }),
        new (WinstonGraylog2)({
            name: 'Graylog',
            level: 'debug',
            // silent: false,
            // handleExceptions: false,
            prelog: function (msg) {
                return msg.trim();
            },
            graylog: {
                servers: [{ host: '0.0.0.0', port: 12201 }],
                // hostname: 'myServer',
                facility: 'node-winston-graylog',
                // bufferSize: 1400
            },
            staticMeta: { env: 'development' }
        })]
});

logger.debug('This is a debug log.', { key1: 'value1', key2: 'value2', key3: 'value3' });
logger.info('This is an info log.', { key1: 'value1', key2: 'value2', key3: 'value3' });
logger.warn('This is a warning log.', { key1: 'value1', key2: 'value2', key3: 'value3' });
logger.error('This is an error log.', new Error('something happened'));