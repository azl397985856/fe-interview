# 原型和继承

## 继承

继承是一种代码复用的方式。在面向对象编程中，继承是一个很重要的点。

在JS中继承背后的原理是原型`prototype`, 这种实现继承的方式，我们称之为原型继承。

## 全局对象

JS中一些全局内置函数，分别为Functon, Array, Object.

```js
console.log(Object); // -> ƒ Object() { [native code] }
console.log(Array); // -> ƒ Array() { [native code] }
console.log(Function); // -> ƒ Function() { [native code] }
```

- 所有的数组对象，都是由全局内置函数Array创建的
- 所有的object对象，都是由全局内置函数Object创建的
- 所有的函数对象，都是由全局内置函数Function创建的

其他也是同理，比如:

```js
1..__proto__ === Number.prototype; // true
1'.__proto__ === String.prototype; // true
true.__proto__ === Boolean.prototype; // true
```

> 关于__proto__，prototype 以及 两者关系我稍后会讲。

## __proto__

__proto__ 是一个内部属性，不建议对其进行直接操作。 而是建议通过prototype来进行操作。

`一个对象的__proto__总是指向它的构造函数的prototype`。

> 构造函数指的是创建这个对象的函数， 比如 foo = new Foo(), 那么Foo就是foo的构造函数。

让我们来继续看一下上面的代码, 就不难理解了：

```js
1..__proto__ === Number.prototype; // true
1'.__proto__ === String.prototype; // true
true.__proto__ === Boolean.prototype; // true
```

除此我们需要注意一点，那就是`Object.prototype.__proto__` 值为 null。
其实也就是继承链的终点，关于继承链我们后面会讲。

## 原型链

为了能够明白原型链和继承，我们首先要知道“属性查找机制”。

当我们访问一个对象的属性的时候，引擎首先会在当前对象进行查找，如果找不到就会访问该对象的`__proto__`，
如果`__proto__`有了，就返回，如果没有则递归执行上述过程，直到`__proto__` 为 `null`。

对于如下代码：

```js
var obj = {};

obj.access

```
引擎的内部逻辑大概是这样的：

```
__proto__ === null
|
|
__proto__ === Object.prototype
|
|
{ object literal }

```

如果用代码表示的话，大概是这样的：

```js
function  getProp(obj, prop) {
  let proto = obj;
  while(proto && proto[prop] === void 0) {
    proto = proto.__proto__;
  }
  return proto === null ? void 0 : obj[prop];
}

```

可以看出这个继承的过程，直接依靠的是`__proto__`，
只不过就像我上面提到的`__proto__ 只是一个指向 构造函数 原型的引用`，
因此开发人员修改了构造函数的原型，就会影响到`__proto__`， 进而影响了对象的原型链。

当然你可以自己直接修改`__proto__`，但是不推荐！

```js
var obj = {};
obj.__proto__.nickName = 'lucifer';
console.log(obj); // -> {}
console.log(obj.nickName); // -> lucifer
```

整个过程如图：

```
__proto__ === null
|
|
__proto__ === Object.prototype -> nickName: 'lucifer'
|
|
obj

```

## new
其实继承和原型这部分知识和new是强相关的。 我们有必要了解一下new的原理。

new 的原理很简单, 就是引擎内部新建一个空对象，然后将这个空对象的__proto__ 
指向构造函数的prototype.然后调用构造函数，去填充我们创建的空对象(如果有必要)。
最后将this指向我们刚刚创建的新对象。


如果用代码来表示，大概是这样的：

```js
function myNew(constructor, ...args) {
  const obj = {};
  obj.__proto__ = constructor.prototype;
  const ret = constructor.call(obj, ...args);
  return ret instanceof Object ? ret : obj;
}
```

## 检测一下

我们来看一段代码，来检测一下我们的学习成果。

```js
function Fn() {}
var obj = new Fn();
console.log(obj.__proto__ === Fn.prototype);
// -> true
console.log(obj.__proto__.__proto__=== Object.prototype);
// -> true
console.log(obj.__proto__.__proto__.__proto__ === null);
// -> true

```

用图来表示大概是这样的：

```js

__proto__ === null
|
|             
__proto__ === Object.prototype
|
|
__proto__ === Fn.prototype
|
|
obj

```

## 总结
这一节我们讲解了原型prototype，属性查找机制，以及原型链。

我们直到了实现继承实际上是基于__proto__ 的，而不是prototype. 
我们可以通过构造函数的原型从而修改对象的__proto__。

经过上面的讲解，如果你想实现继承也就不是难事了。

最后来两个思考题：

-  如果我不使用继承来实现代码复用，而是直接挂载到当前对象（this）上，会有什么问题。
-  如果我们把对象的私有属性挂载到原型上会发生了什么？



## 参考

- [master-javascript-prototypes-inheritance](https://codeburst.io/master-javascript-prototypes-inheritance-d0a9a5a75c4e)