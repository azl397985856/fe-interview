# weex 架构设计

早期混合式开发，其实就是利用客户端内置的浏览器（也就是webview）功能，
我们只需要开发多个端的壳应用， 然后前端开发H5页面让其运行在webview上从而满足跨平台需求。
该方案显著提升了开发效率，也满足了跨端的需求。但是有一个明显的问题就是H5的性能和客户端的性能相差甚远。

后来阿里意识到这个问题，开始和vue合作，寻找性能更好的跨端解决方案，weex号称是性能媲美原生的跨段解决方案。


weex的整体结构图如图所示：

![architecture-1](https://p.ipic.vip/v8y3h8.jpg)


整体我们可以把它分成两部分，一部分是我们写的Vue代码，经过打包之后变成可以在
JS运行时执行的代码，我们称之为`JS bundle`, APP初始化完成之后，会去服务器拉取`JS bunlde`。

对于APP而言，我们可以把它看成由`JS bridge`, `JS runtime`, `native render`和`weex core`.

`JS runtime` 就是用来执行JS代码，在IOS使用的是JS Core，安卓上使用V8.
`JS runtime`首先回去拉取weex的核心代码，我称之为`weex core`,
这些核心代码会负责`JS bunlde`的解析执行工作.  `weex core`构建会构建虚拟DOM，
然后根据DOM diff算法将对应的修改patch到视图上。

中间翻译成native可以执行的代码，是通过`weex core`和`JS bridge`来完成的。
native render 复杂最终用户看到的视图的渲染。

原生渲染器接收上层传来的渲染指令，并且逐步将其渲染成原生组件。
我们在定义的`<div>, <p>,<span> `标签，就一一对应到了客户端的原生组件。

从这里我们其实可以看出来，weex最终会被渲染成native的视图，和webview没有任何关系，没有DOM相关的东西。

但是这种通过`JS bridge`进行通讯的方式也是它的性能瓶颈，如果减少数据传输量和次数是
性能的瓶颈所在，因此`flutter`这样的解决方案应运而生。我们会在`flutter`章节继续讲解flutter
相关的东西。