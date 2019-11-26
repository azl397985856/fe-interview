## 一、引子

```js
var name = "Heternally";
var obj = {
  name: "zl",
  foo: function() {
    console.log(this.bar);
  }
};

var foo = obj.foo;

obj.foo(); // "zl"
foo(); // "Heternally"
```
可以看到上面代码中，`obj.foo`和`foo`都指向同一个函数，但是执行结果却不一样；产生这种差异的原因，就在于函数体内部使用了`this`关键字；

相信很多文章都会说，**`this`指向的是函数运行时所在的环境。**

所以上面的问题，对`obj.foo()`来说，`foo`运行在`obj`环境中，所以`this`指向`obj`；对于`foo()`来说，`foo`运行在全局环境下，所以在非严格模式下`this`指向`window`，所以导致了两者运行的结果不同；

看到这有的同学可能就有疑问了，函数的运行环境是如何判定的？为什么`obj.foo()`就是在`obj`环境，为何`var foo = obj.foo;`，`foo()`就在全局环境执行了；

接下来就跟同学们讲解一下为何`Javascript`这样处理，带你彻底理解`this`。

## 二、为何设计`this`关键字

要理解`this`的设计，我们需要先了解`Javascript`中内存的数据结构；

`Javascript`内置七种数据类型，可以分为**基本数据类型**和**对象数据类型**，在这里我们主要讲解一下**对象数据类型**在内存中的存储方式；

```js
var obj = { name: 'Heternally'};
```
`Javascript`引擎在处理上面代码时，会在**堆内存**中，生成一个对象`{ name: 'Heternally'}`，然后把这个对象在内存中的地址赋值给变量`obj`。所以在读取`obj.name`时，需要先从变量`obj`拿到地址，然后再从对应地址中拿到对象，再返回它的`name`属性。

可能看到这里会有同学要问这跟`this`有啥关系，别急，接下来重点来啦：

对象的属性可能是一个函数，当引擎遇到对象属性是函数的情况，会将函数单独保存在**堆**中，然后再将函数的地址赋值给对象属性；而`Javascript`是允许在函数体内引用当前环境的其他变量，那么问题来了，函数可以在不同的运行环境执行，所以我们就需要一种机制，能够在函数内获得当前运行环境，由此诞生了`this`，**它的设计目的就是指向函数运行时所在的环境。**

理解了`this`的设计，剩下的难点就是如何正确的判定它所指向的环境。

## 三、如何正确判定`this`指向

总结了`this`的绑定规则总共是有下面5种：
* 1、默认绑定（严格/非严格模式）
* 2、隐式绑定
* 3、显式绑定
* 4、new绑定
* 5、ES6箭头函数绑定

### 1、默认绑定

#### 1.1 严格模式

在严格模式下，不能将全局对象`window`作为默认绑定，此时`this`会绑定到`undefined`，但是在严格模式下调用函数则不会影响默认绑定。

```js
(() => {
  "use strict"
  function foo() {
    console.log(this.name);
  };
  var name = "Heternally";
  foo(); 
})();

// Uncaught TypeError: Cannot read property 'name' of undefined at foo
```

```js
var name = 'Heternally';
function foo() {
  console.log(this.name);
};

(() => {
  "use strict"
  foo();
})();

// Heternally
```

#### 1.2 非严格模式

在非严格模式下，此时`this`就指向**全局对象**

```js
var name = 'Heternally';
function foo() {
  console.log(this.name);
}

foo(); // Heternally
```

### 2、隐式绑定

当函数作为对象的属性存在，通过**对象属性执行函数**时，此时隐式绑定规则会将`this`绑定到对象上；

```js
var name = 'Heternally';
function foo() {
  console.log(this.name);
}

var obj = {
  name: 'zl',
  foo,
}

obj.foo(); // zl
```

注意上面代码中函数执行方式是通过**对象属性**执行

```js
var name = 'Heternally';
function foo() {
  console.log(this.name);
}

var obj = {
  name: 'zl',
  foo,
}

foo(); // Heternally

var foo1 = obj.foo; 

foo1(); // Heternally

obj.foo(); // zl
```
由上面代码可以发现，通过赋值操作后执行函数，会应用默认绑定，此时在非严格模式下`this`会指向全局对象。

同样的，函数传参也是一种隐式赋值，此时在回调函数中会丢失`this`绑定。

```js
function foo() {
  console.log(this.name);
}

function Foo(fn) {
  fn();
}

var obj = {
  name: 'zl',
  foo,
}

var name = 'Heternally';

Foo(obj.foo); // Heternally
```

### 3、显式绑定

**通过 `call` `apply` `bind`绑定**

相信同学们都知道这三个方法的作用，这边就主要拿`call`来举例；

> 一句话介绍`call`：使用一个指定的`this`和若干个指定的参数调用某个函数或方法。

在讲解`call`显示绑定之前，我们先想一下`call`做了哪些事儿。

* 将函数设为对象的属性
* 指定函数的this，并进行传参
* 执行&删除函数
* 判定如果没有指定要绑定的this，非严格模式下默认指向全局对象

可以看到值调用`call`方法后，会将`this`绑定到指定对象，所以称为**显示绑定**

```js
function foo() {
  console.log(this.name);
}

var obj = {
  name: 'Heternally',
}

var obj1 = {
  name: 'Heternally1'
}

var name = 'zl';

foo.call(obj); // Heternally  调用call方法后强行将foo函数的this指向来obj对象上

foo.call(obj).call(obj1); // Heternally  多次调用call方法，以第一次为准

foo.call(obj1).call(obj); // Heternally1

foo.call();// zl 没有传入指定对象，所以this默认指向全局对象
```
> 如果call、apple、bind的绑定对象是null或者undefined，那么实际上在调用时这些值都会被忽略，所以使用的是默认绑定规则


### 4、通过new绑定

我们先看看构造函数在使用`new`后，执行了什么操作：
* 它创建（构造）了一个全新的对象
* 它会被执行[[Prototype]]（也就是__proto__）链接
* 它使this指向新创建的对象
* 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上
* 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用

所以在使用`new`调用构造函数后，会构造一个新对象并将函数调用中的`this`绑定到新对象上。

```js
var name = 'zl';

function foo(name) {
  this.name = name;
}

var bar = {
  name: 'object',
  foo1: new foo('Heternally'),
}

console.log(bar.foo1.name); // Heternally
```

构造函数是存在返回值的，可以将函数的返回值分成三种情况：

* 返回一个对象
* 没有返回值，即默认返回`undefined`
* 返回基本数据类型

```js
1、返回一个对象
function Foo(name,age) {
  this.name = name;
  return {
    age
  }
}

var bar = new Foo("Heternally","18");

bar.name; // undefined

bar.age; // 18

2、没有返回值

function Foo(name,age) {
  this.name = name;
}

var bar = new Foo("Heternally","18");

bar.name; // Heternally

bar.age; // undefined

3、返回基本数据类型

function Foo(name,age) {
  this.name = name;
  return 123
}

var bar = new Foo("Heternally","18");

bar.name; // Heternally

bar.age; // undefined
```

所以使用`new`绑定时，需要判断函数返回的值是否为一个对象，如果是对象，那么`this`会绑定到返回的对象上。

### 5、ES6箭头函数绑定

ES6新增了一种函数类型：箭头函数，箭头函数调用时无法使用上面四种规则了，它和普通函数最不同的一点就是对于箭头函数的`this`指向，是根据它外层（函数/全局）作用域来决定。

```js
function foo() {
  return (name) => {
    console.log(this.name);
  }
}

var obj = {
  name: 'Heternally'
}

var obj1 = {
  name: 'text'
}

var name = 'zl';

var foo1 = foo();
foo1(); // zl

var foo2 = foo.call(obj);
foo2(); // Heternally

foo2.call(obj1); // Heternally 可以看到，箭头函数的`this`绑定后无法被修改

```


### 6、规则优先级

```js
1、new绑定
var obj = new Foo();
this绑定新的对象上

2、显示绑定
var obj = foo.call(bar);
this绑定到指定对象上，若指定对象为null/undefined或着没传，则使用默认绑定规则

3、隐式绑定
var obj = bar.foo();
this绑定到调用方法的对象上

4、默认绑定
foo();
this在严格模式下绑定到undefined
在非严格模式下绑定到全局对象
```

> [原文链接](https://github.com/HEternally/Blog/blob/master/this%E5%85%A8%E9%9D%A2%E8%A7%A3%E6%9E%90.md)