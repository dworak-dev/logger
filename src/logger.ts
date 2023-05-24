/* eslint-disable no-console */
/**
 * @file utils/logger.ts
 * @author dworac <mail@dworac.com>
 *
 * This file contains the Logger class.
 */
import chalk from "chalk";

const padDatePart = (part: number) => {
  const { length } = part.toString();
  const padding = 2 - length;
  return `${"0".repeat(padding)}${part.toString()}`;
};

const getTimeString = () => {
  const date = new Date();
  const hours = padDatePart(date.getHours());
  const minutes = padDatePart(date.getMinutes());
  const seconds = padDatePart(date.getSeconds());

  const time = `${hours}:${minutes}:${seconds}`;

  return chalk.gray(`[${time}] `);
};

const paddPrefix = (prefix: string) => {
  const { length } = prefix;
  const padding = 9 - length;
  return `${" ".repeat(padding)}${prefix} `;
};

/**
 * Logger class.
 *
 * @class Logger
 * @example
 * import logger from './utils/logger';
 *
 * logger.logInfo('Hello World!');
 * logger.logSuccess('Hello World!');
 * logger.logError('Hello World!');
 */
class Logger {
  /**
   * Logs an info message.
   *
   * @param {string} message - Message to be printed with blue highlight.
   */
  static logInfo(message: string) {
    const prefix = chalk.blue(paddPrefix("[INFO]"));
    const msg = chalk.white(message);

    const log = `${getTimeString()}${prefix}${msg}`;
    console.log(log);
  }

  /**
   * Logs a success message.
   *
   * @param {string} message - Message to be printed with green highlight.
   */
  static logSuccess(message: string) {
    const prefix = chalk.green(paddPrefix("[SUCCESS]"));
    const msg = chalk.white(message);

    const log = `${getTimeString()}${prefix}${msg}`;
    console.log(log);
  }

  /**
   * Logs an error message.
   *
   * @param {string} message - Message to be printed with a red highlight.
   */
  static logError(message: string | Error) {
    const prefix = chalk.red(paddPrefix("[ERROR]"));
    let msg = "";

    if (typeof message === "string") {
      msg = chalk.white(message);
    } else {
      msg = chalk.white(message.stack || message.message);
    }

    const log = `${getTimeString()}${prefix}${msg}`;
    console.log(log);
  }
}

export default Logger;
