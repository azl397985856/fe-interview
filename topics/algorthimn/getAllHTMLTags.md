# 获取页面所有的tagname

## 题目描述

获取当前页面中所有HTML tag 的 名字，以数组形式输出, 重复的标签不重复输出。（不考虑iframe和shadowDOM）

## 关键点

这道题的关键是两点：

1. 获取所有的DOM

如果单纯从算法的角度来看，我们可以先获取到最外层的HTML元素，然后通过children递归即可。

事实上，我们可以借助一些API很简单完成这个功能，比如`window.document.querySelectorAll('*')`

2. 根据tagName去重

如果单纯从算法的角度来看，去重操作可以通过Set或者HashMap来做。从性能上来说，肯定是Set，
因为HashMap存储的话实际上value没有用处。

或者我们可以使用快慢指针来做，具体可以看我之前解的一道题目[26.remove-duplicates-from-sorted-array](https://github.com/azl397985856/leetcode/blob/master/problems/26.remove-duplicates-from-sorted-array.md)


## 代码

```js

function getAllHTMLTags() {
    const tags =  [...window.document.querySelectorAll('*')].map(dom => dom.tagName);
    return [...new Set(tags)];
}

```