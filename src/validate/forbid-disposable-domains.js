const blacklistedDomains = require('disposable-email-domains');
const Q = require('q');

module.exports = (input) => {
  if (
    input.match(/@(.+)$/) && 
    blacklistedDomains.indexOf(input.match(/@(.+)$/)[1].toLowerCase()) !== -1
  ) {
    return Q.reject('A username cannot be an e-mail address from that domain.');
  }

  return Q();
};
