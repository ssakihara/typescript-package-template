import log4js, { Level, LoggingEvent } from 'log4js';

const level = process.env.LOG_LEVEL ?? 'info';
const appenders = process.env.K_SERVICE ? ['gcp'] : ['console', 'file'];

const gcpAppender = (logEvent: LoggingEvent) => {
  const entry: {
    errorMessage?: Error;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jsonPayload?: any[];
    message?: string;
    severity: Level;
  } = {
    severity: logEvent.level ?? 'DEBUG',
  };

  if (logEvent?.error) {
    entry.errorMessage = logEvent?.error;
  } else if (typeof logEvent?.data?.[0] == 'string' && logEvent?.data.length === 1) {
    entry.message = logEvent?.data?.[0];
  } else if (logEvent?.data.length === 1) {
    entry.jsonPayload = { ...logEvent?.data[0] };
  } else {
    entry.jsonPayload = logEvent?.data;
  }

  console.log(entry);
};

log4js.configure({
  appenders: {
    console: {
      type: 'console',
      layout: { type: 'pattern', pattern: '%[%m%]' },
    },
    file: {
      type: 'file',
      filename: 'debug.log',
      layout: { type: 'pattern', pattern: '%d{yyyy-MM-dd hh:mm:ss} %p %m' },
    },
    gcp: {
      type: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        configure: (config, layouts, findAppender, levels) => {
          return gcpAppender;
        },
      },
    },
  },
  categories: { default: { appenders, level } },
});

const logger = log4js.getLogger();

export { logger };
