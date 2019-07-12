# 千分位转数字

## 题目描述
将千分位展示的字符串，转化为数字。 比如`1,231`，转化为`1231`.
## 代码

```js
function numFormat(str) {
  return str.replace(/,/g, '');
}

```

## 扩展

如果改为`¥1,231`，转化为`1231`. 支持各种货币呢？


很简单,换个思路即可。

```js
function numFormat(str) {
  return str.replace(/[^\d\.]/g, '');
}


```