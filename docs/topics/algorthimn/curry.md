# 实现 curry

## 题目描述
实现函数curry，该函数接受一个多元（多个参数）的函数作为参数，然后一个新的函数，这个函数
可以一次执行，也可以分多次执行。

eg:
```js
// test
function test(a, b, c) {
  console.log(a, b, c);
}

const f1 = curry(test)(1);
const f2 = f1(2);
f2(3);

```

curry的意义在于能够在不完全指定函数参数的情况下运行函数，实际意义呢？ 其实curry需要和compose等配合来有效果，比如
配合写出pointfree的代码。

## 代码

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

const f1 = curry(test)(1);
const f2 = f1(2);
f2(3);
```
