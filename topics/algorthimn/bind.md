# 手写 bind

## 题目描述

写一个函数，实现Function.prototype.bind的功能。

## 代码

```js
Function.prototype.myBind = function(ctx, ...args) {
  return (...innerArgs) => this.call(ctx, ...args, ...innerArgs);
};

// test
const a = {
  name: "name of a"
};
function test(...msg) {
  console.log(this.name);
  console.log(...msg);
}
const t = test.myBind(a, "hello");
t("world");
```
