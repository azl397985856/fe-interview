# 循环引用问题

"循环加载"（circular dependency）指的是，a脚本的执行依赖b脚本，而b脚本的执行又依赖a脚本。

“循环加载” 其实要比你想象的要常见的多，这里不做过分发散，我们来看下CommonJS模块加载规范和ESM加载规范对于
循环加载的处理是怎么样的，以及原理是什么。

## CommonJS

CommonJS是一种同步加载模块的规范，require命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象。
当用户再次加载同一个模块的时候，就不会执行了，而是直接从内存中取。

CommonJS 中一个模块在内存中会使用一个对象来表示，形如：

```js
{
  id: '...',
  exports: { ... },
  loaded: true,
  ...
}

```

这里我们重点关注`exports属性`, 
第一次加载之后会在内容中加入一条这样的记录，以后需要用到这个模块的时候，就会到exports属性上面取值。
即使再次执行require命令，也不会再次执行该模块。因此CommonJS的做法是，一旦出现某个模块被"循环加载"，
就只输出已经执行的部分，还未执行的部分不会输出，而不会“无限循环”下去。

[nodejs官网](https://nodejs.org/api/modules.html#modules_cycles)也给了一个`循环加载`的例子，大家可以结合这个例子理解一下，稍等我将ESM的时候，
也会对比来看。

## ESM

ESM对与循环加载的处理方式是完全不一致的，它遇到模块加载命令import时，不会去执行模块，而是只生成一个引用。等到真的需要用到时，再到模块里面去取值。


我们来举个例子，这个demo也是社区中比较经典的一个demo。 我们来对比一下二者的区别：

ESM:

```js

// even.js
import { odd } from './odd'
export var counter = 0;
export function even(n) {
  counter++;
  return n == 0 || odd(n - 1);
}

// odd.js
import { even } from './even';
export function odd(n) {
  return n != 0 && even(n - 1);
}
// main.js
import * as m from './even.js';

console.log(m.even(10)); // true
console.log(m.counter); // 6

console.log(m.even(5)); // false
console.log(m.counter); // 9

```

没有任何问题，完全符合预期。


我们再来看一些CommonJS：

```js
// even.js
const { odd } = require('./odd')

exports.counter = 0;
exports.even = function even(n) {
  exports.counter++;
  return n == 0 || odd(n - 1);
}
// odd.js
const { even } = require("./even");

exports.odd =  function odd(n) {
  return n != 0 && even(n - 1);
}
// main.js
const m = require("./even.js");

console.log(m.even(10));
console.log(m.counter);

console.log(m.even(5));
console.log(m.counter);

```

上面代码会报错，原因在于`odd.js中的even是undefined`. 原因就是
CommonJS同步执行的，odd.js后面的代码还没执行到， module 上还是空的。



没关系，我们稍微修改一下代码即可,如下代码会正常运行

```js
// even.js
exports.counter = 0;
exports.even = function even(n) {
  exports.counter++;
  return n == 0 || odd(n - 1);
}
// 我把require放到了这里
const { odd } = require('./odd')
// odd.js
const { even } = require("./even");

exports.odd =  function odd(n) {
  return n != 0 && even(n - 1);
}
// main.js
const m = require("./even.js");

console.log(m.even(10));
console.log(m.counter);

console.log(m.even(5));
console.log(m.counter);

```


不知道大家听懂了没，如果没听懂，我会在之后更新一版图解。