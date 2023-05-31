/**
 * @file utils/logger.ts
 * @author dworac <mail@dworac.com>
 *
 * This file contains the unit testing for the logger class.
 */
import Logger from "./logger";

describe("Logger", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("should log info messages correctly", () => {
    const message = "Info message";
    Logger.logInfo(message);
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][1]).toContain("[INFO]");
    expect(consoleSpy.mock.calls[0][2]).toContain(message);
  });

  it("should log success messages correctly", () => {
    const message = "Success message";
    Logger.logSuccess(message);
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][1]).toContain("[SUCCESS]");
    expect(consoleSpy.mock.calls[0][2]).toContain(message);
  });

  it("should log error messages correctly", () => {
    const message = "Error message";
    Logger.logError(message);
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][1]).toContain("[ERROR]");
    expect(consoleSpy.mock.calls[0][2]).toContain(message);
  });

  it("should log Error objects correctly", () => {
    const error = new Error("Error object");
    Logger.logError(error);
    expect(consoleSpy).toHaveBeenCalled();
    // expect(consoleSpy.mock.calls[0][0]).toContain(error.stack);
    expect(consoleSpy.mock.calls[0][1]).toContain("[ERROR]");
  });

  it("should log Error without stack objects correctly", () => {
    const error = new Error("Error object");
    error.stack = undefined;
    Logger.logError(error);
    expect(consoleSpy).toHaveBeenCalled();
    // expect(consoleSpy.mock.calls[0][0]).toContain(error.stack);
    expect(consoleSpy.mock.calls[0][1]).toContain("[ERROR]");
  });
});
