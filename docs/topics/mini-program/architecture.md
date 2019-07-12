# 小程序架构

其实小程序和 PWA，以及快应用有着类似的业务使用场景，感官上有着相似的地方。
尽管原理上有很大的差异。

本文以微信小程序为例，我们来讲解一下小程序的架构，其他的小程序，比如支付宝小程序，百度小程序都是类似的原理。

## 基本原理

说到微信小程序就不得不提它的多线程模型，小程序有一个 JS 线程和若干个 webview，我们称之为 view 层，
view 不能够执行 JS 代码，而是负责 UI 显示，它由开发者编写的 wxml 和 wxss 转换后代码以及微信提供相关辅助模块组成。

一个 view 模块对应一个 webview 组件（也就是我们常规理解的一个页面）, 小程序支持同时多个 view 存在。view 模块通过 WeixinJSBridge 对象来跟后台通信。

微信 Native 程序会预先加载一个 WebView，当打开指定页面时，无需加载额外资源直接渲染，这样会感觉
小程序会很快。

JS 线程我们称之为 service，service 模块负责应用的后台逻辑，
它由小程序的 js 代码以及微信提供的相关辅助模块组成。
一个应用只有一个 service 进程
，它同样也是一个页面（至少在开发者工具内如此，上线后可能运行于 WeixinJSCore 之内），
与 view 模块不同的是，它在程序生命周期内后台运行，service 模块通过与 view 模块实现不同但接口格式一样的 WeixinJSBridge 对象跟后台通信。

多线程模型的原理图大概是这样的：

![architecture-3](../../assets/imgs/topics/mini-program/architecture-3.jpg)
(图片来自 https://zhuanlan.zhihu.com/p/22754296)

交互通过系统层的 JSBridge 进行，当用户进行操作触发了事件，通过 JSBridge 通知逻辑层，逻辑层执行对应逻辑并把数据通过 JSBridge 传递给视图层，视图层执行相应的操作。

![architecture-1](../../assets/imgs/topics/mini-program/architecture-1.webp)
（图片来自 https://www.jianshu.com/p/4e8ed26d3b7a）

小程序也会与 CDN 和 web server 进行一些交互，具体为：
小程序初始化时，先从微信的 CDN 下载小程序的完整的包，然后在微信内部进行解包初始化。

![architecture-2](../../assets/imgs/topics/mini-program/architecture-2.webp)
（图片来自 https://www.jianshu.com/p/4e8ed26d3b7a）

## 不足

json 格式的数据传递和解析相比与原生 API 都是损耗不菲的，如果频繁调用很可能损耗 过多性能，进而影响用户体验。

而支付宝小程序也看到了这一点，他们也做了一些自己的尝试来解决这个问题，主要原理图：

![architecture-4](../../assets/imgs/topics/mini-program/architecture-4.png)
(图片来自 https://www.infoq.cn/article/ullETz7q_Ue4dUptKgKC)

感兴趣的可以读一下文末的参考链接
## 总结

- 提前新建 Web View，准备新页面渲染

- View 层和逻辑层分离，通过数据驱动，不直接操作 DOM

- 使用 Virtual DOM，进行局部更新

- 全部使用 https，确保传输过程中安全

- 前端组件化开发

- 加入 rpx 单位，隔离设备尺寸，方便开发

## 参考链接

- [《微信小程序架构解析》](https://www.jianshu.com/p/4e8ed26d3b7a)
- [微信小程序架构分析 (上)](https://zhuanlan.zhihu.com/p/22754296)
- [独家！支付宝小程序技术架构全解析](https://www.infoq.cn/article/ullETz7q_Ue4dUptKgKC)
