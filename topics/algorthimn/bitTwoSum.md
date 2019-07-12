# 实现加法

## 题目描述

实现两个数字相加的功能，要求不能使用编程语言现有的四则运算。

## 代码

```js
function twoSum(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;
  const res = a ^ b;

  return twoSum(res, (a & b) << 1);
}

// test

a = twoSum("" + Math.pow(2, 20), "" + Math.pow(2, 20));

console.log(a === Math.pow(2, 21));
```
