/**
 * @file index.ts
 * @author dworac <mail@dworac.com>
 *
 * This is the entry point for the application.
 */

import Logger from "./logger";

Logger.logInfo("hey");
Logger.logError("hey");
Logger.logSuccess("hey");

export default Logger;
