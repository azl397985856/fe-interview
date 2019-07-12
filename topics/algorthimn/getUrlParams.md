# 实现 getUrlParams

## 题目描述
给定一个url和一个key，查找key是否在url的查询字符串中，
如果在就返回，如果不在返回null，如果存在多个就返回数组。

## 代码
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
