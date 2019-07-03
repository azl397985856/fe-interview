#### 实现深拷贝

```js
function deepCopy(o) {
  if (typeof o !== "object") return o;

  if (o instanceof Array) {
    o.forEach(v => (o[v] = deepCopy(v)));
  }

  // reg math function 等其他类型暂时不考虑
  if (o instanceof Object) {
    Object.keys(key => {
      o[key] = deepCopy(o[key]);
    });
  }

  return o;
}

const a = deepCopy({
  a: [
    1,
    [4],
    {
      a: {
        c: [4]
      }
    }
  ]
});

console.log(a);
```
