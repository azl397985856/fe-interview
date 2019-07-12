# 大前端面试宝典 - 图解前端

![logo](./assets/imgs/logo.jpg)
这是一份自己总结的关于准备前端面试的一个复习汇总项目，项目不定时更新。

这不仅仅是一份用于求职面试的攻略，也是一份前端er用来检视自己，实现突破的宝典。
希望通过这个指南，大家可以打通自己的任督二脉，在前端的路上更进一步。

本仓库大量采用图的形式来传达知识，所谓一图胜千言，希望通过这种图文并茂的表达方式
让你更容易记住一些抽象，难以理解的概念，《图解前端》是我给它的副标题。

所有的内容按照主题进行分类，大家可以根据自己需要随意传送, enjoy🍻🍻🍻

我的目标是做`宇宙最强的前端面试指南`。

> WIP： 🚧 项目还在施工中哦，请戴好头盔！⚠️

## 简介

面试是一件很主观很难的事情。 面试不通过不代表你就不合格，同样地即使面试通过也不意味着你就合格了。
作为候选人，通常会给你45分钟的时间来让你展示自己的技能。
作为一名面试官，同样难以在这么短的时间里评估这个人是否适合这项工作。 
对于面试来说，没有任何一种标准能够适合所有人，面试官通常会覆盖某一个领域，但除此之外，他们会自行决定应该问哪些问题。

准备面试，我们应该准备一些真正能够体现面试人水平的题目，比如一些编程题，设计题，框架选型等，不要过分
拘泥于特别小的问题，尤其是API的问题，比如`==`的隐式转化，我个人很反感这种问题。
相反面试官应该更关注`面试者是否了解前端开发的基本原理，而不是依赖更高级别的抽象。`
比如你是否可以在不依赖库的情况下完成开发任务（当然实际情况很少这样），这样你才能彻底理解库在背后都做了什么。

## 关于我

我是一个对技术充满兴趣的程序员, 擅长前端工程化，前端性能优化，前端标准化等。

做过.net， 搞过Java，现在是一名前端工程师。

除了我的本职工作外，我会在开源社区进行一些输出和分享，比较受欢迎的有[leetcode题解](https://github.com/azl397985856/leetcode)
和[我的第一本小书](https://github.com/azl397985856/automate-everything)

## 主题

### 面试流程

首先第一个主题是面试的流程， 面试流程从时间先后的顺序可以划分为：
`网投/内推`，`线上评估`, `电话面试/视频面试`, `现场面试`。这四个流程在一次面试中不一定都会有。

- 网投/内推

网投指的是在网络上投递简历，这样选择面会很大。
内推指的是找内部人员推荐， 内推不仅有着快速地反馈流程，而且在有时候岗位刚刚空缺出来，岗位还没有 JD 的时候就可以内推。
因此建议大家尽量内推。

- 线上评估

线上评估指的是在线做题，很多大公司以及外企都会设置这部分，尤其是对于应届生而言。
这部分考察候选人的`基本算法能力，解题思路`

- 电话面试/视频面试

这部分主要考察候选人的`算法能力，做题速度，沟通交流技巧`。

- 现场面试

这部分主要考察候选人的`白板算法，系统设计，应变能力，价值观`等。

### 面试的考察点

上面介绍了面试的基本流程以及考察方向，接下来我们总结一下我们通常挂的原因有哪些? 
为此我们需要注意什么？有没有什么小技巧？
我在这里进行了比较详细的[总结](./topics/surface/aspects.md)

### 简历 📖

投递简历是面试的第一步，很多时候我们第一步都跨不过去，排除个别岗位的硬性要求，其实很多时候
是自己的简历写的不好，不能突出自己的优势，有时候甚至给自己减分。我们来看下[简历该怎么写](./topics/surface/resume.md)吧。

### 自我介绍

![自我介绍](./assets/imgs/topics/introduction/intro-1.jpg)

自我介绍是面试的第一个环节，如果表现良好的话不仅会给面试官留下好印象，有利于之后的面试过程，
而且流畅的自我介绍也可以给自己增加信心，让自己发挥地更好。

甚至有人说自我介绍决定了面试的 80%，可见自我介绍是一个很重要的环节。

自我介绍最好不是简历的复述，这样会给人不太好的感觉。但是即使是复述，如果
做到熟练和清晰也是不错的， 因为很多面试官在面试之前根本没有看你的简历。

> 草稿

[如何做自我介绍](./topics/introduction/intro.md)

### 算法 ️️✍️

算法分为三部分:

- 第一部分是 leetcode 上的题目。

- 第二部分是手写题目，实现一个小功能。比如实现 bind, curry 等

- 第三部分是 leetcode 题目变种

本仓库只列举后两个部分，对于第一部分可以去我的另一个仓库 - [leetcode 题解](https://github.com/azl397985856/leetcode) 查看



另外对于不同的阶段，我们应该采取不同的刷题策略。

1. 初级阶段

看一些基础内容，比如数据结构和算法的基本知识，看一些 JS 语言基础的一些东西。

如果需要刷题的话，一定要从简单开始。

2. 中级

按照分类刷题，一个个分类突破，掌握同一类别的题目的基本解题思路和套路。

3. 高级

总结题目，做到融汇贯通，一题多解，多题同解。

4. 面试前

刷题找回感觉，如果能找到你想去的公司的真题进行练习就更好了，因此我也会考虑将题目按照公司进行分类。




> ℹ️ 以下这些题目都是自己经历或者从网上整理下来的, 之后还会继续同步更新。

- [大数相加](./topics/algorthimn/bigNumberSum.md)
- [手写 bind](./topics/algorthimn/bind.md)
- [实现加法](./topics/algorthimn/bitTwoSum.md)
- [实现 curry](./topics/algorthimn/curry.md)
- [实现 compose](./topics/algorthimn/compose.md)
- [剪枝](./topics/algorthimn/cut-tree.md)
- [循环有序列表的查找](./topics/algorthimn/cycle-sorted-array.md)
- [实现深拷贝](./topics/algorthimn/deepCopy.md)
- [实现继承](./topics/algorthimn/extend.md)
- [拍平数组](./topics/algorthimn/flatten.md)
- [实现 getUrlParams](./topics/algorthimn/getUrlParams.md)
- [用 reduce 实现 map](./topics/algorthimn/implement-map-using-reduce.md)
- [用栈实现队列](./topics/algorthimn/implement-queue-using-stack.md)
- [判断是否是完全二叉树](./topics/algorthimn/isCompleteBinaryTree.md)
- [实现 lensProp](./topics/algorthimn/lensProp.md)
- [判断链表是否成环](./topics/algorthimn/linkedListCycled.md)
- [最长公共子序列](./topics/algorthimn/longestCommonSequence.md)
- [最长公共子串](./topics/algorthimn/longestCommonSubstring.md)
- [实现千分位展示](./topics/algorthimn/moneyFormat.md)
- [无序不相等数组中，选取 N 个数，使其和为 M](./topics/algorthimn/n-sum.md)
- [实现简化的 Promise](./topics/algorthimn/promise.md)
- [实现快排](./topics/algorthimn/quickSort.md)
- [周期执行某个函数 n 次](./topics/algorthimn/repeat.md)
- [字符串反转](./topics/algorthimn/reverseString.md)
- [函数节流](./topics/algorthimn/throttle.md)
- [数组去重](./topics/algorthimn/uniqueArray.md)
- [实现 Math.sqrt](./topics/algorthimn/sqrt.md)
- [判断一个字符串是否另一个字符串的子序列](./topics/algorthimn/isSequence.md)
- [实现一个极简的模板引擎](./topics/algorthimn/mono-tpl.md)
- [实现一个极简的数据响应式](./topics/algorthimn/observable.md)
- [千分位转数字](./topics/algorthimn/numFormat.md)
- [将数字转化为中文(数字是 10 万以内)](./topics/algorthimn/numToChineseStr.md)
- [已知数据格式，实现一个函数 fn 找出链条中所有的父级 id](./topics/algorthimn/findParents.md)

### CSS 🦋

我并不擅长，欢迎大佬补充。

- [布局]() (TODO)
- [响应式]() (TODO)
- [自适应]() (TODO)
- [BEM等CSS架构]() (TODO)

### 设计题 🎩

![设计题](./assets/imgs/topics/design/design-cover.jpg)

这类题目有时候是给一个情景，有时候是直接让你实现一个轮子，答案也往往是开放式的。
需要你对组件和代码设计有一定的基础。

- [大量数据滚动加载](./topics/design/lazy-scroll.md)
- [如何设计一个实时检查更新的功能](./topics/design/auto-update.md)
- [实现一个轮播图组件](https://zhuanlan.zhihu.com/p/72091681)
- [实现一个模态框组件](./topics/design/modal.md)（TODO）
- [实现一个下拉框组件](./topics/design/select.md)（TODO）
- [实现一个标签页组件](./topics/design/tab.md)（TODO）

### 设计模式 👔

掌握常见的设计模式是“术”， 掌握设计模式的原则才是“道”，
只有在“术”上下过功夫，才能明白“道”的价值。

对于常见的设计模式能够说出适用场景，如果能够结合实际项目经验就更好了。常见的有单例模式，工厂模式，代理模式，观察者模式，策略模式，模板方法模式等。

- [单例模式](./topics/design-pattern/singleton.md)
- [策略模式](./topics/design-pattern/strategy.md)
- [代理模式](./topics/design-pattern/proxy.md)
- [观察者模式](./topics/design-pattern/observer.md)(TODO)
- [适配器模式](./topics/design-pattern/adapter.md)(TODO)
- [迭代器模式](./topics/design-pattern/iterator.md) (TODO)
- [工厂模式](./topics/design-pattern/factory.md)(TODO)
- [模版方法模式](./topics/design-pattern/template.md)(TODO)
- [装饰者模式](./topics/design-pattern/decorator.md)(TODO)

### 框架 🖼️

![框架](./assets/imgs/topics/framework/framework-cover.png)

流行的框架当然也是兵家必争之地，如果你能够完全了解大型知名开源框架的代码和架构实现，那绝对是一个加分项。

框架是为了解决特定问题才出现的，脱离实际业务谈框架选型以及优劣都是耍流氓。我们需要了解到各个框架在
什么情况下产生的，他们是为了解决什么问题，适合的场景是什么样的，有什么不足等。只有对这些
都非常熟悉，才能够在业务中作出合理的取舍，才能赢得面试官的认可。

#### React

React考察的点就那么几点，从简单的声明周期，特定API的使用。 到SetState的原理，
虚拟DOM，以及DOM diff算法等。 这部分需要大家对React有系统性认识。

这部分其实可以参考我之前开的一个仓库[从零开始开发一个 React](https://github.com/azl397985856/mono-react)

我后期会陆续增加一些对于React常见问题的汇总，大家保持关注即可。
#### Redux

我用 20 行代码左右实现了一个迷你版本的 redux，帮助自己理解 redux 的核心思想，这里是[原文](https://juejin.im/post/5a9e6a61f265da239866c7a3)。

相信你可以自己实现出一个 redux，那么你会对 redux 的本质有更深入的理解，这个时候再去学习 redux 中间件机制等高级内容才会得心应手。

#### Vue

> vue 部分我建议等到 vue 更新 3.0 之后再去研究 ta。

#### Vuex

> vuex 部分我建议等到 vue 更新 3.0 之后再去研究 ta。

### JavaScript 🗒️

<img src="./assets/imgs/topics/js/js-cover.png" width = "20%" height = "20%" alt="JavaScript" align=center />

JavaScript 是前端基础中的基础了, 这里的面试题目层出不穷，但是核心考点还是那几个，比较高端的基本都是`词法作用域`, `EC`, `闭包`， `高阶函数`.

> 在学习接下来的东西之前，建议大家先打好基础，这里只推荐两本书，一本是《You-Dont-Know-JS》，另一本是《JavaScript: The Good Parts》。

我非常不建议你没有系统学习JS之前就去刷题目，这是毫无意义的，根本无法从根本上理解。
之后对前端技能的考察会越来越严格。大家系统性学习之后，推荐过来看一下我这里总结的东西，
最后去网上找一些经典的题目，通过这些题目来检查自己，而不是一开始就去网上找题目做。

这里列举了几个我觉得比较有代表且比较有意思的主题：

- [内置类型](./topics/js/buit-in-types.md)(TODO)
- [作用域与闭包](./topics/js/scope&closures.md)
- [引用和操作符优先级](./topics/js/reference&priority.md)
- [原型与原型链](./topics/js/prototype.md)(TODO)
- [this](./topics/js/this.md)(TODO)
- [执行上下文（EC）](./topics/js/EC.md)(TODO)


### 浏览器

<img src="./assets/imgs/topics/browser/browser-cover.png" width = "40%" height = "40%" alt="浏览器" align=center />

> 未加入到 TODO

- 事件模型

- 浏览器安全策略

- 事件循环

- BOM API

### 小程序

<img src="./assets/imgs/topics/mini-program/mini-program-cover.jpg" alt="node" width="70%" align=center />

小程序的特点：

1. 即插即用，
2. 拥有 native 和跨端（不同操作系统）的能力
3. 性能比 H5 好

面试的时候多会问小程序的多线程架构，以及多个 webview 是如何和 JS 线程通信的，JS 线程又是如何和 native 通信的。

- [小程序架构](./topics/mini-program/architecture.md)

### 原生通信

> 还没开始整理

如果你做过混合式开发的话，原生通信一定是不能绕过的点。

### 网络

网络这部分虽然不需要我们像`网络工程师`一样熟悉很多底层细节，
但是我们至少需要有一个高层次的抽象的思维来看待网络这个世界，
从而帮助我们更好地理解它，并且利用它去解决一些问题，典型的就是性能优化，
其实线上定位问题等有时候也需要你懂一点网络知识。
作为面试，可能需要你准备得更为深入一点。

对于网络这部分，最重要的是要有一个大的概念，下面也会介绍。

![network-cover](./assets/imgs/topics/network/network-cover.jpg)

- [网络通讯模型](./topics/network/network-model.md)
- [子网掩码](./topics/network/net-mask.md)
- [TCP](./topics/network/tcp.md)
- [UDP](./topics/network/udp.md)(TODO)
- [HTTP](./topics/network/http.md)(TODO)
- [HTTPS](./topics/network/https.md)(TODO)
- [DNS](./topics/network/dns.md)(TODO)

### node

<img src="./assets/imgs/topics/node/node-cover.png" alt="node" width="50%" align=center />

> 还没开始整理

如果你要做全栈或者后端，那么 node 是一个相对平滑的选择

- [node 基础 API](./topics/node/basic.md)(TODO)
- [node 集群](./topics/node/cluster.md)(TODO)
- [node 监控](./topics/node/monitor.md)(TODO)
- [node 底层架构和原理](./topics/node/internal.md)(TODO)
- [node 和 deno 的区别](./topics/node/deno.md)(TODO)
- [express 和 koa 等 web 框架](./topics/node/web-framework.md)(TODO)

### 操作系统 💻

- [内存分配](./topics/os/memory/allocation.md)
- [线程和进程](./topics/os/process/thread.md)(TODO)

### 包管理 📦

随着前端项目越来越复杂，我们需要组织的模块数量增加，包管理慢慢浮出水面，
大家都开始讨论这个东西。 很多时候，一个项目的业务代码还不到依赖项的1%。

我们拿三个比较经典的包管理工具来讲解一下他们试图解决的问题，以及分别的优缺点，
按照时间线来说他们分别是npm,yarn, tink。

- [npm](./topics/package/npm.md)(TODO)
- [yarn](./topics/package/yarn.md)(TODO)
- [tink](./topics/package/tink.md)(TODO)

### 性能优化 ⏩

性能优化是在面试中被问到的最多的题目了，这部分需要候选人有足够的深度和广度才能回答的比较全面，也是
很容易体现候选人实力的一个点了。

这部分可以参考我之前写的[文章](https://github.com/azl397985856/automate-everything/blob/master/docs/chapter4.md)

### 编程范式

常见的编程范式有`函数式编程`、`面向对象编程`、`响应式编程`等。

在面向对象编程的世界，程序是一系列相互作用（方法）的对象，而在函数式编程的世界，程序会是一个无状态的函数组合序列。
在响应式变成的世界里，程序就是流的组合和操作。

不同的编程范式有着不同的适用场景，因此了解各种编程范式是很有必要的。

> 还没开始整理

#### 面向对象 👧🏻

TODO

#### 函数式编程

这个是我之前写的[函数式编程系列教程](https://github.com/azl397985856/functional-programming)

#### 响应式编程

TODO

### 状态管理

状态管理这个东西在React和Vue这种视图框架大规模出现之后才出现的东西，
因此React或者Vue只是解决了状态到视图的映射关系，没有解决数据的产生和维护问题，
因此状态管理框架应运而生，比较著名的有redux， mobx，vuex等。

- [状态管理的本质是什么？我们为什么需要它]() (TODO)
- [Redux]() (TODO)
- [Mobx]() (TODO)

### 项目经验

<img src="./assets/imgs/topics/project/project-cover.png" alt="project" align=center />

技术面试关心的一方面是你的技术基础，包括深度广度，编码能力，另一方面关注你的经验，即你做过的项目。

关于这部分要突出项目的难点，核心问题，如果没有特别的难点，你应该问下自己你对项目做过的思考，有什么优化点和不足，
包括团队和自身。

- [你的项目难点是什么]() (TODO)
- [做过的项目中技术架构是什么样的，可以优化么]() (TODO)

### 安全 🔐

> 还没开始整理


> xss, csrf 算是比较常见的安全问题了。
> 如果岗位对 node 有要求，那么安全问题肯定会更多，因此这部分需要更加关注。

### seo

SEO 一直是一个非常重要的话题，尤其是依赖搜索引擎排名的系统和网站。

虽然是一个很老的领域了，但是搜索引擎优化是在客户端渲染流行之后，又重新被捡起来，开始重视的一个东西。

### shell

在工作中，我们时不时会做一些自动化或者批处理，这个时候掌握 shell 一种相对直接完成任务的方式。
shell 功能强大且移植性好，尤其在运维领域被广泛使用。

作为程序员，掌握 shell 是一种进阶。

- [基础命令](./topics/shell/cmds.md)（TODO）
- [基础语法](./topics/shell/grammar.md)（TODO）

### ssr

其实网页早起都是 SSR，只不过为了提高性能和用户体验，大家开始转向 SPA，SPA 开始流行之后带来了两个问题：

1. SEO 不友好

2. 首次渲染时间长，导致诸如白屏时间长等问题

为了解决这两个问题，大家开始考虑使用 SSR + CSR 的方式。 其中也踩了无数的坑，到现在 SSR 相对而言已经比较成熟了。

### typescript

TS 是 JS 的超集，提供了很多 JS 没有的特性，尤其是 ES6 之前。ES6+的很多东西也是借鉴了 TS。

TS 对于构建大型系统有着得天独厚的优势，丰富的类型签名就是天生的最好的文档，因此它会及时更新，不存在代码和文档不一致的情况。
使用接口定义可以实现很好的协同，也可以避免一些潜在的 bug。

总之 TS 是一个非常值得学习的强类型语言。

### v8

<img src="./assets/imgs/topics/v8/v8-cover.jpg" width = "50%" height = "50%" alt="V8" align=center />

> 还没开始整理

- [垃圾回收器](./topics/v8/gc.md)(TODO)
- [预测优化](./topics/v8/gc.md)(TODO)
- [shapes 和 inline cache](./topics/v8/shapes-and-inline-cache.md)(TODO)

### 标准化

标准这个东西真的很重要，非常遗憾的是国内没有什么知名标准化的组织，都是在国外。

标准化能给我们带来什么？ 那就太多了，如果没有标准化，我们的世界不能想象会乱成什么样。

想象一下如果没有`USB`  `TypeC`等这些规范，我们会多么不方便，更不要说别的了。

前端的标准化组织化就两个，一个是`TC39`, 一个是`W3C`，关注好这两个组织，
对于你理解大方向很关键。 下面是官方的Github仓库：

- [ECMA TC39](https://github.com/tc39?type=source)
- [W3C](https://github.com/w3c?type=source)

> 重点关注一些标准化组织的信息和社区的讨论。

### 模块化

我在[模块化和组件化](https://github.com/azl397985856/automate-everything/blob/master/docs/chapter2.md) 这篇文章
讲解了模块化的一部分基础知识，在这里我还会讲解一些大家对模块化的误区，以及一些经典问题, eg: AMD，cjs,umd,esm 区别问题

- [循环引用问题](./topics/modular/circular.md)
### web assembly

> 待整理

WebAssembly 是一种可以使用非 JavaScript 编程语言编写代码并且能在浏览器上运行的技术方案。

### 工作流 ⏳

<img src="./assets/imgs/topics/work-flow/work-flow-cover.png" width = "70%" height = "70%" alt="wf" align=center />

工作流是一个偏工程的话题，这部分主要考察候选人工程能力和意识。
工作流指的是日常开发中的各个环节的组合，下面我们一一讲解。

#### 构建器

可以参考我之前开的一个仓库[从零开始开发一个 Webpack](https://github.com/azl397985856/mono-webpack)

当然了解了webpack的基本原理还不够，面试中还会问一些工程性的问题，比如：

- [如何用webpack管理应用的环境相关配置]() （TODO）
- [如何用webpack做一些基础的性能优化]()（TODO）
- [如何用webpack的配置项如何管理]()（TODO）

#### 触发器

TODO

#### linter

linter 是为了帮我我们找出 bug 而存在的，不要过分高估它的功能，用它来代替 code review 或者 formatter 的工作。

#### 格式化

格式化应该是自动的，不应该是手动的。 每个团队的格式化标准可能都不一样，不要
让人去适应这些，没有什么意义，而是交给工具去做。

#### 任务管理

在npm出现之前，做任务管理的方式主要是自己处理或者记住第三方库，比如`grunt`，但是npm出现之后，
大家发现其实`npm script` + `构建工具`就可以解决前端绝大多数问题了。包括VSCODE中的任务管理，其实
都有和npm有着很好的集成。

![task-runner](./assets/imgs/topics/work-flow/task-runner.jpg)

我们这里主要讲讲如何通过`npm script`来做前端的任务管理，从而打造高效的前端工作流程。

#### 版本管理

这里的版本管理指的是发布过程的版本管理，即我不通过回滚代码的情况，也可以做软件版本管理。

#### 代码管理

Git，SVN 只是代码管理的工具，不等同于代码管理。

项目代码需要有一个好的架构，需要高内聚低耦合，把各功能模块尽可能的分解成独立的，
在做真正的代码管路之前，我们要思考几个问题：

- 我们为什么要做代码管理 ？不做代码管理可以么？
- 做代码管理，主要的内容是什么？

最后我们再去研究怎么去做，这才是一个本应该有的流程。
不要一上来就是分支管理，git 操作，git workflow 啥的，会被绕进去，
到头来用工具解决了什么问题都不知道。

参考：

- [building QuickBooks: How Intuit Manages 10 Million Lines of Code](http://www.drdobbs.com/tools/building-quickbooks-how-intuit-manages-1/240003694)
- [Why Google Stores Billions of Lines of Code in a Single Repository](https://m.cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext)
- [Git 速学](https://github.com/azl397985856/git)

#### 前处理/后处理

> 待整理

### 跨端

跨端开发是一种权衡，一种开发效率和极致性能的权衡。
就好像虚拟 DOM 一样，虚拟 DOM 其实也是一种权衡，也是开发效率，维护性和极致性能之间的权衡。
如果你足够细心你会发现软件工程有很多这样的权衡。

#### flutter

Flutter 是谷歌的移动 UI 框架，可以快速在 iOS 和 Android 上构建高质量的原生用户界面。
Flutter 可以与现有的代码一起工作。在全世界，Flutter 正在被越来越多的开发者和组织使用，并且 Flutter 是完全免费、开源的。

#### RN

> 使用 JavaScript 和 React 编写原生移动应用

#### weex

<img src="./assets/imgs/topics/write-one-run-everywhere/weex/weex-cover.png" width = "50%" height = "50%" alt="weex" align=center />

- [weex 架构设计](./topics/write-one-run-everywhere/weex/architecture.md)

### 正则表达式

> 正则表达式是一组由字母和符号组成的特殊文本, 它可以用来从文本中找出满足你想要的格式的句子.

正则表达式其实就是在执行搜索时的格式，这部分内容比较枯燥和难懂，需要多加练习才能掌握。

这里推荐几个关于正则表达式的，我收藏的一些资源：

- [快速交互式学正则](https://github.com/ziishaned/learn-regex)
- [可视化正则表达式](https://regexper.com/)

当然如果你比较喜欢直接用别人写好的，这里还有[一份资料](https://any86.github.io/any-rule/)，可能适合你。

### 微前端

前端是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立运行、独立开发、独立部署。

微前端是一种架构风格，其中众多独立交付的前端应用组合成一个大型整体。

微前端目前已经到了实践阶段，虽然没有特别成熟的社区和解决方案，
但是不得不承认这是一种趋势，就像几年前的数据驱动一样。[技术雷达](https://www.thoughtworks.com/radar/techniques/micro-frontends)
也阐述了微前端目前所处的历史阶段。

使用微前端，主要有如下好处：


1. 由于代码可以独立开发，部署等。因此如果拆分良好的话代码会更少，更容易维护。

2. 不同的业务部门合作更加容易，团队更加独立自治。

3. 对于遗留系统，我们可以选择微前端的方式进行改造，而不是直接改变遗留系统的内部实现，
相对而言更加稳健。

一个典型的微前端系统大概是这样的：

![micro-frontend-cover](./assets/imgs/topics/micro-fe/micro-fe-cover.webp)
（图片来自： https://martinfowler.com/articles/micro-frontends.html）

这里后续会系统性列举一些微前端的资料。
### 可访问性 ♿

> 还没开始整理
> 可访问性一直是容易被忽略的一个点，这里我们简单聊一下前端的可访问性。

### 新技术 🆕

> 还没开始整理

面试经常会问一些你最近都在关注什么技术？或者直接就某一个新技术进行提问。
以下是我整理的一些个人认为比较新且有前景的技术：

- AI 人工智能正在改变着我们的生活，前端也不例外
- Severless 使得开发更聚焦
- IOT/AR/VR 带来的交互形式的变化
- 可视化


### 前端之外

很多时候用人单位会对《前端工程师》有“后端”，“运维”方面的要求，不过都是浅层次的。
不过大家还是要对这些知识有所了解才行，最起码不能有“这是后端的责任，这是运维的责任”的观念。

当然不排除有的公司需要你`多而精`，让你一个人打通整个产品线，这个时候你要考虑一下要不要选择这家公司。

用人单位普遍的技能要求有：

- [Java 开发基础](./topics/ends/java.md)（TODO）
- [Python 开发基础](./topics/ends/python.md)（TODO）
- [Go 开发基础](./topics/ends/go.md)（TODO）
- [运维知识](./topics/ends/ops.md)（TODO）
- [Github 和博客](./topics/ends/share.md)（TODO）

上面的东西选择性掌握即可，这可以说是加分项，一般不会要求这些都掌握的。

### 各大公司面试信息

> 声明：⚠️ 其中P级别的划分是结合自己对题目难度的理解，以及作者本人的陈述定义的。
这部分是很难定义的，但是为了给出大致的边界，我这里还是做了分类。如有不妥，请多多包涵。

- 阿里巴巴
 1. P5
   - [面试分享：2018阿里巴巴前端面试总结(题目+答案)](https://juejin.im/entry/5a968ba56fb9a06340524128)
 2. P6
   - [前端面试分享: 两年经验社招-阿里巴巴](https://segmentfault.com/a/1190000013538920)
   - [面试分享：一年经验初探阿里巴巴前端社招](https://github.com/jawil/blog/issues/22)
   - [阿里巴巴前端面试分享-社招（p6）](https://zhuanlan.zhihu.com/p/57131643)

- 头条
 1. P4
   - [今日头条前端面试-2018.03.23](https://blog.csdn.net/csu_passer/article/details/79668028)
   - [记一次字节跳动前端面试，已拿offer](https://www.nowcoder.com/discuss/177482)
   - [字节跳动 前端 三面面经](https://www.nowcoder.com/discuss/171705)
   - [2019 字节跳动春招 web前端面试题 一面](https://www.nowcoder.com/discuss/170779)
   - [字节跳动前端实习一面二面HR面面经](https://www.nowcoder.com/discuss/170549)
   - [头条前端一面](https://www.nowcoder.com/discuss/171320)
   - [记一次今日头条前端面试](https://www.imooc.com/article/40112)
 2. P5
   - [前端面试-今日头条](https://github.com/linghuam/myblog/blob/master/source/_others/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95-%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1.md)
   - [字节跳动春招前端三轮面经](https://www.nowcoder.com/discuss/167553)
   - [今日头条前端三轮面试面经](https://www.nowcoder.com/discuss/105513)
 3. P6 
   - [字节跳动，前端面试](https://www.nowcoder.com/discuss/174632)

### HR

到了这一步说明技术上没有什么问题了，接下来就是 HR 看你这个人价值观是否符合了。

> 草稿

[和 HR 沟通](./topics/hr/hr.md)

### 模拟面试

- [Front-end-Developer-Interview-Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions)



## 声明

本仓库的所有内容都是本人自己整理的，因此可能有不够完善，优秀甚至错误的地方，大家可以随意提问题。

对于前端的技能图谱，我比较推荐[这个网站](https://roadmap.sh/frontend)。
这个网站相对于其他的前端技能图谱，更新地更快一点，其他的技能图谱很多都落伍了。

## 交流群

现在还是初级阶段，需要大家的意见和反馈，为了减少沟通成本，我组建了交流群。大家可以扫码进入

### QQ 群

![qq-group-chat](./assets/imgs/qq-group-chat.png)

### 微信群

<img src="./assets/imgs/wechat-group-chat.png" width = "50%" height = "50%" alt="JavaScript" align=center />

## 贡献

- 项目刚刚创建，个人精力有限。再加上有些东西我本人也不是很精通，因此邀请各路仙友加入到这个项目中来，欢迎大家认领相应的模块，当然也可以添加新的模块。
- 如果有想法和创意，请提[issue](https://github.com/azl397985856/frontend-interview/issues)或者进群提
- 如果想贡献代码，请提[PR](https://github.com/azl397985856/frontend-interview/pulls)
- 如果需要修改项目中图片，[这里](./assets/drawio/)存放了项目中绘制图的源代码， 大家可以用[draw.io](https://www.draw.io/)打开进行编辑。

## License

[Apache-2.0](./LICENSE.txt)
