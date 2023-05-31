/* eslint-disable no-console */
/**
 * @file utils/logger.ts
 * @author dworac <mail@dworac.com>
 *
 * This file contains the Logger class.
 */
import chalk from "chalk";
import getTimeString from "./getTimeString";

const paddPrefix = (prefix: string) => {
  const { length } = prefix;
  const padding = 9 - length;
  return `${" ".repeat(padding)}${prefix}`;
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
   * @param {any[]} messages - Messages to be printed with blue highlight.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static logInfo(...messages: any[]) {
    const prefix = chalk.blue(paddPrefix("[INFO]"));
    const time = chalk.gray(getTimeString());

    console.log(time, prefix, ...messages);
  }

  /**
   * Logs a success message.
   *
   * @param {any[]} messages - Messages to be printed with green highlight.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static logSuccess(...messages: any[]) {
    const prefix = chalk.green(paddPrefix("[SUCCESS]"));
    const time = chalk.gray(getTimeString());

    console.log(time, prefix, ...messages);
  }

  /**
   * Logs an error message.
   *
   * @param {any[]} messages - Message to be printed with a red highlight.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static logError(...messages: any[]) {
    const prefix = chalk.red(paddPrefix("[ERROR]"));
    const time = chalk.gray(getTimeString());

    console.log(time, prefix, ...messages);
  }
}

export default Logger;
