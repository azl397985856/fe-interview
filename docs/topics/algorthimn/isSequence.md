# 判断一个字符串是否另一个字符串的子序列

## 题目描述

这道题是leetcode基础题目。 问题是如何判断一个字符串是否另一个字符串的子序列，
比如给定 a = `apple`, b = `axpfxplle`; 那么a就是b的子序列。
你也可以这么理解，在b中删除零个或多个字符，如果可以使得a和b相等，那么说明a就是b的子序列。


## 关键点

典型的双指针题目。

## 代码

```js

// 判断a是否是b的子序列
function isSequence(a, b) {
    let i = 0;
    let j = 0;

    while(i < a.length && j < b.length) {
      if (a[i] === b[j]) i++;
      j++;
    }

    return i === a.length;
}

```