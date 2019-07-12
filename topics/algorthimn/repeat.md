# 周期执行某个函数 n 次

## 代码
```js
function repeat(func, times, ms, immediate) {
  let count = 0;
  const ctx = null;
  function inner(...args) {
    count++;
    if (count === 1 && immediate) {
      inner.call(ctx, ...args);
      func.call(ctx, ...args);
      return;
    }
    if (count > times) {
      return;
    }
    return setTimeout(() => {
      inner.call(ctx, ...args);
      func.call(ctx, ...args);
    }, ms);
  }
  return inner;
}
// const repeatFunc = repeat(console.log, 4, 3000);
// repeatFunc("hellworld"); //会打印4次 helloworld，每次间隔3秒

const repeatFunc = repeat(console.log, 4, 3000, true);
repeatFunc("hellworld"); //先立即打印一个hellworld，然后每个三秒打印三个hellworld
```
