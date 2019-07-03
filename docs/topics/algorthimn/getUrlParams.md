#### 实现 getUrlParams

```js
// 给定key，求解href中的value，如果有多个，返回数组。如果没有返回null
function getUrlParams(key, href) {
  const query = href.split("?");
  if (query.length <= 1) return null;
  // a=1&b=2&a=3
  const pairs = query[1].split("&");
  const res = pairs
    .filter(pair => {
      const [k] = pair.split("=");
      if (k === key) return true;
      return false;
    })
    .map(pair => {
      const [, v] = pair.split("=");
      return v;
    });
  if (res.length === 0) return null;
  if (res.length === 1) return res[0];
  return res;
}

const a = getUrlParams("a", "http://lucifer.ren?a=1&b=2&a=3");
const b = getUrlParams("b", "http://lucifer.ren?a=1&b=2&a=3");
const c = getUrlParams("c", "http://lucifer.ren?a=1&b=2&a=3");

console.log(a);
console.log(b);
console.log(c);
```
