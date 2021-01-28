# 函数防抖 && 节流

## 代码（节流）
```js
function throttle11(func, ms) {
  let last = null
  return function(...args) {
    let now = Date.now()
    if (last === null) {
      last = Date.now()
      func.apply(this, args)
      return
    }
    if (now - last >= ms) {
      last = Date.now()
      func.apply(this, args)
    }
  }
}

const t = throttle(console.log, 1000);

t("hello");
t("hello");
t("hello");

setTimeout(() => t("world"), 1100);

setTimeout(() => t("world"), 1200);
```

##  代码（防抖）
```
function debounce(cb, ms) {
  let timer = null
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(cb.bind(this, ...args), ms)
  }
}
```
