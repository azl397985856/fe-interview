# 获取页面所有的 tagname

## 题目描述

获取当前页面中所有 HTML tag 的 名字，以数组形式输出, 重复的标签不重复输出。（不考虑 iframe 和 shadowDOM）

## 关键点

这道题的关键是两点：

1. 获取所有的 DOM

如果单纯从算法的角度来看，我们可以先获取到最外层的 HTML 元素，然后通过 children 递归即可。

事实上，我们可以借助一些 API 很简单完成这个功能，比如`window.document.querySelectorAll('*')`

2. 根据 tagName 去重

如果单纯从算法的角度来看，去重操作可以通过 Set 或者 HashMap 来做。从性能上来说，肯定是 Set，
因为 HashMap 存储的话实际上 value 没有用处。

或者我们可以使用快慢指针来做，具体可以看我之前解的一道题目[26.remove-duplicates-from-sorted-array](https://github.com/azl397985856/leetcode/blob/master/problems/26.remove-duplicates-from-sorted-array.md)

## 代码

```js
function getAllHTMLTags() {
  const tags = [...window.document.querySelectorAll("*")].map(
    dom => dom.tagName
  );
  return [...new Set(tags)];
}
```

## 扩展

将所有页面元素按照出现次数降序排序输出。

参考代码：

```js
function getAllHTMLTags() {
  const mapper = {};
  const tags = [...window.document.querySelectorAll("*")].map(
    dom => dom.tagName
  );
  for (let i = 0; i < tags.length; i++) {
      const tag = tags[i];
      if (mapper[tag] === void 0) {
          mapper[tag] = 1;
      }
      else mapper[tag] += 1;
  }

  return Object.entries(mapper).sort((a, b) => b[1] - a[1]).map(q => q[0]);
}
```
