# 内置类型

## 概述

ECMAScript 规范规定语言类型有六种 `Undefined，Null，Boolean，String，Number，和 Object`，
ES6 又添加了一种基本类型，叫`Symbol`。

其中 Object 是引用类型，其他是基本类型。他们的划分方式其实是其是否可以表示为固定长度，
比如`Undefined，Null，Boolean，String，Number` 这些可以有固定长度，因此是基本类型，并且保存到了栈上。
`Object` 由于不可预知长度，并且可以 mutate，因此算引用类型，会被分配到了另一块区域，我们称之为堆（heap）。

> 字符串是不可变的，因此被认为有固定长度。

![buit-in-types](https://p.ipic.vip/wrpt5s.jpg)

其实类型指的是值的类型，不是变量的类型，这是动态语言和静态语言的差异。
对于静态语言来说，我们可以限定一个变量的类型。但是对于 JS 这种动态类型的语言来说，
我们无法给变量限定类型，变量的类型是可变的。举个例子：

```js
var a = 1;
typeof a; // "number"

a = {};
typeof a; // "object"
```

## typeof

我们可以用`typeof` 来判断一个值是什么类型，他会返回上述的六种中的一种（事实上还会返回别的。我们等会说），
返回值为字符串，
唯独不会返回 null。这是一个 bug,并且由于影响深远，已经无法去修复了。

```js
typeof null === "object"; // true
```

如果你想判断一个值是不是 null 类型，你可以这么判断:

```js
function isNull(any) {
  return !any && typeof any === "object";
}
```

typeof 还会返回一个特殊的类型，并不在上面的七种, 没错就是 function

```js
typeof function a() {
  /* .. */
} === "function"; // true
```

最后我们来说下 undefined。其实这部分知识和[作用域和闭包](./scope&closures.md) 联系起来理解会更顺畅。

- undefined 不是未定义，两者有区别。尝试去读一个未定义的变量的值其实会直接`Reference Error`
- typeof 不能区分未定义，还是定义了但是没有值。两者都会都会返回undefined
- typeof 一个未定义的变量不会触发`Reference Error`

> 尽量不要用undefined, 因为undefined既是一个类型，同时也是一个值，因此这会在某些浏览器被修改（BUG？）。
更稳妥的做法是使用void 0 代替 undefined。

## Array

Array是一种容器类型，如果你懂的函数式编程或者了解范型的话，你会非常熟悉这个概念。

Array是一种容器类型，可以容纳任何类型，包括自己。如果Array里面容纳Array就会得到一个多维数组。
事实上，JS中有一些类数组， 类数组会有一些数据的属性和方法，但是确实被阉割的，因此对待类数组要小心，
一个稳妥的方法是转化为数组，比如使用`Array.from(arrayLike)` ,还有一种方法是借方法，
比如`Array.prototype.map.call(arrayLike)`。

> 其实你也可以用Array.prototype.slice.call(arrayLike) 来将类数组转化成数组。

String 其实就是字符的有序集合，因此我们可以将String看作 Char的数组，
准确地说，String是一种类数组。

## Number

JS 至今没有真正的整数，我们用的number事实上是浮点数。
JavaScript 明确地使用了“双精度”（也就是“64位二进制”）格式。

这部分常考的一个点是精度问题。

```js
0.1 + 0.2 === 0.3; // false
```

- 为什么会这样？

简单地说，0.1 和 0.2 的二进制表示形式是不精确的，所以它们相加时，结果不是精确地 0.3。而是 非常 接近的值：0.30000000000000004，但是如果你的比较失败了，“接近”是无关紧要的。

- 如何解决？

最常见的做法是使用一个很小的“错误舍入”值作为比较的 容差。
这个很小的值经常被称为“机械极小值（machine epsilon）”，
对于 JavaScript 来说这种 number 通常为 Number.EPSILON。

```js
function numbersCloseEnoughToEqual(n1,n2) {
	return Math.abs( n1 - n2 ) < Number.EPSILON;
}

var a = 0.1 + 0.2;
var b = 0.3;

numbersCloseEnoughToEqual( a, b );					// true
numbersCloseEnoughToEqual( 0.0000001, 0.0000002 );	// false

```

## 其他

其他需要注意的是包装类型，以及对应的box和unbox操作。

举几个例子：

```js
typeof String(123) === 'string' // true
typeof '123' === 'string' // true
typeof new String(123)  === 'object' // true
```
隐式转化和强制类型转化，大家可以去翻下资料，这部分资料很多。
## 参考

- [You Don't Know JS: Types & Grammar](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch2.md)