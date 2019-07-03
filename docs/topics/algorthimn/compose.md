#### 实现 compose

```js
function compose(...fns) {
  return (...args) => fns.reduceRight((acc, cur) => cur(acc), ...args);
}

function a(msg) {
  return msg + "a";
}
function b(msg) {
  return msg + "b";
}
function c(msg) {
  return msg + "c";
}

const f = compose(
  a,
  b,
  c
);
console.log(f("hello"));
```
