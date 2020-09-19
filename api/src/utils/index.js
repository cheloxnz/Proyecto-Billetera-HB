var seedrandom = require("seedrandom");
//const { usernameValidator } = require("../../../client/src/core/utils");

function codeGenerator() {
  rng = seedrandom(null, { entropy: true });
  return Math.floor(100000 + (999999 - 100000) * rng.double());
}

module.exports = codeGenerator;
