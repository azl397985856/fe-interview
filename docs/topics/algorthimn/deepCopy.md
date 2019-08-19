# 实现深拷贝


## 代码
```js
function deepCopy(o) {
  if (typeof o !== "object") return o;
  let n;
  if (Array.isArray(o)) {
    n = new Array(o.length);
    o.forEach((v,i) => (n[i] = deepCopy(v)));
  }

  // reg math function 等其他类型暂时不考虑
  else if (!Array.isArray(o)) {
    n = {};
    Object.keys(o).forEach(key => {
      n[key] = deepCopy(o[key]);
    });
  }

  return n;
}

const a = {
  a: [
    1,
    [4],
    {
      a: {
        c: [4]
      }
    }
  ]
}

const b = deepCopy(a);

a.c = "c";
console.log(a);
console.log(b);
console.log(a.c);
console.log(b.c);
```
