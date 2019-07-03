#### 实现 curry

```js
function curry(fn) {
  const ctx = this;
  function inner(...args) {
    if (args.length === fn.length) return fn.call(ctx, ...args);
    return (...innerArgs) => inner.call(ctx, ...args, ...innerArgs);
  }

  return inner;
}

// test
function test(a, b, c) {
  console.log(a, b, c);
}

curry(test)(1);
f1(2);
f2(3);
```
