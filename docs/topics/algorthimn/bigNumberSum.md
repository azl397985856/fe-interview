# 大数相加

## 题目描述

如何实现两个非常大的数字(已经超出了Number范围)的加法运算。

注意由于这两个已经超过了Number范围，因此不能用Number存，这里我们选择使用字符串存储。

## 参考代码

```js
function bigNumberSum(a, b) {
  // 123456789
  // 000009876

  // padding
  let cur = 0;
  while (cur < a.length || cur < b.length) {
    if (!a[cur]) {
      a = "0" + a;
    } else if (!b[cur]) {
      b = "0" + b;
    }
    cur++;
  }

  let curried = 0;
  const res = [];

  for (let i = a.length - 1; i > -1; i--) {
    const sum = curried + +a[i] + +b[i];
    if (sum > 9) {
      curried = 1;
    } else {
      curried = 0;
    }
    res[i] = sum % 10;
  }
  if (curried === 1) {
    res.unshift(1);
  }

  return res.join("");
}
```
