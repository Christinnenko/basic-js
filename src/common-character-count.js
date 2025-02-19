const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (!s1 || !s2) {
    return 0;
  }

  // Create objects to store character frequencies for both strings
  const frequency1 = {};
  const frequency2 = {};

  // Count the frequency of each character in s1
  for (const char of s1) {
    frequency1[char] = (frequency1[char] || 0) + 1;
  }

  // Count the frequency of each character in s2
  for (const char of s2) {
    frequency2[char] = (frequency2[char] || 0) + 1;
  }

  // Calculate the number of common characters by finding the minimum frequency for each character
  let commonCount = 0;
  for (const char in frequency1) {
    if (frequency2[char]) {
      commonCount += Math.min(frequency1[char], frequency2[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
