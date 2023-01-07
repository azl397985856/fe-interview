# 什么是 web assembly

## asm.js

或许你听说过 asm.js, 它是文本形式的，并且是 js 的集。asm.js 限制了一些 js 的功能，比如动态数据类型等。，换来的是性能的提升，浏览器可以不去优化 asm.js，直接得到很好的性能。那 web assembly 是什么？和 asm.js 有什么关系？

## wasm

Webassembly (缩写为 Wasm)是基于堆栈的虚拟机的二进制指令格式。 Wasm 被设计为编译高级语言(如 c / c + + / Rust)的可移植目标，支持在 web 上部署客户机和服务器应用程序。我们可以这么说，asm.js 就是 wasm 的前身，asm.js 促使浏览器厂商联合起来，统一标准，开发了一套规范，这个规范就是 wasm 规范。 浏览器厂商甚至还成立了 [wasm 社区小组](https://www.w3.org/community/webassembly/)。

![](https://p.ipic.vip/blgg3s.jpg)

可以说，Webassembly 是 JS 之后浏览器支持的“新语言”。之前浏览器只能运行 JS 语言，现在多了一个，我们可以直接加载并执行 wasm。wasm 不同于引擎执行的 js，引擎执行的 js 是文本格式，而 wasm 是二进制。

## 特点

- 二进制，因此很多时候体积更小，运行更快。
- 运行在浏览器沙箱环境，受浏览器安全策略影响。

## 如何生成？

当前对 WebAssembly 支持最多的编译器工具链称是 LLVM。有许多不同的“前端”和“后端”可以插入到 LLVM 中。比如我们可以用 clang “前端” 把 C 编译成 LLVM 中间代码。当它变成 LLVM 的中间代码（IR）以后，LLVM 可以理解他，所以 LLVM 可以对代码做一些优化。

上面提到了我们可以将 c/c++ 等一些可以生成 LVVM 的通过一个编译器生成 wasm。这里的编译器有很多，不过比较流行的是 emscripten。除此之外还有别的，比如[ilwasm](https://github.com/kg/ilwasm)

我们以 emscripten 为例，看一下是怎么将 c/c++等生成 wasm 的。

![](https://p.ipic.vip/ga86ws.jpg)

作者本人给了一个这样的流程图,个人认为非常直观了：

```
C/C++ ⇒ LLVM ==> LLVM IR ⇒ Emscripten ⇒ asm.js
```

C/C++ 首先经过 LLVM（比如 clang 等） 变成 LLVM 的中间语言。

![](https://p.ipic.vip/1y5vjv.jpg)

可以看出 emscripten 理论上可以将任何“能够生成 LLVM IR”的语言转化为 wasm。

## 生成内容

目前规范还比较新，很多东西没跟上。 本文描述的是现有情况（2020-01-22），之后我相信会更加方便。但是不管你使用的什么工具链，最终的结果都应该是以 .wasm 结尾的文件。使用 emscripten 会同时生成一个 js 胶水文件用于加载，编译，初始化 wasm 模块。

> 你甚至可以指定生成一个 html，html 会包含生成的 js 和 wasm 文件。

js 加载，编译，初始化 wasm 伪代码：

```js
function fetchAndInstantiate(url, importObject) {
  return fetch(url)
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, importObject))
    .then(results => results.instance);
}
```

## 注意

由于 c/c++ 等语言和 js 差别还是蛮大的。因此必须要做一些限制，js 和 wasm 交互只能使用 TypedArray，整数和浮点数。其中 TypedArray 用于表示指针等复杂数据类型。

![](https://p.ipic.vip/ohxgah.jpg)

![](https://p.ipic.vip/au8mei.jpg)

## 更多

关于 emscripten 架构， wsam 和 js 交互，wsam 实践等内容我们之后再讲解。

# 参考

这里有一些关于 wasm 的资料，有 ppt 和视频，其中还有一些是原作者公开的资料，质量还是很高的。地址： https://webassembly.org/community/events/

另外[emscripten 的官网](https://emscripten.org/index.html)也不要错过。

[Google developers](https://developers.google.com/web/updates/2018/03/emscripting-a-c-library) 偶尔也会分享一下 wsam，也可以关注一下。

[abridged-cartoon-introduction-webassembly/](https://www.smashingmagazine.com/2017/05/abridged-cartoon-introduction-webassembly/) 是一篇通过图来解释 wsam 的入门文章，也推荐给大家。
