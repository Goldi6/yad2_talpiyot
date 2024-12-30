// ------VALIDATE EMAIL DOMAIN-----

module.exports = validateEmailDomain = async (email) => {
  const { promisify } = require("util");
  const dns = require("dns");

  const resolveMx = promisify(dns.resolveMx);

  const [, domain] = email.split("@");
  try {
    await resolveMx(domain);
    return true;
  } catch (error) {
    return false;
  }
};
