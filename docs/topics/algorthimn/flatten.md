# 拍平数组

## 题目描述

最新的ES规范其实也加入了这个方法，功能是将一个数组压平，比如`[1, 2, [3, [4, 5, [6, [7, 8]]]]]`,
会被处理成`[1, 2, 3, 4, 5, 6, 7, 8]`。

更进一步，实现可以压平指定深度的数组。


## 代码
```js
function flatten(list) {
  if (list.length === 0) return [];
  const head = list[0];
  if (head instanceof Array) {
    list[0] = flatten(head);
  } else {
    list[0] = [list[0]];
  }
  return list[0].concat(flatten(list.slice(1)));
}

function flattenDepth(list, n) {
  if (list.length === 0) return [];
  if (n === 0) return list;
  const head = list[0];
  if (head instanceof Array) {
    list[0] = flattenDepth(head, n - 1);
  } else {
    list[0] = [list[0]];
  }
  return list[0].concat(flattenDepth(list.slice(1), n));
}

// test

const a = flatten([1, 2, [3, [4, 5, [6, [7, 8]]]]]);

console.log(a);

const b = flattenDepth([1, 2, [3, [4, 5, [6, [7, 8]]]]], 2);

console.log(b);

const c = flattenDepth([1, 2, [3, [4, 5, [6, [7, 8]]]]], Number.MAX_VALUE);

console.log(c);
```
