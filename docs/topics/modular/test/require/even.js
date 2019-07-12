// 这样写不行
const { odd } = require('./odd')

exports.counter = 0;
exports.even = function even(n) {
  exports.counter++;
  return n == 0 || odd(n - 1);
}

// 将require移到这里就行了
