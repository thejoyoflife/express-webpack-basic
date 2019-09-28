import appRoot from "app-root-path";
import { createLogger, format, transports } from "winston";
import "winston-daily-rotate-file";

const env = process.env.NODE_ENV || "development";

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `${appRoot}/logs/%DATE%-app.log`,
  datePattern: "YYYY-MM-DD"
});

const logger = createLogger({
  level: env === "development" ? "silly" : "warn",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    }),
    dailyRotateFileTransport
  ]
});

logger.stream = {
  write: function(message, encoding) {
    logger.verbose(message);
  }
};

export default logger;
