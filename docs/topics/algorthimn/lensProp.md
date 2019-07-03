#### 实现 lensProp

```js
//  给定一个字符串， 比如lensProp(a, obj) 返回 'obj.a'的值
function lensProp(lens, obj) {
  const keys = lens.split(".");
  if (keys.lenngth < 1) return;
  return keys.reduce((acc, cur) => (acc !== void 0 ? acc[cur] : acc), obj);
}

const a = lensProp("a", { a: 1 }); // 1
const b = lensProp("b", { a: 1 }); // undefined
const c = lensProp("a.b", { a: { b: "c" } }); // c
const d = lensProp("a.b.c.d.e.f", { a: { b: "c" } }); // undefined

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```
