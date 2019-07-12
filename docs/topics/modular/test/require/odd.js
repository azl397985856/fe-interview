const { even } = require("./even");

exports.odd =  function odd(n) {
  return n != 0 && even(n - 1);
}
