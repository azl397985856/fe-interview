# 大量数据滚动加载如何保证性能足够好

之前工作中碰到过类似这种全端处理大量数据的场景，因此这方面也积累了一些经验，在这里简单的分享一下，
希望对大家有帮助。

## 问题描述

现在有这样一个需求，我们的页面需要加载大量的数据，我们需要在用户滚动的时候不断的去加载新的数据，如何
保证性能？

补充：

- 当用户将手机从竖屏改为横屏时你该如何处理 resize 事件？
- 如果网站是响应式的呢？
- 如何做到不干扰用户正常操作？

## 关键点

- 重用你的DOM元素以及删除那些远离可视范围的元素
- 延迟显示的元素使用占位符
- pull模式，而不是push模式
> 如果你不懂什么是pull和push，建议看看[这个](https://github.com/pull-stream/pull-stream)

## 参考

- [infinite-scroller](https://developers.google.com/web/updates/2016/07/infinite-scroller)

- [google-photos](https://medium.com/google-design/google-photos-45b714dfbed1)