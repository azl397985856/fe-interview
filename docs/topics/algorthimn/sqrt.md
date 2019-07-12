# 实现 Math.sqrt

## 题目描述
要求不用数学库，求 sqrt(2)精确到小数点后 10 位

## 代码
```js
function sqrt(num) {
  if (num < 0) return num;
  let start = 0;
  let end = num;
  let mid = num >> 1;
  const DIGIT_COUNT = 10;
  const PRECISION = Math.pow(0.1, DIGIT_COUNT);
  while (Math.abs(+(num - mid * mid).toFixed(DIGIT_COUNT)) > PRECISION) {
    mid = start + (end - start) / 2.0;
    if (mid * mid < num) {
      start = mid;
    } else {
      end = mid;
    }
  }

  return mid;
}

function sqrtNewton(n) {
  if (n <= 0) return n;

  let res;
  let last;
  const DIGIT_COUNT = 10;
  const PRECISION = Math.pow(0.1, DIGIT_COUNT);

  res = n;

  while (Math.abs(last - res) > PRECISION) {
    last = res;
    res = (res + n / res) / 2;
  }

  return res;
}
```
