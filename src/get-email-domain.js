const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (typeof email !== "string") {
    throw new Error("Invalid input. Expected a string.");
  }

  const match = email.match(/@([^@]+)$/);

  if (!match) {
    throw new Error("Invalid email address.");
  }

  return match[1];
}

module.exports = {
  getEmailDomain,
};
