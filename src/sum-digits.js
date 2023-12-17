const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    throw new Error("Invalid input. Expected a non-negative integer.");
  }

  if (n < 10) {
    return n; // If n is already a one-digit number, return it
  }

  // Convert the number to a string to extract individual digits
  const digits = String(n).split("").map(Number);

  // Calculate the sum of digits
  const sum = digits.reduce((acc, digit) => acc + digit, 0);

  // Recursive call with the sum
  return getSumOfDigits(sum);
}

module.exports = {
  getSumOfDigits,
};
