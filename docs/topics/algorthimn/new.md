# 手动模拟new的执行过程


## 代码
```js

function myNew(constructor, ...args) {
  const obj = {};
  obj.__proto__ = constructor.prototype;
  const ret = constructor.call(obj, ...args);
  return ret instanceof Object ? ret : obj;
}

```