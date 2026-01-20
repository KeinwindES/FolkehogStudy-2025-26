const crypto = require("crypto");

function GenerateSessionId() {
  return crypto.randomBytes(32).toString("hex");

}
function GenerateSessionExpiry() {
  const date = new Date();
  date.setHours(date.getHours() + 24)
  return date;
}

module.exports = {
  GenerateSessionId,
  GenerateSessionExpiry
}
