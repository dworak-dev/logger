/**
 * @file src/getTimeString.test.ts
 * @author dworac <mail@dworac.com>
 *
 * This file contains the tests for the getTimeString function.
 */

import getTimeString from "./getTimeString";

describe("getTimeString", () => {
  test("should return a string", () => {
    const result = getTimeString();
    expect(typeof result).toBe("string");
  });

  test("should return a string formatted as [hh:mm:ss]", () => {
    const result = getTimeString();
    const timeRegex = /\[\d{2}:\d{2}:\d{2}\]/;
    expect(timeRegex.test(result)).toBeTruthy();
  });

  test("should return a string that starts with a [", () => {
    const result = getTimeString();
    expect(result.charAt(0)).toBe("[");
  });

  test("should return a string that ends with a ]", () => {
    const result = getTimeString();
    expect(result.charAt(result.length - 1)).toBe("]");
  });
});
