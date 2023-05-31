/**
 * @file src/getTimeString.ts
 * @author dworac <mail@dworac.com>
 *
 * This file contains the getTimeString function.
 */

/**
 * Pads a date part with a leading zero if necessary.
 *
 * @param {number} datePart - The date part to pad.
 * @returns {string} The padded date part.
 */
export const padDatePart = (datePart: number) => {
  const { length } = datePart.toString();
  const padding = 2 - length;
  return `${"0".repeat(padding)}${datePart.toString()}`;
};

/**
 * Returns a string containing the current time in the format [hh:mm:ss].
 *
 * @returns {string} The current time.
 * @example
 * const time = getTimeString();
 * console.log(time); // [12:34:56]
 */
const getTimeString = () => {
  const date = new Date();
  const hours = padDatePart(date.getHours());
  const minutes = padDatePart(date.getMinutes());
  const seconds = padDatePart(date.getSeconds());

  const time = `${hours}:${minutes}:${seconds}`;

  return `[${time}]`;
};

export default getTimeString;
