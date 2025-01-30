const { createLogger, format, transports } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const { combine, timestamp, printf, colorize } = format;

//Define your custom format
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
})

//Create the logger
const logger = createLogger({
    level: 'info', // Set the default log level
    format: combine(
        timestamp(),
        colorize(),
        myFormat
    ),
    transports: [
        new transports.Console(), // Log to the console
        new DailyRotateFile({
            filename: 'error.log',
            datePattern: ' YYYY-MM-DD',
            level: 'error'
        }),
        new DailyRotateFile({
            filename: 'combined.log',
            datePattern: 'YYYY-MM-DD'
        })
    ]
});

module.exports = logger;