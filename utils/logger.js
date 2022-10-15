const dayjs = require("dayjs");
const { default: pino } = require("pino");
const { default: PinoPretty } = require("pino-pretty");

const log = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
})

module.exports = log;