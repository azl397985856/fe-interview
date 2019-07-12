# 函数节流

## 代码
```js
function throttle(cb, ms) {
  let timer = null;
  const ctx = this;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(cb.bind(ctx, ...args), ms);
  };
}

// test

const t = throttle(console.log, 1000);

t("hello");
t("hello");
t("hello");

setTimeout(() => t("world"), 1100);

setTimeout(() => t("world"), 1200);
```
